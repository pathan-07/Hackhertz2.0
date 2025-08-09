import type { Metadata, Viewport } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { Orbitron, Source_Code_Pro, Rajdhani } from 'next/font/google';
import { cn } from '@/lib/utils';
import { DarkReaderHandler } from '@/components/dark-reader-handler';
import { DarkReaderHeadScript } from '@/components/dark-reader-head-script';
import { darkReaderMetadata, darkReaderViewport } from '@/lib/dark-reader-metadata';
import { ClientOnly } from '@/components/ui/client-only';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rajdhani',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'HackHertz',
  description: 'Join us for HackHertz - an innovative 2-day offline hackathon where creativity meets technology.',
  ...darkReaderMetadata,
};

export const viewport: Viewport = {
  ...darkReaderViewport,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceCodePro.variable} ${orbitron.variable} ${rajdhani.variable} dark`} suppressHydrationWarning>
      <head>
        <DarkReaderHeadScript />
      </head>
      <body className={cn('antialiased')}>
        <ClientOnly>
          <DarkReaderHandler />
        </ClientOnly>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
