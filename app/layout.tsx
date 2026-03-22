import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Apex Properties Dubai | Luxury Real Estate Agency',
  description: 'Dubai\'s premier luxury real estate agency. Buy, sell, and invest in prime properties across Palm Jumeirah, Downtown Dubai, Dubai Marina, and Emirates Hills. Expert advisors, exclusive listings.',
  keywords: [
    'luxury real estate Dubai',
    'property for sale Dubai',
    'Dubai property agency',
    'Palm Jumeirah villas',
    'Downtown Dubai apartments',
    'Dubai Marina properties',
    'buy property Dubai',
    'Dubai real estate investment',
    'Emirates Hills villas',
    'off-plan properties Dubai',
    'luxury apartments Dubai',
    'real estate agent Dubai',
  ],
  metadataBase: new URL('https://apex-properties.vercel.app'),
  alternates: {
    canonical: 'https://apex-properties.vercel.app',
  },
  openGraph: {
    type: 'website',
    url: 'https://apex-properties.vercel.app',
    title: 'Apex Properties Dubai | Luxury Real Estate Agency',
    description: 'Dubai\'s premier luxury real estate agency. Exclusive listings on Palm Jumeirah, Downtown Dubai & Emirates Hills.',
    siteName: 'Apex Properties Dubai',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=630&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Apex Properties Dubai - Luxury Real Estate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Properties Dubai | Luxury Real Estate Agency',
    description: 'Dubai\'s premier luxury real estate agency. Exclusive listings, expert advisors.',
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=630&fit=crop&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());
          gtag('config','G-PLACEHOLDER');
        `}</Script>
      </body>
    </html>
  )
}
