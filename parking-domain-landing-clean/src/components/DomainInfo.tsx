'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the ContactForm component with no SSR
const ContactForm = dynamic(() => import('./ContactForm'), { ssr: false });

interface DomainInfoProps {
  domainName: string;
}

const DomainInfo: React.FC<DomainInfoProps> = ({ domainName }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          This Domain Is For Sale
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Interested in purchasing <span className="font-semibold text-blue-600 dark:text-blue-400">{domainName}</span>?
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Why This Domain?</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Memorable and brandable name</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Perfect for your business or project</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Enhance your online presence</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Improve customer trust and credibility</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Contact Information</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Interested in this domain? Get in touch with us today to discuss pricing and transfer details.
          </p>
          <div className="space-y-3">
            <p className="flex items-center text-gray-700 dark:text-gray-300">
              <span className="mr-2">📧</span>
              <a href="mailto:info@domainbroker.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                info@domainbroker.com
              </a>
            </p>
            <p className="flex items-center text-gray-700 dark:text-gray-300">
              <span className="mr-2">📱</span>
              <a href="tel:+1234567890" className="text-blue-600 dark:text-blue-400 hover:underline">
                +1 (234) 567-890
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-8">
        <ContactForm domainName={domainName} />
      </div>
    </div>
  );
};

export default DomainInfo;