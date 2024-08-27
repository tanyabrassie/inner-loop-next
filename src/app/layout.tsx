import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './components/registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'inner loop press',
  description: 'risograph printing in Philadelphia, PA.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={'appContainer'}>
        {' '}
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
