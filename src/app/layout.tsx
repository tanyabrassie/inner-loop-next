import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './components/registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'inner loop press',
  keywords: [
    'risograph',
    'riso printing',
    'Tanya Brassie',
    'inner loop press',
    'risograph printing philadelphia',
  ],
  description:
    'A risograph printing press in Philadelphia. Operated by Tanya Brassie.',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

const jsonLd = {
  '@context': 'https://innerloop.press',
  '@type': 'Risograph Press',
  name: 'inner loop press',
  description:
    'A risograph printing press in Philadelphia. Operated by Tanya Brassie.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={'appContainer'}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
