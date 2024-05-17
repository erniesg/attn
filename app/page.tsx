'use client';

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import GeneratedNews from '@/components/GeneratedNews';
import AIChat from '@/components/AIChat';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';
import { Input, Button } from '@/components/ui';

const HomePage = () => {
  const [input, setInput] = useState('');
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setArticles([]);

    try {
      const userProfile = {
        preferred_name: 'John Doe',
        country_of_residence: 'SF',
        age: 40,
        job_title: 'Senior Data Scientist',
        job_function: 'Data Analysis',
        interests: ['llm', 'AI'],
        goals: 'lead innovative projects',
      };

      const queryPayload = {
        query: input,
        user_profile: userProfile,
      };

      console.log('Query Payload:', queryPayload);

      const queryResponse = await fetch(
        `https://erniesg--query-svc-query.modal.run`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(queryPayload),
        }
      );

      const contentType = queryResponse.headers.get('Content-Type');
      let queryData;

      if (contentType && contentType.includes('application/json')) {
        queryData = await queryResponse.json();
      } else {
        const queryText = await queryResponse.text();
        console.log('Query Response Text:', queryText);
        queryData = {
          urls: queryText.split('\n').filter((url) => url.startsWith('http')),
        };
      }

      console.log('Query Response Data:', queryData);

      if (!Array.isArray(queryData.urls)) {
        throw new Error("Invalid response format: 'urls' is not an array");
      }

      for (const url of queryData.urls) {
        console.log('Reading URL:', url);

        const readResponse = await fetch(
          `https://erniesg--read-svc-read.modal.run`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ urls: [url] }),
          }
        );

        const readText = await readResponse.text();
        console.log('Read Response Text:', readText);

        if (!readResponse.ok) {
          throw new Error(
            `Error reading URL: ${readResponse.status} ${readResponse.statusText}`
          );
        }

        const readData = JSON.parse(readText);
        console.log('Read Response JSON:', readData);

        const extractResponse = await fetch(
          `https://erniesg--extract-svc-extract.modal.run`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(readData),
          }
        );

        const extractText = await extractResponse.text();
        console.log('Extract Response Text:', extractText);

        if (!extractResponse.ok) {
          throw new Error(
            `Error extracting data: ${extractResponse.status} ${extractResponse.statusText}`
          );
        }

        const extractData = JSON.parse(extractText);
        console.log('Extract Response JSON:', extractData);

        const detailedUrls = extractData.article_urls;
        for (const detailedUrl of detailedUrls) {
          console.log('Reading Detailed URL:', detailedUrl);

          const detailedReadResponse = await fetch(
            `https://erniesg--read-svc-read.modal.run`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ urls: [detailedUrl] }),
            }
          );

          const detailedReadText = await detailedReadResponse.text();
          console.log('Detailed Read Response Text:', detailedReadText);

          if (!detailedReadResponse.ok) {
            throw new Error(
              `Error reading detailed URL: ${detailedReadResponse.status} ${detailedReadResponse.statusText}`
            );
          }

          const detailedReadData = JSON.parse(detailedReadText);
          console.log('Detailed Read Response JSON:', detailedReadData);

          const structureResponse = await fetch(
            `https://erniesg--extract-svc-extract.modal.run`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(detailedReadData),
            }
          );

          const structureText = await structureResponse.text();
          console.log('Structure Response Text:', structureText);

          if (!structureResponse.ok) {
            throw new Error(
              `Error extracting structure: ${structureResponse.status} ${structureResponse.statusText}`
            );
          }

          const structureData = JSON.parse(structureText);
          console.log('Structure Response JSON:', structureData);

          const scoreResponse = await fetch(
            `https://erniesg--score-svc-score.modal.run`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                content: detailedReadData,
                structure: structureData,
              }),
            }
          );

          const scoreText = await scoreResponse.text();
          console.log('Score Response Text:', scoreText);

          if (!scoreResponse.ok) {
            throw new Error(
              `Error scoring article: ${scoreResponse.status} ${scoreResponse.statusText}`
            );
          }

          const scoredArticle = JSON.parse(scoreText);
          console.log('Scored Article JSON:', scoredArticle);

          setArticles((prev) => [...prev, scoredArticle as any]); // Use type assertion
        }
      }
    } catch (err) {
      console.error('Error generating articles:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-[100dvh] bg-gray-950 px-4 py-12 md:px-6 lg:py-24">
      <div className="container max-w-4xl space-y-8">
        <Hero />
        <div className="flex items-center justify-center space-x-4">
          <Input
            className="flex-1 max-w-md bg-gray-800 border-gray-700 text-gray-400 placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600 font-[Cabin]"
            placeholder="Enter your desired topics"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            onClick={handleGenerate}
            className="bg-gradient-to-br from-[#E00101] to-[#00BFFF] text-gray-950 font-medium hover:from-[#00BFFF] hover:to-[#E00101]"
          >
            Generate
          </Button>
        </div>
        {loading && <p>Loading...</p>}
        <NewsSection articles={articles} loading={loading} />
        <AIChat />
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;
