'use client';

import React, { useEffect, useRef } from 'react';

interface AdScriptProps {
  adClient?: string;
  adSlot?: string;
  adFormat?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  style?: React.CSSProperties;
}

const AdScript: React.FC<AdScriptProps> = ({
  adClient = 'ca-pub-xxxxxxxxxxxxxxxx',
  adSlot = '1234567890',
  adFormat = 'auto',
  style = { display: 'block', width: '100%', height: '250px' }
}) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is where you would normally load the ad script
    // For example, Google AdSense script
    const loadAdScript = () => {
      try {
        // In a real implementation, you would load the ad script here
        // For now, we'll just simulate an ad with a placeholder
        if (adRef.current) {
          adRef.current.innerHTML = `
            <div style="background-color: #f0f0f0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; border: 1px dashed #ccc;">
              <div style="text-align: center;">
                <div style="font-weight: bold; margin-bottom: 5px;">Advertisement</div>
                <div style="font-size: 12px; color: #666;">
                  Ad Client: ${adClient}<br>
                  Ad Slot: ${adSlot}<br>
                  Format: ${adFormat}
                </div>
              </div>
            </div>
          `;
        }
      } catch (error) {
        console.error('Error loading ad:', error);
      }
    };

    loadAdScript();

    // Cleanup function
    return () => {
      const currentRef = adRef.current;
      if (currentRef) {
        currentRef.innerHTML = '';
      }
    };
  }, [adClient, adSlot, adFormat]);

  return <div ref={adRef} style={style} className="ad-container" />;
};

export default AdScript;