import os
import logging
from typing import List, Dict
from pydantic import BaseModel
import nomic
from nomic import atlas

# Configure logging
logger = logging.getLogger(__name__)

class MappedData(BaseModel):
    id: str
    title: str
    author: str
    content: str
    url: str
    date: str = None
    excerpt: str = ""
    token_count: int = 0

def map_to_nomic_atlas(mapped_data: List[MappedData]) -> str:
    # Initialize Nomic Atlas client
    nomic_api_key = os.getenv("NOMIC_API_KEY")
    if not nomic_api_key:
        logger.error("Nomic API key is not set")
        raise ValueError("Nomic API key is not set")

    # Log in to Nomic
    nomic.login(nomic_api_key)

    # Prepare data for Nomic Atlas
    atlas_data = [
        {
            "id": data.id,
            "title": data.title,
            "author": data.author,
            "content": data.content,
            "url": data.url,
            "date": data.date,
            "excerpt": data.excerpt,
            "token_count": data.token_count
        }
        for data in mapped_data
    ]

    # Create a dataset in Nomic Atlas
    dataset = atlas.map_data(
        data=atlas_data,
        indexed_field='content',  # Index the 'content' field
        description="TechInAsia Dataset",
        duplicate_detection=True,
        projection=True,
        topic_model=True
    )

    map_url = dataset.maps[0].url  # Retrieve the map URL

    logger.info(f"Map created successfully: {map_url}")
    return map_url
