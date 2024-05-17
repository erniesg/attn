import { useEffect } from 'react';

interface FlourishEmbedProps {
  src: string;
}

const FlourishEmbed: React.FC<FlourishEmbedProps> = ({ src }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://public.flourish.studio/resources/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div className="flourish-embed" data-src={src}></div>;
};

export default FlourishEmbed;
