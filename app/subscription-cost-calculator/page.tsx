import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "./calculator";

export const metadata: Metadata = {
  title: "Subscription Cost Calculator — Free | Spendly",
  description:
    "Calculate your total monthly & yearly subscription cost in seconds. Add Netflix, Canva, ChatGPT & more, see your real SaaS spend. Free, no signup.",
  keywords: ["subscription cost calculator", "saas cost calculator", "how much am I spending on subscriptions", "subscription tracker"],
  openGraph: {
    title: "Subscription Cost Calculator — Free | Spendly",
    description: "Add your subscriptions and see your true monthly & yearly cost in seconds. Free, no signup.",
    url: "https://spendly-beryl-three.vercel.app/subscription-cost-calculator",
    siteName: "Spendly",
    type: "website",
  },
  alternates: {
    canonical: "https://spendly-beryl-three.vercel.app/subscription-cost-calculator",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I calculate my total subscription cost?", acceptedAnswer: { "@type": "Answer", text: "Add each subscription with its cost and billing cycle. Monthly total is monthly costs plus yearly costs divided by 12. Yearly total is monthly total times 12." } },
    { "@type": "Question", name: "Is the Subscription Cost Calculator free?", acceptedAnswer: { "@type": "Answer", text: "Yes. It is free and needs no signup. Your entries stay in your browser." } },
  ],
};

export default function SubscriptionCostCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-5xl mx-auto px-4 py-14">
        <p className="text-sm font-medium text-blue-600">Free Calculator</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Subscription Cost Calculator</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Apni saari subscriptions add karo aur dekho ke mahine aur saal me asal me kitna kharcha ho raha hai.
          Example prices neeche sirf samajhane ke liye hain, apni asal prices daal kar check karo.
        </p>
        <div className="mt-10">
          <Calculator />
        </div>
        <section className="mt-14">
          <h2 className="text-2xl font-bold">Kaise kaam karta hai?</h2>
          <ol className="mt-4 list-decimal pl-5 space-y-2 text-gray-700">
            <li>Har subscription ka naam, cost aur billing cycle daalo.</li>
            <li>Monthly total = monthly costs + (yearly costs ÷ 12).</li>
            <li>Yearly total = monthly total × 12.</li>
          </ol>
          <p className="mt-6">
            Agar tum in ko track karna chahte ho to{" "}
            <Link href="/dashboard" className="font-medium underline">Dashboard kholo</Link>
            {" "}aur{" "}
            <Link href="/pricing" className="font-medium underline">Pricing dekho</Link>.
          </p>
        </section>
      </div>
    </main>
  );
}
