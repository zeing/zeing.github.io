import type { Metadata, Viewport } from 'next'
import { Prompt } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'
import Analytics from './analytics'

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-prompt',
})

export const metadataBase = new URL('https://zeing.me')

export const metadata: Metadata = {
  title: {
    default: 'Zeing — Software Engineer',
    template: '%s · Zeing',
  },
  description: 'Witthawin Sirisiwaphak (Eing) — Software Engineer based in Thailand.',
  keywords: ['Zeing', 'Witthawin', 'Sirisiwaphak', 'Software Engineer', 'Thailand'],
  authors: [{ name: 'Witthawin Sirisiwaphak', url: 'https://zeing.me' }],
  creator: 'Witthawin Sirisiwaphak',
  metadataBase: new URL('https://zeing.me'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/images/icon.png',
    apple: '/poster.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zeing.me',
    siteName: 'Zeing',
    title: 'Zeing — Software Engineer',
    description: 'Witthawin Sirisiwaphak (Eing) — Software Engineer based in Thailand.',
    images: [{ url: '/images/thumbnail.png', width: 1200, height: 630, alt: 'Zeing' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@wwz',
    creator: '@wwz',
    title: 'Zeing — Software Engineer',
    description: 'Witthawin Sirisiwaphak (Eing) — Software Engineer based in Thailand.',
    images: ['/images/thumbnail.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#317EFB',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Witthawin Sirisiwaphak',
  alternateName: 'Zeing',
  url: 'https://zeing.me',
  image: 'https://zeing.me/images/profile.jpg',
  jobTitle: 'Software Engineer',
  sameAs: [
    'https://github.com/zeing',
    'https://www.linkedin.com/in/witthawin',
    'https://www.instagram.com/zeing',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={prompt.variable}>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SWWT8QB292"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SWWT8QB292', { page_path: window.location.pathname });
        `}</Script>
        <Script
          src="https://kit.fontawesome.com/6e37d3b44a.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
