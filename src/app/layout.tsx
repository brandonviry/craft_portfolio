import type { Metadata } from 'next';
import { ReactNode } from "react";
import localFont from 'next/font/local';
import Script from 'next/script';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer/Footer';
import "./globals.css";

const neueMachina = localFont({
  src: [
    {
      path: '../fonts/NeueMachina-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/NeueMachina-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/NeueMachina-Ultrabold.woff2',
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--font-neue-machina',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://craft.viry-brandon.fr'),
  title: {
    default: 'Brandon VIRY | Full-Stack Product Maker',
    template: '%s | Brandon VIRY'
  },
  description: 'Full-Stack Product Maker créatif & passionné. Je transforme des idées en produits digitaux innovants, en alliant code et créativité.',
  keywords: ['Full-Stack', 'Product Maker', 'Développeur', 'React', 'Next.js', 'Webflow', 'UI/UX', 'Design', 'No-Code', 'Automatisation'],
  authors: [{ name: 'Brandon VIRY' }],
  creator: 'Brandon VIRY',
  publisher: 'Brandon VIRY',
  verification: {
    google: 'SLV2ObWWagL88vu2aiGtf7-Nf6vKQsT_UrQ2A160Q_E'
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://craft.viry-brandon.fr',
    title: 'Brandon VIRY | Full-Stack Product Maker',
    description: 'Full-Stack Product Maker créatif & passionné. Je transforme des idées en produits digitaux innovants, en alliant code et créativité.',
    siteName: 'Brandon VIRY Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Brandon VIRY - Full-Stack Product Maker'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brandon VIRY | Full-Stack Product Maker',
    description: 'Full-Stack Product Maker créatif & passionné. Je transforme des idées en produits digitaux innovants.',
    images: ['/og-image.png'],
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/android-chrome-512x512.png', color: '#00A8E8' }
    ]
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://craft.viry-brandon.fr'
  }
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={`${neueMachina.variable} font-sans`}>
      <head>
        <meta name="google-site-verification" content="SLV2ObWWagL88vu2aiGtf7-Nf6vKQsT_UrQ2A160Q_E" />
        <Script
          id="tally-js"
          src="https://tally.so/widgets/embed.js"
          strategy="lazyOnload"
        />
      </head>
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
