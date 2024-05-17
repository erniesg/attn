export const fetchData = async (url: string, options: RequestInit) => {
  console.log(`Fetching URL: ${url} with options:`, options);
  const response = await fetch(url, options);
  const text = await response.text();
  console.log(`Response from ${url}:`, text);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  try {
    return JSON.parse(text);
  } catch (error) {
    console.warn('Response is not JSON, handling as plain text.');
    return { urls: text.split('\n').filter((url) => url.startsWith('http')) };
  }
};
