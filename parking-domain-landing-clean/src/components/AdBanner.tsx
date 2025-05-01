'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the AdScript component with no SSR
const AdScript = dynamic(() => import('./AdScript'), { ssr: false });

interface AdBannerProps {
  size?: 'small' | 'medium' | 'large';
  position?: 'top' | 'sidebar' | 'content';
  title?: string;
  adClient?: string;
  adSlot?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ 
  size = 'medium', 
  position = 'content',
  title = 'Advertisement',
  adClient = 'ca-pub-xxxxxxxxxxxxxxxx',
  adSlot = '1234567890'
}) => {
  // Define height based on size
  const height = {
    small: '100px',
    medium: '250px',
    large: '300px',
  }[size];

  // Define ad format based on position
  const adFormat = {
    top: 'horizontal',
    sidebar: 'vertical',
    content: 'rectangle',
  }[position] as 'auto' | 'rectangle' | 'horizontal' | 'vertical';

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
      <div className="text-xs text-gray-500 mb-2">{title}</div>
      <AdScript 
        adClient={adClient}
        adSlot={adSlot}
        adFormat={adFormat}
        style={{ display: 'block', width: '100%', height }}
      />
    </div>
  );
};

export default AdBanner;