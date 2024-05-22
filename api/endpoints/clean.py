from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
import logging
import re
import pypandoc
from modal import Image, App, web_endpoint, Secret, Mount

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Define the application and image
app_image = (
    Image.debian_slim(python_version="3.10")
    .apt_install("pandoc")  # Install pandoc
    .pip_install("pypandoc")
)

app = App(name="clean-svc", image=app_image, secrets=[Secret.from_name("my-anthropic-secret")])

# Define data models
class CleanRequest(BaseModel):
    raw_content: str

class CleanResponse(BaseModel):
    cleaned_content: str

# Mount the necessary files
@app.function(mounts=[
    Mount.from_local_dir(
        local_path="/Users/erniesg/code/erniesg/attn/api/endpoints",
        remote_path="/app/endpoints",
        condition=lambda pth: "clean.py" not in pth,
        recursive=True
    )
])

@web_endpoint(method="POST")
async def clean(request: CleanRequest) -> CleanResponse:
    try:
        logger.info(f"Incoming request type: {type(request)}")
        logger.info(f"Incoming request data: {request.raw_content}")

        logger.info("Starting preprocessing of raw content")
        cleaned_html = preprocess_raw_content(request.raw_content)
        logger.info(f"Preprocessed content")

        logger.info("Converting HTML to Markdown")
        cleaned_content = convert_html_to_markdown(cleaned_html)
        logger.info(f"Converted Markdown content")

        logger.info("Post-processing the Markdown content")
        cleaned_content = post_process_markdown(cleaned_content)
        logger.info(f"Post-processed Markdown content")

        # Clean up the backslashes added to FLOURISH_EMBED placeholders
        cleaned_content = re.sub(r'\\+\[FLOURISH_EMBED:', '[FLOURISH_EMBED:', cleaned_content)
        cleaned_content = re.sub(r'\\+\]', ']', cleaned_content)

        # Additional cleanup for any other escaped characters
        cleaned_content = re.sub(r'\\+', '', cleaned_content)

        logger.info("Extracting summary information")
        title, subheadings, flourish_count = extract_summary_info(cleaned_content)

        logger.info(f"Title: {title}")
        logger.info(f"Subheadings: {subheadings}")
        logger.info(f"Number of Flourish links: {flourish_count}")

        return CleanResponse(cleaned_content=cleaned_content)
    except Exception as e:
        logger.error(f"Error cleaning content: {str(e)}")
        raise HTTPException(status_code=500, detail="Error cleaning content")

def preprocess_raw_content(raw_content: str) -> str:
    # Remove extra quotation marks and backslashes
    logger.info(f"Raw content before preprocessing: {raw_content}")
    cleaned_html = raw_content.replace('\\"', '"').replace('\\', '')

    # Directly convert flourish-embed divs to the desired format
    flourish_pattern = re.compile(
        r'<div\s+class="flourish-embed\s+flourish-(\w+)"\s+data-src="([^"]+)"[^>]*></div>'
    )
    cleaned_html = flourish_pattern.sub(r'[FLOURISH_EMBED:\1|\2]', cleaned_html)

    logger.info(f"Cleaned HTML after preprocessing: {cleaned_html}")
    return cleaned_html

def convert_html_to_markdown(cleaned_html: str) -> str:
    # Convert HTML to Markdown using Pandoc with commonmark format
    cleaned_content = pypandoc.convert_text(cleaned_html, 'commonmark', format='html', extra_args=['--wrap=none'])
    logger.info(f"Conversion to Markdown complete: {cleaned_content}")
    return cleaned_content

def post_process_markdown(cleaned_content: str) -> str:
    # Remove all other div tags except for our placeholders
    cleaned_content = re.sub(r'</?div[^>]*>', '', cleaned_content)

    # Remove span tags
    cleaned_content = re.sub(r'</?span[^>]*>', '', cleaned_content)

    # Unescape the square brackets for FLOURISH_EMBED
    cleaned_content = cleaned_content.replace(r'\[FLOURISH_EMBED:', '[FLOURISH_EMBED:')
    cleaned_content = cleaned_content.replace(r'\]', ']')

    logger.info(f"Post-processed Markdown content: {cleaned_content}")
    return cleaned_content

def extract_summary_info(cleaned_content: str):
    # Extract title, subheadings, and count Flourish links
    title_match = re.search(r'^# (.+)$', cleaned_content, re.MULTILINE)
    title = title_match.group(1) if title_match else "No title found"

    subheadings = re.findall(r'^## (.+)$', cleaned_content, re.MULTILINE)

    flourish_count = len(re.findall(r'\[FLOURISH_EMBED:', cleaned_content))

    return title, subheadings, flourish_count
