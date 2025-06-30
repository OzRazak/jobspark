import React from 'react';
import Script from 'next/script';

interface JsonLdProps {
  type: 'home' | 'organization' | 'article' | 'faq';
  data?: Record<string, any>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  const getJsonLdScript = () => {
    if (data) {
      return JSON.stringify(data);
    }
    
    // Fallback to pre-defined JSON-LD files
    return `fetch('/jsonld/${type}.json')
      .then(response => response.json())
      .then(data => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      })
      .catch(error => console.error('Error loading JSON-LD data:', error));`;
  };

  return (
    <Script
      id={`jsonld-${type}`}
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: data 
          ? `
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = ${JSON.stringify(JSON.stringify(data))};
            document.head.appendChild(script);
          `
          : getJsonLdScript()
      }}
    />
  );
}; 