import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spendly – Free SaaS Subscription Tracker & Cost Calculator",
  description:
    "Track all your SaaS subscriptions in one place. See monthly & yearly spend, get renewal alerts, and stop wasting money on unused tools. Free and simple.",
  keywords: [
    "saas subscription tracker",
    "saas cost calculator",
    "subscription tracker",
    "saas spend management",
    "track saas subscriptions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}