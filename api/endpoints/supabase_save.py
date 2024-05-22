import os
from pydantic import BaseModel
from typing import List, Dict, Any
import logging
from supabase import create_client, Client

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Define data models
class SaveDataRequest(BaseModel):
    data: List[Dict[str, Any]]
    table_name: str = "techinasia_posts"

# Save data to Supabase
def save_data_to_supabase(supabase: Client, data: List[Dict[str, Any]], table_name: str):
    for item in data:
        try:
            # Check for duplicate
            response = supabase.table(table_name).select("id").eq("id", item["id"]).execute()
            if response.data:
                logger.info(f"Duplicate found for ID: {item['id']}, skipping.")
                continue

            # Insert data
            supabase.table(table_name).insert(item).execute()
            logger.info(f"Inserted data for ID: {item['id']}")
        except Exception as e:
            logger.error(f"Error saving data to Supabase: {e}")
            raise

# Function to initialize Supabase client and save data
def save_data(request: SaveDataRequest):
    try:
        # Initialize Supabase client inside the function
        SUPABASE_URL = os.getenv("SUPABASE_URL")
        SUPABASE_KEY = os.getenv("SUPABASE_KEY")
        if not SUPABASE_URL or not SUPABASE_KEY:
            raise ValueError("SUPABASE_URL and SUPABASE_KEY must be set")

        supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

        save_data_to_supabase(supabase, request.data, request.table_name)
        return {"status": "success", "message": "Data saved successfully"}
    except Exception as e:
        logger.error(f"Error saving data: {e}")
        raise
