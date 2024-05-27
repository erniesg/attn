from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
import logging
from typing import List, Optional
import json
from datetime import datetime
import sys
import os
from modal import Image, App, web_endpoint, Secret, Mount

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app_image = (
    Image.debian_slim(python_version="3.10")
    .pip_install(
        "requests",
        "anthropic",
        "openai",
        "tiktoken"
    )
)

app = App(name="generate-svc", image=app_image, secrets=[Secret.from_name("my-anthropic-secret"), Secret.from_name("my-openai-secret")])

class UserProfile(BaseModel):
    preferred_name: str = "Default Name"
    country_of_residence: str = "Default Country"
    age: int = 30
    job_title: str = "Default Job Title"
    job_function: str = "Default Job Function"
    interests: List[str] = ["technology", "science"]
    goals: str = "learn and explore"

class GenerateRequest(BaseModel):
    company: Optional[str] = None
    date_gmt: Optional[datetime] = None
    user_profile: Optional[UserProfile] = None
    model: str = "gpt-4o"
    provider: str = "openai"
    article_type: Optional[str] = None
    details: Optional[str] = None
    recent_news: Optional[str] = None
    financials: Optional[str] = None
    keyword: str
    headline: Optional[str] = None
    thesis: Optional[str] = None
    structure: Optional[str] = None
    topic_sentences: Optional[List[dict]] = None  # Add topic_sentences field
    content_blocks: Optional[List[dict]] = None  # Add content_blocks field

@app.function(mounts=[
    Mount.from_local_dir(
        local_path="/Users/erniesg/code/erniesg/attn/api/endpoints",
        remote_path="/app/endpoints",
        condition=lambda pth: "generate.py" not in pth,
        recursive=True
    )
])
@web_endpoint(method="POST")
async def generate(request: GenerateRequest):
    sys.path.insert(0, '/app')
    sys.path.insert(0, '/app/endpoints')
    from llm_handler import LLMHandler
    llm_handler = LLMHandler(provider=request.provider)
    from prompts import get_prompts

    if request.keyword == "full_article":
        response_text = await generate_full_article(request)
        return {"full_article": response_text}
    elif request.keyword == "draft":
        response_text = await generate_draft(request)
        return {"draft": response_text}
    elif request.keyword == "topic_sentences":
        response_text = await generate_topic_sentences(request)
        return {"topic_sentences": response_text}
    else:
        raise HTTPException(status_code=400, detail="Invalid keyword")

async def generate_draft(request: GenerateRequest):
    from llm_handler import LLMHandler
    from prompts import get_prompts

    llm_handler = LLMHandler(provider=request.provider)

    system_prompt, message_prompt = get_prompts(
        "generate_draft", request,
        company=request.company,
        date_gmt=request.date_gmt,
        details=request.details,
        recent_news=request.recent_news,
        financials=request.financials
    )

    response_text = llm_handler.call_llm(
        "generate_draft",
        request,
        model_name=request.model,
        company=request.company,
        date_gmt=request.date_gmt
    )
    return response_text

async def generate_topic_sentences(request: GenerateRequest):
    from llm_handler import LLMHandler
    llm_handler = LLMHandler(provider=request.provider)
    from prompts import get_prompts

    system_prompt, message_prompt = get_prompts(
        "generate_topic_sentences", request,
        details=request.details,
        recent_news=request.recent_news,
        financials=request.financials,
        headline=request.headline,
        thesis=request.thesis,
        structure=request.structure
    )

    response_text = llm_handler.call_llm(
        "generate_topic_sentences",
        request,
        model_name=request.model
    )
    return response_text

async def generate_full_article(request: GenerateRequest):
    from llm_handler import LLMHandler
    llm_handler = LLMHandler(provider=request.provider)
    from prompts import get_prompts
    system_prompt, message_prompt = get_prompts(
        "generate_full_article", request,
        details=request.details,
        recent_news=request.recent_news,
        financials=request.financials,
        headline=request.headline,
        thesis=request.thesis,
        structure=request.structure,
        content_blocks=request.content_blocks  # Ensure content_blocks are used
    )

    response_text, token_count = llm_handler.call_llm(
        "generate_full_article",
        request,
        model_name=request.model
    )
    return {"full_article": response_text, "token_count": token_count}
