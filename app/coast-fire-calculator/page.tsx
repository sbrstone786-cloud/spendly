import type { Metadata } from "next";
import Link from "next/link";
import CoastCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Coast FIRE Calculator — Free | Spendly",
  description:
    "Find your Coast FIRE number — the amount that grows to your FIRE number by retirement with no more contributions. Free, no signup.",
  alternates: {
    canonical: "https://spendly-beryl-three.vercel.app/coast-fire-calculator",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Coast FIRE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coast FIRE is the point where you have saved enough that your investments will grow to your full FIRE number by retirement age — even if you never save another dollar. After Coast FIRE you only need to earn enough to cover your yearly spending.",
      },
    },
    {
      "@type": "Question",
      name: "How is my Coast FIRE number worked out?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First we work out your FIRE number: your yearly spending times 25. Then we discount it back over the years until your retirement age at your expected annual return. Spend $40,000 a year, retire at 60, and at age 30 with a 7% return your Coast FIRE number is about $131,367.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Coast FIRE calculator free? Is my data stored?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is completely free with no signup. Your numbers are calculated in your browser only — nothing you enter is stored on a server or shared with anyone.",
      },
    },
  ],
};

export default function CoastFireCalculatorPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Coast FIRE Calculator
      </h1>
      <p className="mt-3 text-gray-600">
        Find your Coast FIRE number — the amount that grows to your full FIRE
        number by retirement with no more contributions. Free, no signup,
        and everything is calculated privately in your browser.
      </p>

      <CoastCalculator />

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">How it works</h2>
        <p className="mt-3 text-gray-600">
          Your Coast FIRE number starts from your{" "}
          <Link
            href="/fire-calculator"
            className="font-medium text-blue-600 underline"
          >
            FIRE number
          </Link>{" "}
          (yearly spending × 25). Because money you invest today keeps
          growing, you do not need the full amount yet — you only need
          enough that growth carries it to the full number by your
          retirement age. At a 7% return, a 30-year-old who spends $40,000 a
          year needs about $131,367 today, not $1,000,000.
        </p>
        <p className="mt-3 text-gray-600">
          If your current savings are already at or above your Coast FIRE
          number, you are <strong>already Coast FI</strong>: you could stop
          contributing and still reach your FIRE number by retirement, as
          long as your spending stays covered. The years-to-Coast estimate
          holds today's Coast number fixed — in reality the required amount
          rises as retirement gets closer, so treat it as a guide, not a
          promise.
        </p>
        <p className="mt-3 text-gray-600">
          Your subscriptions are part of your yearly spending —{" "}
          <Link
            href="/subscription-cost-calculator"
            className="font-medium text-blue-600 underline"
          >
            check your real subscription total first
          </Link>
          . Every dollar of yearly spending you cut lowers your FIRE number
          by $25, and your Coast number falls with it.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Frequently asked questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="font-semibold text-gray-900">What is Coast FIRE?</h3>
            <p className="mt-1 text-gray-600">
              Coast FIRE is the point where you have saved enough that your
              investments will grow to your full FIRE number by retirement
              age — even if you never save another dollar. After Coast FIRE
              you only need to earn enough to cover your yearly spending.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              How is my Coast FIRE number worked out?
            </h3>
            <p className="mt-1 text-gray-600">
              First we work out your FIRE number: your yearly spending times
              25. Then we discount it back over the years until your
              retirement age at your expected annual return. Spend $40,000 a
              year, retire at 60, and at age 30 with a 7% return your Coast
              FIRE number is about $131,367.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              Is the Coast FIRE calculator free? Is my data stored?
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
          Lower your spending, lower your Coast number
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
        Assumes a steady 7% return (change it above) and no further
        contributions after you reach your Coast number. Estimates only —
        not financial advice.
      </p>
    </main>
  );
}
