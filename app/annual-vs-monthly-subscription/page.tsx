import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Annual vs Monthly Subscription: Which Is Cheaper? | Spendly",
  description:
    "Annual plans are usually 15–20% cheaper — but only if you use the service all year. Learn the breakeven math and when monthly actually wins.",
  keywords: [
    "annual vs monthly subscription",
    "annual vs monthly billing",
    "is annual billing cheaper",
    "monthly or yearly subscription",
  ],
  openGraph: {
    title: "Annual vs Monthly Subscription: Which Is Cheaper? | Spendly",
    description:
      "Annual plans look cheaper — but only if you stay all year. The breakeven math, and when monthly actually wins.",
    url: "https://spendly-beryl-three.vercel.app/annual-vs-monthly-subscription",
    siteName: "Spendly",
    type: "website",
  },
  alternates: {
    canonical: "https://spendly-beryl-three.vercel.app/annual-vs-monthly-subscription",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is annual billing cheaper than monthly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On price alone, yes — most services discount annual plans by about 15–20%, like paying for 10 months and getting 12. But it is only cheaper if you actually use the service for the whole year; cancelling or losing interest halfway makes monthly the cheaper option.",
      },
    },
    {
      "@type": "Question",
      name: "What is the breakeven point for annual vs monthly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide the annual price by the monthly price. If a tool costs $10/month or $100/year, the breakeven is 10 months: use it longer than 10 months and annual wins; quit before that and monthly was cheaper.",
      },
    },
    {
      "@type": "Question",
      name: "When is monthly billing the better choice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you are testing a tool, your income is irregular, the service is new or unstable, or you only need it for a season or a single project. Monthly costs a little more but keeps the exit free.",
      },
    },
  ],
};

export default function AnnualVsMonthlyPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-14">
        <p className="text-sm font-medium text-blue-600">Free Guide</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Annual vs Monthly Subscription: Which Is Actually Cheaper?
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Almost every service pushes the annual plan with a "save 20%" badge.
          Sometimes that's a real bargain. Sometimes it's a trap that locks you
          into a tool you'll abandon by spring. Here's the simple math that tells
          you which — before you pay.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">The breakeven rule</h2>
          <p className="mt-4 text-gray-700">
            Take the annual price and divide it by the monthly price. The result
            is your breakeven point in months:
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Example:</strong> $10/month or $100/year → $100 ÷ $10 = 10 months.</li>
            <li>Use it <strong>more than 10 months</strong> → annual is cheaper.</li>
            <li>Quit <strong>before 10 months</strong> → monthly was cheaper, and you kept the freedom to leave.</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Run the numbers for your whole stack with the{" "}
            <Link href="/subscription-cost-calculator" className="font-medium underline">
              Subscription Cost Calculator
            </Link>{" "}
            — enter each tool twice, once monthly and once yearly, and compare the
            yearly totals.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">When annual wins</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
            <li>You've already used the tool daily for 3+ months.</li>
            <li>It's core to your work — email, storage, your main design or dev tool.</li>
            <li>The discount is 20% or more and your usage is stable.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">When monthly wins</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
            <li>You're still testing, or your income changes month to month.</li>
            <li>The tool is for one project or one season.</li>
            <li>The company is new — an annual prepay is gone if they shut down.</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Whichever you choose, set a{" "}
            <Link href="/saas-renewal-reminder" className="font-medium underline">
              renewal reminder
            </Link>{" "}
            a week before the charge — annual plans are the easiest to forget
            because they only bill once a year.
          </p>
        </section>

        <section className="mt-10 rounded-2xl bg-gray-50 p-6">
          <h2 className="text-xl font-bold">Compare both in the dashboard</h2>
          <p className="mt-2 text-gray-700">
            Add your subscriptions to the{" "}
            <Link href="/dashboard" className="font-medium underline">
              Spendly dashboard
            </Link>{" "}
            and see your monthly and yearly totals side by side — free, no signup.
          </p>
          <div className="mt-4">
            <Link
              href="/dashboard"
              className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white"
            >
              Open Dashboard
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
