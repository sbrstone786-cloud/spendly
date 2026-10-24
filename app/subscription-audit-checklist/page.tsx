import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subscription Audit Checklist: Find and Cancel Wasted Subscriptions | Spendly",
  description:
    "A step-by-step subscription audit checklist: find every recurring charge, spot duplicates and forgotten trials, and cut what you don't use. Free, no signup.",
  keywords: [
    "subscription audit checklist",
    "how to audit subscriptions",
    "find all my subscriptions",
    "subscription audit",
  ],
  openGraph: {
    title: "Subscription Audit Checklist: Find and Cancel Wasted Subscriptions | Spendly",
    description:
      "Find every recurring charge, spot duplicates and forgotten trials, and cut what you don't use. Free checklist.",
    url: "https://spendly-beryl-three.vercel.app/subscription-audit-checklist",
    siteName: "Spendly",
    type: "website",
  },
  alternates: {
    canonical: "https://spendly-beryl-three.vercel.app/subscription-audit-checklist",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I do a subscription audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go through the last 12 months of bank and card statements, list every recurring charge with its cost and billing cycle, convert yearly plans to a monthly figure, then mark each one as keep, downgrade, or cancel. A free tracker like Spendly does the adding-up for you.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I audit my subscriptions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every 3 to 6 months is enough for most people. Also run a quick audit after any free trial ends and whenever a service announces a price increase.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average savings from a subscription audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It varies, but most audits find at least one forgotten or duplicated subscription. Cancelling just two unused $10–$15 monthly plans saves $240–$360 a year.",
      },
    },
  ],
};

export default function SubscriptionAuditChecklistPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-14">
        <p className="text-sm font-medium text-blue-600">Free Guide</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Subscription Audit Checklist: Find Every Wasted Charge
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          You can't cut what you can't see. This checklist walks you through a
          complete subscription audit in about 15 minutes — every recurring
          charge found, judged, and dealt with.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">The audit checklist</h2>
          <ol className="mt-4 list-decimal pl-5 space-y-3 text-gray-700">
            <li>
              <strong>Pull 12 months of statements.</strong> Bank and card — a full
              year, so yearly renewals can't hide.
            </li>
            <li>
              <strong>List every recurring charge.</strong> Name, cost, and billing
              cycle for each one. Check app-store subscriptions too (Apple/Google
              hide them in a separate list).
            </li>
            <li>
              <strong>Add it all up.</strong> Convert yearly plans to monthly
              (divide by 12), then get one honest total with the{" "}
              <Link href="/subscription-cost-calculator" className="font-medium underline">
                Subscription Cost Calculator
              </Link>
              .
            </li>
            <li>
              <strong>Spot the duplicates.</strong> Two tools doing the same job?
              Keep the one you actually open.
            </li>
            <li>
              <strong>Spot the forgotten ones.</strong> Anything you haven't used in
              30 days goes on the cancel list — no debate.
            </li>
            <li>
              <strong>Check per-seat and family plans.</strong> Old seats, ex-team
              members, and upgraded tiers you never needed are silent money leaks.
            </li>
            <li>
              <strong>Judge each one: keep, downgrade, or cancel.</strong> Be strict:
              "might use it someday" means cancel.
            </li>
            <li>
              <strong>Cancel in one sitting.</strong> Work the cancel list now, not
              later — our{" "}
              <Link href="/how-to-cancel-a-subscription" className="font-medium underline">
                cancel guide
              </Link>{" "}
              shows the exact steps when the button is hidden.
            </li>
            <li>
              <strong>Track what's left.</strong> Put every survivor in the{" "}
              <Link href="/dashboard" className="font-medium underline">
                Spendly dashboard
              </Link>{" "}
              with its renewal date, so the next audit takes 2 minutes.
            </li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">What a good audit usually finds</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
            <li>At least one subscription you forgot existed.</li>
            <li>One duplicate — two apps paid to do the same job.</li>
            <li>A yearly plan for something you stopped using months ago.</li>
            <li>A free trial that quietly converted to paid.</li>
          </ul>
        </section>

        <section className="mt-10 rounded-2xl bg-gray-50 p-6">
          <h2 className="text-xl font-bold">Run your audit with Spendly</h2>
          <p className="mt-2 text-gray-700">
            Add every subscription once — see your true monthly and yearly totals,
            upcoming renewals, and what cancelling would save. Free, no signup.
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
