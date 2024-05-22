from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Union, Optional
import logging
from datetime import datetime
from modal import Image, App, web_endpoint, Secret, Mount
from embedding_handler import EmbeddingHandler
import os
import sys

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app_image = (
    Image.debian_slim(python_version="3.10")
    .pip_install(
        "requests",
        "llama-index",
        "llama-index-embeddings-huggingface==0.2.0",
        "sentence-transformers",
        "torch",  # Ensure PyTorch is installed for GPU support
        "transformers",  # Ensure transformers library is installed
        "xformers",
        "llama_index.embeddings.nomic",
        "nomic"
    )
)

app = App(name="embed-svc", image=app_image, secrets=[
    Secret.from_name("my-huggingface-secret"),
    Secret.from_name("my-nomic-secret")
])

class EmbedRequest(BaseModel):
    data: Union[str, List[str]]
    model: Optional[str] = None  # Optional model name
    task: Optional[str] = None  # Optional task description

class EmbedResponse(BaseModel):
    embeddings: Union[List[float], List[List[float]]]
    model: str  # Include the model name in the response

@app.function(gpu="any", timeout=300, mounts=[
    Mount.from_local_dir(
        local_path="/Users/erniesg/code/erniesg/attn/api/endpoints",
        remote_path="/app/endpoints",
        condition=lambda pth: "embed.py" not in pth,
        recursive=True
    )
])
@web_endpoint(method="POST")
async def embed(request: EmbedRequest):
    sys.path.insert(0, '/app')
    sys.path.insert(0, '/app/endpoints')
    logger.info(f"Current sys.path: {sys.path}")
    logger.info(f"Files in the /app/endpoints directory: {os.listdir('/app/endpoints')}")

    huggingface_token = os.getenv("HUGGINGFACE_TOKEN")
    nomic_api_key = os.getenv("NOMIC_API_KEY")
    embedding_handler = EmbeddingHandler(huggingface_token=huggingface_token, nomic_api_key=nomic_api_key)

    try:
        if isinstance(request.data, str):
            embeddings, model = embedding_handler.generate_embedding(request.data, request.model, request.task)
        else:
            embeddings = []
            for text in request.data:
                embedding, model = embedding_handler.generate_embedding(text, request.model, request.task)
                embeddings.append(embedding)
        return {"embeddings": embeddings, "model": model}
    except Exception as e:
        logger.error(f"Embedding generation failed: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
