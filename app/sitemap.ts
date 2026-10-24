import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://spendly-beryl-three.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/dashboard`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/subscription-cost-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/saas-renewal-reminder`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/how-much-am-i-spending-on-subscriptions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/free-trial-reminder`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
