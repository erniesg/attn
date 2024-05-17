import React from 'react';
import Image from 'next/image';

const PlaceholderImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <Image
      {...props}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cline x1='12' y1='8' x2='12' y2='12'/%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'/%3E%3C/svg%3E"
      alt="Placeholder"
      className="rounded-full"
      width={48}
      height={48}
      style={{
        objectFit: 'cover',
      }}
    />
  );
};

export default PlaceholderImage;
