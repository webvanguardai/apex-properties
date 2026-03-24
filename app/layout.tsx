import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Apex Properties Dubai | Luxury Real Estate — Buy, Sell & Invest',
  description: 'Find Dubai\'s most desirable properties. Apartments, villas and penthouses in Palm Jumeirah, DIFC, Downtown Dubai & Marina. Expert agents, instant viewings.',
  keywords: [
    'luxury real estate Dubai',
    'property for sale Dubai',
    'Dubai apartments',
    'Palm Jumeirah property',
    'DIFC apartments',
    'Downtown Dubai real estate',
    'Dubai Marina apartments',
    'buy property Dubai',
    'Dubai real estate agency',
    'off-plan properties Dubai',
  ],
  metadataBase: new URL('https://apex-properties.vercel.app'),
  alternates: {
    canonical: 'https://apex-properties.vercel.app',
  },
  openGraph: {
    type: 'website',
    url: 'https://apex-properties.vercel.app',
    title: 'Apex Properties Dubai | Luxury Real Estate',
    description: 'Dubai\'s most desirable properties. Instant viewings, expert agents.',
    siteName: 'Apex Properties Dubai',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'Apex Properties Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Properties Dubai | Luxury Real Estate',
    description: 'Dubai\'s most desirable properties. Find yours today.',
    images: ['https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=630&fit=crop&q=80'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0A0A0A] text-white antialiased">
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
