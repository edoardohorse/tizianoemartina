import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CookiesProvider } from 'next-client-cookies/server';

import "./globals.css";
import packageJson from "../../package.json"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiziano e Martina",
  description: "Visita il sito informazioni per il matrimonio di Tiziano e Martina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <CookiesProvider>
    <html lang="en">
   {/*   <head>
        <title>Tiziano e Martina</title>
      </head>*/}
      <body>
        {children}
        <footer>v{packageJson.version}</footer>
      </body>
    </html>
    </CookiesProvider>
  );
}
