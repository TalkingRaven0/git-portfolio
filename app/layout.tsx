import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Den Salazar's Portfolio",
  description: "Who am I, What do I do, and What Can I do."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://den-salazar-portfolio.vercel.app/" />
          <meta property="og:title" content="Den Salazar's Portfolio" />
          <meta property="og:description" content="Who am I, What do I do, and What Can I do." />
          <meta property="og:image" content="/resources/thumbnail.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://den-salazar-portfolio.vercel.app/" />
          <meta property="twitter:title" content="Den Salazar's Portfolio" />
          <meta property="twitter:description" content="Who am I, What do I do, and What Can I do." />
          <meta property="twitter:image" content="/resources/thumbnail.png" />

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
