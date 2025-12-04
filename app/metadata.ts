import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Optical Service',
  description: 'Bienvenido a Optical Service, disfruta de nuestros Servicios.',
  generator: 'Next.js',
  verification: {
    google: 'googlecc37cdbf30c6dce0',
    other: {
      'google-site-verification': ['googlecc37cdbf30c6dce0']
    }
  },
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
