import os
import logging
import sys
from typing import List, Dict, Any
from llama_index.core import VectorStoreIndex, StorageContext, Document
from llama_index.embeddings.nomic import NomicEmbedding
from llama_index.vector_stores.supabase import SupabaseVectorStore
import vecs

# Setup logging
logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logger = logging.getLogger()
logger.addHandler(logging.StreamHandler(stream=sys.stdout))

# Setup API keys
nomic_api_key = os.getenv("NOMIC_API_KEY")
supabase_password = os.getenv("SUPABASE_PW")
supabase_url = os.getenv("SUPABASE_URL")

# Verify NOMIC_API_KEY
if nomic_api_key:
    logger.info(f"Nomic API Key (last 4 chars): {nomic_api_key[-4:]}")
else:
    logger.error("Nomic API key is not set")
    raise ValueError("Nomic API key is not set")

# Verify Supabase credentials
if not supabase_password or not supabase_url:
    logger.error("Supabase password or URL is not set")
    raise ValueError("Supabase password or URL is not set")

supabase_connection_string = (
    f"postgresql://postgres.splpbqdkqqcuqdvhxdqj:{supabase_password}@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"
)

# Initialize Nomic Embedding Model
embed_model = NomicEmbedding(
    api_key=nomic_api_key,
    dimensionality=768,
    model_name="nomic-embed-text-v1.5"
)

# Function to convert data to LlamaIndex documents
def convert_to_documents(data: List[Dict[str, Any]]) -> List[Document]:
    logger.info("Converting data to documents")
    documents = []
    for item in data:
        logger.debug(f"Processing item: {item}")
        doc = Document(
            text=item['content'],
            metadata={
                'id': item['id'],
                'title': item['title'],
                'author': item['author'],
                'url': item['url'],
                'date': item['date'],
                'excerpt': item['excerpt'],
                'token_count': item['token_count']
            }
        )
        documents.append(doc)
    logger.info(f"Converted {len(documents)} documents")
    return documents

# Function to index documents
def index_documents(documents: List[Document], collection_name="techinasia_collection"):
    logger.info(f"Indexing documents into collection: {collection_name}")
    # Create Supabase Vector Store
    vector_store = SupabaseVectorStore(
        postgres_connection_string=supabase_connection_string,
        collection_name=collection_name,
        dimension=768
    )
    storage_context = StorageContext.from_defaults(vector_store=vector_store)

    # Index documents with chunk size and show progress
    index = VectorStoreIndex.from_documents(
        documents,
        storage_context=storage_context,
        embed_model=embed_model,
        chunk_size=8192,
        show_progress=True
    )

    # Log the indexing process
    logger.info(f"Documents indexed successfully in collection: {collection_name}")

    return index

# Function to create collection if it does not exist
def create_collection_if_not_exists(collection_name: str, dimension: int = 768):
    logger.info(f"Checking if collection '{collection_name}' exists with dimension {dimension}")
    if not isinstance(dimension, int):
        logger.error(f"Invalid dimension value: {dimension}")
        raise ValueError(f"Invalid dimension value: {dimension}")

    # Create vector store client
    vx = vecs.create_client(supabase_connection_string)

    # Create or get collection
    collection = vx.get_or_create_collection(name=collection_name, dimension=dimension)

    # Create index for the collection
    collection.create_index()

    logger.info(f"Collection '{collection_name}' created or already exists with dimension {dimension}")
