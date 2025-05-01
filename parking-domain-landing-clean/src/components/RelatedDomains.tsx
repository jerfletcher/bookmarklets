'use client';

import React from 'react';

interface RelatedDomainsProps {
  domains?: string[];
}

const RelatedDomains: React.FC<RelatedDomainsProps> = ({ 
  domains = ['example-domain.com', 'anotherdomain.net', 'bestdomain.org', 'premiumdomain.co', 'topdomain.io', 'amazingdomain.com']
}) => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Similar Domains You Might Like</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {domains.map((domain, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <p className="font-medium text-blue-600 dark:text-blue-400">{domain}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Also available for purchase</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedDomains;