import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Insight-Trades",
  description: "InsightTrades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} dark:bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
