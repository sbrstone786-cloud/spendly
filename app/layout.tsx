import type { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("https://spendly-beryl-three.vercel.app"),
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
  openGraph: {
    title: "Spendly – Free SaaS Subscription Tracker & Cost Calculator",
    description:
      "Track all your SaaS subscriptions in one place. See monthly & yearly spend, get renewal alerts, and stop wasting money on unused tools.",
    url: "https://spendly-beryl-three.vercel.app",
    siteName: "Spendly",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spendly – Free SaaS Subscription Tracker & Cost Calculator",
    description:
      "Track all your SaaS subscriptions in one place. See monthly & yearly spend, get renewal alerts, and stop wasting money.",
  },
  alternates: {
    canonical: "https://spendly-beryl-three.vercel.app",
  },
};
