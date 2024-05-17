import { useState, useEffect } from 'react';

export const useStreamableAPI = (url: string, options: RequestInit) => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(url, options);
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let done = false;

      if (reader) {
        while (!done) {
          const { value, done: doneReading } = await reader.read();
          done = doneReading;
          const chunk = decoder.decode(value, { stream: true });
          setData((prev) => [...prev, chunk]);
        }
      }

      setLoading(false);
    };

    fetchData();
  }, [url, options]);

  return { data, loading };
};
