import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Am I Spending on Subscriptions? Find Out Free | Spendly",
  description:
    "Add up every subscription in 10 minutes and see your true monthly and yearly cost. Free calculator, checklist, and money-saving tips — no signup.",
  keywords: [
    "how much am i spending on subscriptions",
    "subscription spending calculator",
    "how much do i spend on subscriptions",
    "track subscription spending",
  ],
  openGraph: {
    title: "How Much Am I Spending on Subscriptions? Find Out Free | Spendly",
    description:
      "Do a 10-minute subscription audit and see your real monthly and yearly spend. Free calculator and checklist.",
    url: "https://spendly-beryl-three.vercel.app/how-much-am-i-spending-on-subscriptions",
    siteName: "Spendly",
    type: "website",
  },
  alternates: {
    canonical: "https://spendly-beryl-three.vercel.app/how-much-am-i-spending-on-subscriptions",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I figure out how much I spend on subscriptions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "List every subscription with its cost and billing cycle, convert yearly plans to monthly by dividing by 12, then add everything up. Spendly's free Subscription Cost Calculator does the math for you in seconds.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average person spending on subscriptions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It varies widely, but many people underestimate their spending by 2–3x because small monthly charges and yearly renewals are easy to forget. A full audit usually reveals at least one subscription worth cancelling.",
      },
    },
    {
      "@type": "Question",
      name: "How can I reduce my subscription spending?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cancel anything unused in the last 30 days, downgrade plans you don't fully use, switch yearly billing where you get a discount, and set renewal reminders so forgotten subscriptions can't surprise you.",
      },
    },
  ],
};

export default function SubscriptionSpendingPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-14">
        <p className="text-sm font-medium text-blue-600">Free Guide</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          How Much Am I Spending on Subscriptions?
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Most people guess their subscription spending — and guess far too low.
          Small monthly charges feel harmless until you add them up. Do this
          10-minute audit and see your real number.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">The 10-minute subscription audit</h2>
          <ol className="mt-4 list-decimal pl-5 space-y-3 text-gray-700">
            <li>
              <strong>List everything.</strong> Check your bank and card statements
              for the last 12 months — not just last month. Yearly plans hide there.
            </li>
            <li>
              <strong>Note the billing cycle.</strong> Write monthly or yearly next
              to each one. Convert yearly to monthly by dividing by 12.
            </li>
            <li>
              <strong>Add it up</strong> — or skip the math and use the{" "}
              <Link href="/subscription-cost-calculator" className="font-medium underline">
                free Subscription Cost Calculator
              </Link>
              : enter each subscription and it shows your monthly and yearly totals instantly.
            </li>
            <li>
              <strong>Mark each one:</strong> essential, nice-to-have, or forgotten.
              Be honest — "forgotten" is the most expensive category.
            </li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Where the hidden money goes</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong>Yearly plans</strong> — one $120/year charge feels smaller than
              $10/month, but it's the same money leaving once.
            </li>
            <li>
              <strong>Per-seat pricing</strong> — team tools charge per user; seats
              added months ago keep billing quietly.
            </li>
            <li>
              <strong>Forgotten free trials</strong> — the #1 surprise charge. Always
              set a{" "}
              <Link href="/saas-renewal-reminder" className="font-medium underline">
                renewal reminder
              </Link>{" "}
              before a trial ends.
            </li>
            <li>
              <strong>Duplicate tools</strong> — two apps doing the same job (looking
              at you, three note-taking apps).
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">What to do with your number</h2>
          <ol className="mt-4 list-decimal pl-5 space-y-2 text-gray-700">
            <li><Link href="/how-to-cancel-a-subscription" className="font-medium underline">Cancel</Link> anything you haven't used in 30 days — today, not "later".</li>
            <li>Downgrade plans where you use 20% of the features.</li>
            <li>Switch to <Link href="/annual-vs-monthly-subscription" className="font-medium underline">yearly billing</Link> only for tools you're sure to keep.</li>
            <li>
              Track everything going forward in the{" "}
              <Link href="/dashboard" className="font-medium underline">
                Spendly dashboard
              </Link>{" "}
              — free, no signup, data stays in your browser.
            </li>
          </ol>
          <p className="mt-4 text-gray-700">Want it as a tick-box list? Use the <Link href="/subscription-audit-checklist" className="font-medium underline">Subscription Audit Checklist</Link>.</p>
        </section>

        <section className="mt-10 rounded-2xl bg-gray-50 p-6">
          <h2 className="text-xl font-bold">Find your number in 60 seconds</h2>
          <p className="mt-2 text-gray-700">
            Enter your subscriptions once — see your true monthly and yearly cost,
            then decide what stays and what goes.
          </p>
          <div className="mt-4">
            <Link
              href="/subscription-cost-calculator"
              className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white"
            >
              Open the Free Calculator
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
