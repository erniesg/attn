import logging
import requests
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
import torch

logger = logging.getLogger(__name__)

class EmbeddingHandler:
    def __init__(self, default_model="Alibaba-NLP/gte-large-en-v1.5", huggingface_token=None, nomic_api_key=None):
        self.default_model = default_model
        self.huggingface_token = huggingface_token
        self.nomic_api_key = nomic_api_key

    def generate_embedding(self, text, model=None, task=None):
        model = model or self.default_model
        device = "cuda" if torch.cuda.is_available() else "cpu"

        if model == "nomic-embed-text-v1.5":
            headers = {
                "Authorization": f"Bearer {self.nomic_api_key}",
                "Content-Type": "application/json"
            }
            data = {
                "model": model,
                "texts": [text]
            }
            response = requests.post("https://api-atlas.nomic.ai/v1/embedding/text", headers=headers, json=data)
            response.raise_for_status()
            embedding = response.json()["embeddings"][0]
        else:
            embed_model = HuggingFaceEmbedding(model_name=model, device=device, trust_remote_code=True)
            if task:
                text = f"Instruct: {task}\nQuery: {text}"
            embedding = embed_model.get_text_embedding(text)

        logger.info(f"Generated embedding for text: {text[:30]}... with model: {model} on device: {device}")  # Log the first 30 characters
        return embedding, model
