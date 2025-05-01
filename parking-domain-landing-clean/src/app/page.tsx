
import DomainInfo from '@/components/DomainInfo';
import AdBanner from '@/components/AdBanner';
import RelatedDomains from '@/components/RelatedDomains';

export default function Home() {
  // Use a default domain name
  const domainName = 'example.com';

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
            {domainName}
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Top Ad Banner */}
        <div className="mb-8">
          <AdBanner 
            size="large" 
            position="top" 
            title="Featured Sponsor" 
            adClient="ca-pub-1234567890" 
            adSlot="1111111111" 
          />
        </div>
        
        {/* Domain Information */}
        <DomainInfo domainName={domainName} />

        {/* Ad Sections */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <AdBanner 
            size="medium" 
            position="content" 
            adClient="ca-pub-1234567890" 
            adSlot="2222222222" 
          />
          <AdBanner 
            size="medium" 
            position="content" 
            adClient="ca-pub-1234567890" 
            adSlot="3333333333" 
          />
        </div>

        {/* Related Domains */}
        <RelatedDomains domains={[
          'example-domain.com', 
          'anotherdomain.net', 
          'bestdomain.org', 
          'premiumdomain.co', 
          'topdomain.io', 
          'amazingdomain.com'
        ]} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Domain Broker. All rights reserved.</p>
            <p className="mt-2 text-sm">
              <a href="#" className="hover:underline">Privacy Policy</a> | 
              <a href="#" className="hover:underline ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}