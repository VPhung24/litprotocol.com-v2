import '../styles/globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lit Protocol',
  description:
    'Lit is a distributed key management network for secure signing, encryption, and compute without centralized keyholders.',
  openGraph: {
    title: 'Lit Protocol',
    description:
      'Lit is a distributed key management network for secure signing, encryption, and compute without centralized keyholders.',
    url: 'https://litprotocol.com',
    siteName: 'Lit Protocol',
    images: {
      url: '/og-image.png',
      alt: 'Description of Lit Protocol over a blue and orange gradient background',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lit Protocol',
    description:
      'Lit is a distributed key management network for secure signing, encryption, and compute without centralized keyholders.',
    creator: '@LitProtocol',
    images: {
      url: '/twitter-image.png',
      alt: 'Description of Lit Protocol over a blue and orange gradient background',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
