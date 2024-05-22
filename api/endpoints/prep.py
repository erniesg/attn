import os
import sys
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from typing import List, Dict, Any
import requests
import logging
from datetime import datetime
from modal import Image, App, web_endpoint, Secret, Mount
import tiktoken

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Define the application and image
app_image = (
    Image.debian_slim(python_version="3.10")
    .pip_install("requests", "tiktoken", "supabase", "llama_index", "llama_index.embeddings.nomic", "llama_index.vector_stores.supabase", "vecs", "nomic")
)

app = App(name="prep-svc", image=app_image, secrets=[Secret.from_name("my-anthropic-secret"), Secret.from_name("my-supabase-secret"), Secret.from_name("my-nomic-secret")])

# Define data models
class RowData(BaseModel):
    data: Dict[str, Any]

class PrepRequest(BaseModel):
    rows: List[RowData]
    config: str = Field(..., description="Configuration type for data mapping")
    action: str = Field("save", description="Action to perform: 'save', 'index', or 'map'")

class MappedData(BaseModel):
    id: str
    title: str
    author: str
    content: str
    url: str
    date: datetime = None  # Add date field
    excerpt: str = ""  # Add excerpt field
    token_count: int = 0  # Add token_count field

class PrepResponse(BaseModel):
    mapped_data: List[MappedData]

# Configuration mappings
CONFIGS = {
    "tia": {
        "id": "resource_id",
        "title": lambda row: row["title-author"].rsplit(" - ", 1)[0],
        "author": "author_name",
        "content": "md_content",
        "url": lambda row: f"https://www.techinasia.com/wp-json/techinasia/2.0/posts/{row['slug']}"
    },
    "default": {
        "id": "resource_id",
        "title": "title_author",
        "author": "author_name",
        "content": "md_content",
        "url": lambda row: f"https://example.com/posts/{row['slug']}"
    }
}

# Function to count tokens in the content using tiktoken
def count_tokens(content: str) -> int:
    enc = tiktoken.get_encoding("cl100k_base")
    tokens = enc.encode(content)
    return len(tokens)

# Function to map data based on configuration
def map_data(rows: List[Dict[str, Any]], config: str) -> List[MappedData]:
    if config not in CONFIGS:
        raise ValueError(f"Unknown config: {config}")

    config_map = CONFIGS[config]
    mapped_data = []

    for row in rows:
        logger.info(f"Processing row: {row}")  # Log each row being processed
        content = row[config_map["content"]]
        token_count = count_tokens(content)
        mapped_row = MappedData(
            id=row[config_map["id"]],
            title=config_map["title"](row) if callable(config_map["title"]) else row[config_map["title"]],
            author=row[config_map["author"]],
            content=content,
            url=config_map["url"](row) if callable(config_map["url"]) else row[config_map["url"]],
            date=None,  # Placeholder for date
            excerpt="",  # Placeholder for excerpt
            token_count=token_count  # Set token count
        )
        logger.info(f"Mapped row: {mapped_row}")  # Log the mapped row
        mapped_data.append(mapped_row)

    return mapped_data

# Function to call extract_tia endpoint
def fetch_additional_data(slug: str) -> Dict[str, Any]:
    url = "https://erniesg--extract-tia-svc-fetch-posts.modal.run"
    headers = {"Content-Type": "application/json"}
    payload = {"slugs": [slug]}

    try:
        response = requests.post(url, headers=headers, json=payload, timeout=10)  # Add timeout
        response.raise_for_status()  # Raise an HTTPError for bad responses
        data = response.json()
        if data["posts"]:
            post = data["posts"][0]
            return {
                "date": post.get("date_gmt"),
                "excerpt": post.get("excerpt")
            }
        else:
            logger.warning(f"No posts found for slug: {slug}")
            return {}
    except requests.exceptions.RequestException as e:
        logger.error(f"Failed to fetch additional data for slug: {slug}, error: {e}")
        return {"error": str(e)}

# Endpoint to process data
@app.function(
    secrets=[Secret.from_name("my-supabase-secret"), Secret.from_name("my-nomic-secret")],
    mounts=[
        Mount.from_local_dir(
            local_path="/Users/erniesg/code/erniesg/attn/api/endpoints",
            remote_path="/app/endpoints",
            condition=lambda pth: "prep.py" not in pth,
            recursive=True
        )
    ]
)
@web_endpoint(method="POST")
async def prep(request: PrepRequest) -> PrepResponse:
    sys.path.insert(0, '/app')
    sys.path.insert(0, '/app/endpoints')
    logger.info(f"Current sys.path: {sys.path}")
    logger.info(f"Files in the /app/endpoints directory: {os.listdir('/app/endpoints')}")
    logger.info(f"Files and directories in the current working directory: {os.listdir('.')}")

    # Import the save_data function from supabase_save.py
    from supabase_save import save_data, SaveDataRequest
    from index import index_documents, convert_to_documents, create_collection_if_not_exists  # Import functions from index.py
    from map import map_to_nomic_atlas  # Import the map function from map.py

    # Log the last few characters of the Supabase URL and key
    SUPABASE_URL = os.getenv("SUPABASE_URL")
    SUPABASE_KEY = os.getenv("SUPABASE_KEY")
    SUPABASE_PW = os.getenv("SUPABASE_PW")

    if SUPABASE_URL and SUPABASE_KEY:
        logger.info(f"Supabase URL (last 4 chars): {SUPABASE_URL[-4:]}")
        logger.info(f"Supabase Key (last 4 chars): {SUPABASE_KEY[-4:]}")
    else:
        logger.error("Supabase URL or Key is not set")
        raise HTTPException(status_code=500, detail="Supabase URL or Key is not set")

    try:
        rows = [row.data for row in request.rows]
        logger.info(f"Received {len(rows)} rows")  # Log the number of rows received
        if rows:
            logger.info(f"Each row has {len(rows[0])} columns")  # Log the number of columns in each row

        mapped_data = []
        errors = []

        for row in rows:
            try:
                mapped_row = map_data([row], request.config)[0]  # Map data for the single row
                slug = mapped_row.url.split('/')[-1]  # Extract slug from URL
                additional_data = fetch_additional_data(slug)
                if "error" in additional_data:
                    raise ValueError(additional_data["error"])
                mapped_row.date = additional_data.get("date")
                mapped_row.excerpt = additional_data.get("excerpt")
                logger.info(f"Updated mapped data with additional info: {mapped_row}")  # Log the updated mapped data
                mapped_data.append(mapped_row)
            except Exception as e:
                logger.error(f"Error processing row: {row}, error: {e}")
                errors.append({"row": row, "error": str(e)})

        logger.info(f"Length of mapped data: {len(mapped_data)}")  # Log the length of mapped data

        # Log the IDs and token counts
        for data in mapped_data:
            logger.info(f"ID: {data.id}, Token Count: {data.token_count}")

        logger.info(f"Prepared document")  # Log the prepared document

        if request.action == "index":
            try:
                # Convert mapped data to documents and index them
                documents = convert_to_documents([data.dict() for data in mapped_data])
                logger.info(f"Converted {len(documents)} documents for indexing")

                create_collection_if_not_exists("techinasia_collection")
                logger.info("Collection checked/created successfully")

                index_documents(documents)
                logger.info("Data indexed successfully")  # Log the indexing action
            except Exception as e:
                logger.error(f"Error during indexing: {e}")
                raise HTTPException(status_code=500, detail=f"Indexing error: {str(e)}")
        elif request.action == "map":
            try:
                # Map the data to Nomic Atlas
                map_url = map_to_nomic_atlas(mapped_data)
                logger.info(f"Data mapped successfully to Nomic Atlas: {map_url}")  # Log the mapping action
                return {"map_url": map_url}
            except Exception as e:
                logger.error(f"Error during mapping: {e}")
                raise HTTPException(status_code=500, detail=f"Mapping error: {str(e)}")
        else:
            try:
                # Save the mapped data to Supabase
                save_data_request = SaveDataRequest(
                    data=[data.dict() for data in mapped_data],
                    table_name="techinasia_posts"
                )
                save_data(save_data_request)
                logger.info("Data saved successfully")  # Log the save action
            except Exception as e:
                logger.error(f"Error during saving: {e}")
                raise HTTPException(status_code=500, detail=f"Saving error: {str(e)}")

        return PrepResponse(mapped_data=mapped_data)
    except Exception as e:
        logger.error(f"Error processing data: {e}")
        raise HTTPException(status_code=500, detail=str(e))
