import sys
import subprocess
sys.path.append('/Users/erniesg/code/erniesg/attn/api/')
from endpoints.prompts import get_prompts
import anthropic
import openai
import os
import logging
from tiktoken import get_encoding

enc = get_encoding('cl100k_base')

def count_tokens(text):
    return len(enc.encode(text))

logger = logging.getLogger(__name__)

class LLMHandler:
    def __init__(self, api_key=None, provider="openai"):
        self.provider = provider
        if provider == "anthropic":
            self.client = anthropic.Anthropic(api_key=api_key or os.getenv("ANTHROPIC_API_KEY"))
        elif provider == "openai":
            self.client = openai.OpenAI(api_key=api_key or os.getenv("OPENAI_API_KEY"))
        else:
            raise ValueError("Unsupported provider")

    def call_llm(self, function_name, request, model_name=None, **kwargs):
        logger.info(f"LLM Handler - Received kwargs in call_llm: {kwargs}")  # Log the contents of kwargs

        system_prompt, message_prompt = get_prompts(function_name, request, **kwargs)
        # Log the prompts being sent to the LLM
        logger.info(f"System Prompt: {system_prompt}")
        logger.info(f"Message Prompt: {message_prompt}")
        model_to_use = model_name if model_name else request.model

        try:
            if self.provider == "anthropic":
                # Always use the streaming API
                with self.client.messages.stream(
                    model=model_to_use,
                    max_tokens=1000,
                    messages=[{"role": "user", "content": message_prompt}],
                    system=system_prompt if system_prompt else None  # Pass system prompt if available
                ) as stream:
                    content = []
                    for text in stream.text_stream:
                        content.append(text)
                        logger.info(f"Streaming text: {text}")
                full_content = ''.join(content)
            elif self.provider == "openai":
                stream = self.client.chat.completions.create(
                    model=model_to_use,
                    messages=[
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": message_prompt}
                    ],
                    stream=True,
                    response_format={"type": "json_object"}  # Ensure the response is in JSON format
                )

                content = []
                for chunk in stream:
                    if chunk.choices[0].delta.content is not None:
                        chunk_message = chunk.choices[0].delta.content
                        content.append(chunk_message)
                        logger.info(f"Streaming text: {chunk_message}")
                full_content = ''.join(content)
            else:
                raise ValueError("Unsupported provider")

            token_count = count_tokens(full_content)
            logger.info(
                f"LLM API request completed with completed response: {full_content}"
                f"\nResponse type: {type(full_content)}"
                f"\nToken count: {token_count}"
            )
            return full_content, token_count
        except Exception as e:
            logger.error(f"LLM API call failed: {str(e)}")
            raise Exception(f"LLM API call failed: {str(e)}")
