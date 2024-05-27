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

def map_to_nomic_atlas(mapped_data: List[MappedData]) -> Dict:
    # Initialize Nomic Atlas client
    nomic_api_key = os.getenv("NOMIC_API_KEY")
    nomic.login(nomic_api_key)

    # Prepare data for Atlas
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

    # Retrieve the map URL and other details from the dataset object
    map_url = dataset.maps[0].map_link  # Access the URL correctly
    # topics = dataset.maps[0].topics.df.to_dict()  # Convert topics to dictionary
    status = dataset.maps[0]._status  # Get the status of the map

    logger.info(f"Map created successfully: {map_url}")
    return {
        "map_url": map_url,
        # "topics": topics,
        "status": status
    }
