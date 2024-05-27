# This module manages different types of prompts.
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
prompts = {
    "generate_urls": {
        "system_prompt": "Always respond with a structured, valid JSON, adhering strictly to the provided example format. Do not include any other text or explanations outside of the JSON structure.",
        "message_prompt": """
        Please provide a response in the following structured JSON format:

        {{
        "urls": [
            {{
            "url": "https://masterdomain.com"
            }},
            ...
        ]
        }}

        The "urls" array should contain objects with a single "url" property, representing the master domain URL only. Do not include any other properties like title or source.

        Return a list of {num_urls} news and publications URLs relevant to the query '{query}' for a user with the following profile:
        - Preferred Name: {preferred_name}
        - Country of Residence: {country_of_residence}
        - Age: {age}
        - Job Title: {job_title}
        - Job Function: {job_function}
        - Interests: {interests}
        - Goals: {goals}

        The URLs should be relevant for a personalized news digest based on the user's profile and query.

        """
    },
    "extract_article_urls": {
        "system_prompt": "Always respond with a structured, valid JSON, adhering strictly to the provided example format. Do not include any other text or explanations outside of the JSON structure.",
        "message_prompt": """
        Analyze the following article metadata and content to extract relevant article URLs:

        URL: {url}
        Title: {title}
        Keywords: {keywords}
        Description: {description}
        Content: {content}

        Return a list of {num_urls} article URLs from the content that is relevant to the topics '{query}' for a user with the following profile:
        - Preferred Name: {preferred_name}
        - Country of Residence: {country_of_residence}
        - Age: {age}
        - Job Title: {job_title}
        - Job Function: {job_function}
        - Interests: {interests}
        - Goals: {goals}

        Please provide a response in the following structured JSON format:

        {{
          "parent_url": {url},
          "article_urls": [
            {{
              "url": "https://masterdomain.com/section/article1link"
            }},
            ...
          ]
        }}

        The URLs should be relevant for a personalized news digest based on the user's profile and the topics of interest.
        """
    },
    "extract_structure": {
        "system_prompt": "Always respond with a structured, valid JSON, adhering strictly to the provided example format. Do not include any other text or explanations outside of the JSON structure.",
        "message_prompt": """
        Extract the following structured information from the article content:

        URL: {url}
        Title: {title}
        Keywords: {keywords}
        Description: {description}
        Content: {content}

        Use the `extract_structure` tool to extract the following information:
        - Author: Extract the author of the article.
        - Published Date: Extract the published date of the article.
        - Entities: Extract entities mentioned in the article, categorized by type and value.
        - Location: Extract locations mentioned in the article using ISO3 codes.
        - Main Idea: Extract the main idea of the article.
        - Assertions: Extract assertions made in the article, categorized by type and value.
        - Summary: Provide a brief summary of the article.

        Provide the response in the following structured JSON format:

        {{
          "author": "",
          "published_date": "",
          "entities": [
            {{
              "type": "",
              "value": ""
            }},
            ...
          ],
          "location": "",
          "main_idea": "",
          "assertions": [
            {{
              "type": "",
              "value": ""
            }},
            ...
          ],
          "summary": ""
        }}
        """
    },
    "score_article": {
        "system_prompt": "Always respond with a structured, valid JSON, adhering strictly to the provided example format. Do not include any other text or explanations outside of the JSON structure.",
        "message_prompt": """
        Use the `score_article` tool to score the following article content based on the provided topics on a scale of 0-1:

        URL: {url}
        Title: {title}
        Keywords: {keywords}
        Description: {description}
        Content: {content}

        Topics to score:
        {topics}

        Provide the response in the following structured JSON format:

        {{
        "url": "{url}",
        "scores": {{
        }}
        }}
        """
    },
    "generate_draft": {
        "system_prompt": "You are a Tech Journalist for Tech in Asia.",
        "message_prompt": """
        Task: Given the following data about {company}, generate attention-grabbing headlines, a thesis, and an overall structure for a financial performance summary of the company to be published on {date_gmt}.

        Context:
        - Details: {details}
        - Recent News: {recent_news}
        - Financials: {financials}

        1. Generate three potential headlines for the article.
        2. For each headline, provide a corresponding thesis and overarching structure.

        Content Block Suggestions:
        - **Introduction:**
          - Hook: Capture reader's attention.
          - Context: Provide background information.
          - Thesis: State the main point or argument of the article.
        - **Overview of Recent Performance:**
          - Summary of Key Metrics: Present recent financial performance.
          - Visual Aid Placeholder (e.g., charts, graphs): Indicate where visuals should be included.
        - **Detailed Analysis:**
          - Primary Achievement or Setback: Highlight main financial outcomes.
          - Supporting Data: Provide detailed financial figures.
          - Visual Aid Placeholder (e.g., diagrams, charts): Indicate where visuals should be included.
        - **Strategic Initiatives and Market Position:**
          - Company Strategy: Discuss strategic moves.
          - Market Position: Evaluate the company's market position.
          - Competitor Comparison: Compare with key competitors.
        - **Expert Opinions and Future Outlook:**
          - Analyst Quotes: Include insights from industry experts.
          - Predictions and Future Plans: Discuss future strategies.
        - **Conclusion:**
          - Recap of Key Points: Summarize the main points.
          - Final Thoughts: Provide a closing thought or call to action.
        - **Additional Content Blocks (Optional):**
          - Macro Factors / Economic Environment
          - Technology and Innovation
          - Customer and Market Insights
          - Operational Efficiency

        Example Structures:
        - **Structure A: Standard Performance Summary**
          1. Introduction
          2. Overview of Recent Performance
          3. Detailed Analysis
          4. Strategic Initiatives and Market Position
          5. Conclusion
        - **Structure B: Performance with Market Insights**
          1. Introduction
          2. Overview of Recent Performance
          3. Detailed Analysis
          4. Macro Factors / Economic Environment
          5. Strategic Initiatives and Market Position
          6. Expert Opinions and Future Outlook
          7. Conclusion
        - **Structure C: Strategic and Operational Focus**
          1. Introduction
          2. Overview of Recent Performance
          3. Strategic Initiatives and Market Position
          4. Detailed Analysis
          5. Operational Efficiency
          6. Conclusion
        - **Structure D: Performance with Technological Focus**
          1. Introduction
          2. Overview of Recent Performance
          3. Technology and Innovation
          4. Detailed Analysis
          5. Strategic Initiatives and Market Position
          6. Expert Opinions and Future Outlook
          7. Conclusion

        Please provide the response in the following structured JSON format:

        {{
          "headlines": [
            {{
              "headline": "[Generated Headline]",
              "thesis": "[Generated Thesis]",
              "structure": [
                {{
                  "content_block": "Introduction",
                  "details": "[Content Block Details]"
                }},
                {{
                  "content_block": "Overview of Recent Performance",
                  "details": "[Content Block Details]"
                }},
                {{
                  "content_block": "Detailed Analysis",
                  "details": "[Content Block Details]"
                }},
                {{
                  "content_block": "Strategic Initiatives and Market Position",
                  "details": "[Content Block Details]"
                }},
                {{
                  "content_block": "Expert Opinions and Future Outlook",
                  "details": "[Content Block Details]"
                }},
                {{
                  "content_block": "Conclusion",
                  "details": "[Content Block Details]"
                }}
              ]
            }},
            ...
          ]
        }}
        """
    },
    "generate_topic_sentences": {
        "system_prompt": "You are a Tech Journalist for Tech in Asia. Always respond with a structured, valid JSON, adhering strictly to the provided example format. Do not include any other text or explanations outside of the JSON structure. Ensure the topic sentences are based on known facts and align with the overall thesis.",
        "message_prompt": """
        Task: Based on the selected headline and thesis, generate topic sentences for each content block in the article structure.

        Context:
        - Details: {details}
        - Recent News: {recent_news}
        - Financials: {financials}

        Headline: {headline}
        Thesis: {thesis}
        Structure:
        {structure}

        Please provide the response in the following structured JSON format:

        {{
        "headline": "{headline}",
        "thesis": "{thesis}",
        "content_blocks": [
            {{
            "order": 1,
            "content_block": "Introduction",
            "details": "[Content Block Details]",
            "topic_sentence": "[Generated Topic Sentence for Introduction]"
            }},
            ...
        ]
        }}
        """
    },
     "generate_full_article": {
         "system_prompt": "You are a Tech Journalist for Tech in Asia. Ensure all content is factual and logically structured.",
         "message_prompt": """
         Generate a complete article based on the provided headline, thesis, structure, and content blocks. Include relevant facts, quotes, and sources where applicable.

         Headline: {headline}
         Thesis: {thesis}
         Structure: {structure}
         Details: {details}
         Recent News: {recent_news}
         Financials: {financials}
         Content Blocks: {content_blocks}

         Ensure the article adheres to the thesis and flows logically from one section to the next. The article should be written in a clear, concise, and engaging style, suitable for a well-informed but varied audience. Aim for a length of approximately 1000-1500 words.

         Focus on maintaining journalistic integrity by verifying all facts and presenting information in an unbiased manner. The tone should be informative yet accessible, reflecting the seriousness or light-heartedness of the topic as appropriate.

         Please provide the response in the following structured JSON format:

         {{
             "headline": "{headline}",
             "thesis": "{thesis}",
             "content_blocks": [
                 {{
                     "order": block['order'],
                     "content_block": block['content_block'],
                     "details": block['details'],
                     "topic_sentence": block['topic_sentence'],
                     "paragraphs": [
                         "[Generated Paragraph 1]",
                         "[Generated Paragraph 2]",
                         ...
                     ]
                 }} for block in content_blocks
             ]
         }}
         """
     }
}

def get_prompts(function_name, request, **kwargs):
    logger.info(f"Get Prompts - Received request {request} with kwargs: {kwargs}")  # Log the contents of kwargs

    system_prompt = prompts[function_name].get("system_prompt", "")

    # List of possible attributes to check
    possible_attributes = [
        "num_urls", "query", "preferred_name", "country_of_residence", "age",
        "job_title", "job_function", "interests", "goals", "topics", "details",
        "recent_news", "financials", "headline", "thesis", "structure", "content_blocks"
    ]

    # Prepare a dictionary with all possible parameters
    params = {}
    for attr in possible_attributes:
        if hasattr(request, attr):
            params[attr] = getattr(request, attr)
        elif hasattr(request, "user_profile") and hasattr(request.user_profile, attr):
            params[attr] = getattr(request.user_profile, attr)

    # Include additional keyword arguments
    params.update(kwargs)

    # Include content_blocks in the formatted message
    if 'content_blocks' in kwargs:
        formatted_blocks = format_content_blocks(kwargs['content_blocks'])
        params['formatted_blocks'] = formatted_blocks

    try:
        message_prompt = prompts[function_name]["message_prompt"].format(**params)
    except KeyError as e:
        logger.error(f"Missing key in parameters for formatting: {e}")
        raise
    except Exception as e:
        logger.error(f"Error formatting message prompt: {e}")
        raise

    # Filter out None values
    params = {k: v for k, v in params.items() if v is not None}

    logger.debug(f"Formatted parameters for prompt: {params}")

    try:
        message_prompt = prompts[function_name]["message_prompt"].format(**params)
    except KeyError as e:
        logger.error(f"Missing key in parameters for formatting: {e}")
        raise
    except Exception as e:
        logger.error(f"Error formatting message prompt: {e}")
        raise

    return system_prompt, message_prompt

def format_content_blocks(content_blocks):
    # Format each content block with its details and topic sentence
    return [
        {
            "order": block['order'],
            "content_block": block['content_block'],
            "details": block['details'],
            "topic_sentence": block['topic_sentence']
        }
        for block in content_blocks
    ]
