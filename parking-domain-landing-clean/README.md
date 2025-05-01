# Domain Parking Landing Page

A modern, responsive landing page for parking domain names with advertisement spaces. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌐 Dynamic domain name detection
- 💰 Multiple ad placement options
- 📱 Fully responsive design with dark mode support
- 📝 Contact form for domain purchase inquiries
- 🔍 Related domains section
- 🚀 Fast loading and SEO-friendly

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/parking-domain-landing.git
   cd parking-domain-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

- **Domain Information**: Edit the `DomainInfo.tsx` component to customize domain details
- **Ad Spaces**: Modify the `AdBanner.tsx` and `AdScript.tsx` components to integrate with your ad provider
- **Related Domains**: Update the domains list in `page.tsx`
- **Contact Form**: Customize the form fields in `ContactForm.tsx`

## Deployment

The application is optimized for deployment on platforms like Vercel, Netlify, or any hosting service that supports Next.js applications.

```bash
npm run build
npm run start
```

## License

MIT