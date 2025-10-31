import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';

import { ThemeProvider } from '@/app/ThemeProvider';
import '@/app/globals.css';
import Navbar from '@/app/components/navbar';
import ConditionalSocialbar from '@/app/components/conditionalSocialbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Roman Maliska',
  description: 'Personal web page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} relative min-h-[100dvh] bg-slate-50 dark:bg-slate-900 transition-colors duration-300`}
      >
        {/* Subtle liquid blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/30 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl blob-animate"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/30 dark:bg-blue-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl blob-animate" style={{ animationDelay: '10s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl shimmer"></div>
        </div>

        <div className="relative grid min-h-[100dvh] grid-rows-[auto_1fr_auto] max-w-6xl mx-auto">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextIntlClientProvider>
              <Navbar />
              <main className="p-6 sm:p-12 lg:p-24">{children}</main>
              <ConditionalSocialbar />
            </NextIntlClientProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
