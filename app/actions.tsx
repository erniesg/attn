'use server';

import { createStreamableUI } from 'ai/rsc';
import { fetchData } from '@/utils/apiHelpers';

export const generateArticles = async (queryPayload: any, stream: any) => {
  try {
    const queryData = await fetchData(
      'https://erniesg--query-svc-query.modal.run',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(queryPayload),
      }
    );

    const urls = queryData.urls;
    if (!Array.isArray(urls)) {
      throw new Error("Invalid response format: 'urls' is not an array");
    }

    const articles = [];

    for (const url of urls) {
      stream.append(`Reading URL: ${url}\n`);
      const readData = await fetchData(
        'https://erniesg--read-svc-read.modal.run',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ urls: [url] }),
        }
      );

      stream.append(`Extracting detailed URLs from: ${url}\n`);
      const extractData = await fetchData(
        'https://erniesg--extract-svc-extract.modal.run',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(readData),
        }
      );

      const detailedUrls = extractData.article_urls;
      for (const detailedUrl of detailedUrls) {
        stream.append(`Reading detailed URL: ${detailedUrl}\n`);
        const detailedReadData = await fetchData(
          'https://erniesg--read-svc-read.modal.run',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ urls: [detailedUrl] }),
          }
        );

        stream.append(
          `Extracting structure from detailed URL: ${detailedUrl}\n`
        );
        const structureData = await fetchData(
          'https://erniesg--extract-svc-extract.modal.run',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(detailedReadData),
          }
        );

        stream.append(`Scoring article from detailed URL: ${detailedUrl}\n`);
        const scoredArticle = await fetchData(
          'https://erniesg--score-svc-score.modal.run',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              content: detailedReadData,
              structure: structureData,
            }),
          }
        );

        stream.append(`Scored Article: ${JSON.stringify(scoredArticle)}\n`);
        articles.push(scoredArticle);
      }
    }

    stream.end();
    return { articles };
  } catch (error) {
    console.error('Error generating articles:', error);
    if (error instanceof Error) {
      stream.append(`Error: ${error.message}`);
    } else {
      stream.append('An unknown error occurred');
    }
    stream.end();
    throw error;
  }
};
