import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sell Your House Fast for Cash | CashHomeBuyers',
  description: 'We buy houses in any condition for cash. Get a fair offer in 24 hours and close in as little as 7 days. No repairs, no fees, no hassles. Nationwide service.',
  keywords: 'sell house fast, cash home buyers, we buy houses, sell house as is, quick home sale, cash offer',
  authors: [{ name: 'CashHomeBuyers' }],
  openGraph: {
    title: 'Sell Your House Fast for Cash | CashHomeBuyers',
    description: 'We buy houses in any condition for cash. Get a fair offer in 24 hours and close in as little as 7 days.',
    url: 'https://cashhomebuyers.com',
    siteName: 'CashHomeBuyers',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CashHomeBuyers - We Buy Houses Fast for Cash',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell Your House Fast for Cash | CashHomeBuyers',
    description: 'We buy houses in any condition for cash. Get a fair offer in 24 hours and close in as little as 7 days.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
