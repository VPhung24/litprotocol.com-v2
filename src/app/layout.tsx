import '../styles/globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lit Protocol',
  description:
    'Lit is a distributed key network for secure signing, encryption, and compute without centralized keyholders.',
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
