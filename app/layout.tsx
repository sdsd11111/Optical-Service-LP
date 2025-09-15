import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Optical Service',
  description: 'Bienvenido a Optical Service, disfruta de nuestros Servicios.',
  generator: 'Next.js',
  openGraph: {
    title: 'Optical Service',
    description: 'Bienvenido a Optical Service, disfruta de nuestros Servicios.',
    images: [
      {
        url: '/Imagen destacada.jpg',
        width: 1200,
        height: 630,
        alt: 'Optical Service',
      },
    ],
    url: 'https://optical-service-lp.vercel.app/',
    type: 'website',
    siteName: 'Optical Service',
  },
  metadataBase: new URL('https://optical-service-lp.vercel.app'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
