import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
        className={`${inter.className} grid min-h-[100dvh] grid-rows-[auto_1fr_auto] max-w-5xl mx-auto bg-light text-black dark:bg-dark dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="p-12 lg:p-24">{children}</main>
          <ConditionalSocialbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
