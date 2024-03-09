import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/navbar";
import Socialbar from "./components/socialbar";
import Hero from "./ui/hero";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Personal web page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body
          className={`${inter.className} max-w-5xl mx-auto my-4 bg-light text-black  dark:bg-dark dark:text-white`}
        >
          <Navbar />
          {children}
          <Socialbar />
        </body>
      </Providers>
    </html>
  );
}
