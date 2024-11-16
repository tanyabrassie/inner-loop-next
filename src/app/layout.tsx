import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './components/registry';
import Header from './components/Header';
import { LoadScreen } from './components/LoadScreen';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'inner loop press',
  keywords: [
    'risograph',
    'riso printing',
    'Tanya Brassie',
    'inner loop press',
    'Risograph printing press philadelphia',
  ],
  description:
    'A small-batch Risograph printing press in Philadelphia. Operated by Tanya Brassie.',
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
    'A small-batch Risograph printing press in Philadelphia. Operated by Tanya Brassie.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* <LoadScreen /> */}
      <GoogleAnalytics gaId='G-QQLXP28JYB' />

      <body className={'appContainer'} id='screen'>
        <StyledComponentsRegistry>
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <div className='App'>
            <Header />
            {children}
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
