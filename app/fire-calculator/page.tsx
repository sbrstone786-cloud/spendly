import type { Metadata } from "next";
import Link from "next/link";
import FireCalculator from "./calculator";

export const metadata: Metadata = {
  title: "FIRE Calculator — Free | Spendly",
  description:
    "How much do you need to retire early? Enter your yearly spending and savings to find your FIRE number and years to financial independence. Free, no signup.",
  alternates: {
    canonical: "https://spendly-beryl-three.vercel.app/fire-calculator",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a FIRE number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your FIRE number is the amount of invested savings you need to retire and live off your investments. The common rule is 25 times your yearly spending (the 4% rule). If you spend $40,000 a year, your FIRE number is $1,000,000.",
      },
    },
    {
      "@type": "Question",
      name: "How does this FIRE calculator work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter your yearly spending, current savings, monthly saving, your age, your target retirement age and an expected annual return (7% is the default). The calculator works out your FIRE number and estimates how many years it will take to reach it, using annual compounding.",
      },
    },
    {
      "@type": "Question",
      name: "Is the FIRE calculator free? Is my data stored?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is completely free with no signup. Your numbers are calculated in your browser only — nothing you enter is stored on a server or shared with anyone.",
      },
    },
  ],
};

export default function FireCalculatorPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        FIRE Calculator
      </h1>
      <p className="mt-3 text-gray-600">
        Find your FIRE number — how much you need invested to retire early —
        and how many years it will take you to get there. Free, no signup,
        and everything is calculated privately in your browser.
      </p>

      <FireCalculator />

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">How it works</h2>
        <p className="mt-3 text-gray-600">
          The FIRE number uses the 4% rule: take your yearly spending and
          multiply it by 25. Spend $40,000 a year and your number is
          $1,000,000 — at that point, withdrawing about 4% a year can cover
          your spending. The years estimate assumes your savings grow at the
          annual return you set (7% by default) with annual compounding.
        </p>
        <p className="mt-3 text-gray-600">
          Your subscriptions are part of your yearly spending —{" "}
          <Link
            href="/subscription-cost-calculator"
            className="font-medium text-blue-600 underline"
          >
            check your real subscription total first
          </Link>
          , then come back and use the true number. Every dollar you stop
          spending lowers your FIRE number by $25.
        </p>
        <p className="mt-3 text-gray-600">
          Already have solid savings? You may be closer than you think — see
          your{" "}
          <Link
            href="/coast-fire-calculator"
            className="font-medium text-blue-600 underline"
          >
            Coast FIRE number
          </Link>
          , the amount that grows to your full FIRE number by retirement
          with no more contributions.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Frequently asked questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="font-semibold text-gray-900">
              What is a FIRE number?
            </h3>
            <p className="mt-1 text-gray-600">
              Your FIRE number is the amount of invested savings you need to
              retire and live off your investments. The common rule is 25
              times your yearly spending (the 4% rule). If you spend $40,000
              a year, your FIRE number is $1,000,000.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              How does this FIRE calculator work?
            </h3>
            <p className="mt-1 text-gray-600">
              Enter your yearly spending, current savings, monthly saving,
              your age, your target retirement age and an expected annual
              return (7% is the default). The calculator works out your FIRE
              number and estimates how many years it will take to reach it,
              using annual compounding.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              Is the FIRE calculator free? Is my data stored?
            </h3>
            <p className="mt-1 text-gray-600">
              Yes, it is completely free with no signup. Your numbers are
              calculated in your browser only — nothing you enter is stored
              on a server or shared with anyone.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-xl bg-gray-50 p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900">
          Cut your spending, reach FIRE sooner
        </h2>
        <p className="mt-2 text-gray-600">
          Spendly tracks your subscriptions and renewals for free, so the
          spending in this calculator stays honest.
        </p>
        <Link
          href="/dashboard"
          className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white"
        >
          Open the free tracker
        </Link>
      </section>

      <p className="mt-8 text-sm text-gray-500">
        Estimates only — not financial advice. Results assume a steady
        return and regular monthly saving; real markets vary year to year.
      </p>
    </main>
  );
}
