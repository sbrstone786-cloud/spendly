import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SaaS Renewal Reminder Guide — Never Miss a Renewal | Spendly",
  description:
    "Learn how to set up SaaS renewal reminders so you never pay for a subscription you forgot to cancel. Free methods, tools, and a simple checklist.",
  keywords: [
    "saas renewal reminder",
    "subscription renewal reminder",
    "renewal reminder app",
    "track subscription renewals",
  ],
  openGraph: {
    title: "SaaS Renewal Reminder Guide — Never Miss a Renewal | Spendly",
    description:
      "Simple ways to get reminded before any SaaS subscription renews — free methods, tools, and a checklist.",
    url: "https://spendly-beryl-three.vercel.app/saas-renewal-reminder",
    siteName: "Spendly",
    type: "website",
  },
  alternates: {
    canonical: "https://spendly-beryl-three.vercel.app/saas-renewal-reminder",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I get reminded before a subscription renews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Set a calendar reminder 7 days before each renewal date, turn on the vendor's email notifications, or use a subscription tracker like Spendly that lists all upcoming renewals in one dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should a renewal reminder be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At least 7 days before the renewal date. That gives you time to decide whether to keep, downgrade, or cancel before you are charged.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free way to track subscription renewals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Spendly is free and needs no signup — add your subscriptions with their renewal dates and the dashboard shows everything renewing in the next 30 days.",
      },
    },
  ],
};

export default function SaasRenewalReminderPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-14">
        <p className="text-sm font-medium text-blue-600">Free Guide</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          SaaS Renewal Reminder: Never Pay for a Forgotten Subscription Again
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Every year, freelancers and teams lose hundreds of dollars to subscriptions
          they forgot to cancel. This guide shows you three free ways to get reminded
          before every renewal — so you only pay for tools you actually use.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Why renewals catch you off guard</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
            <li>Free trials convert to paid plans silently after 7–30 days.</li>
            <li>Yearly plans renew once a year — easy to forget for 11 months.</li>
            <li>Team seats get added by colleagues; nobody reviews the bill.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">3 free ways to set renewal reminders</h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">1. Calendar reminders (7 days before)</h3>
              <p className="mt-1 text-gray-700">
                For every subscription, create a calendar event 7 days before the
                renewal date titled "Decide: keep or cancel [Tool]". Simple and free,
                but you must remember to create each one.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">2. Vendor email notifications</h3>
              <p className="mt-1 text-gray-700">
                Most SaaS tools (Google Workspace, Notion, Adobe) send renewal emails.
                Turn them on in billing settings — but they often arrive only 1–3 days
                before charging, which is late to decide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">3. A subscription tracker dashboard</h3>
              <p className="mt-1 text-gray-700">
                Add each subscription once with its renewal date, and see everything
                renewing in the next 30 days in one place.{" "}
                <Link href="/dashboard" className="font-medium underline">
                  Spendly's dashboard
                </Link>{" "}
                does this free, with no signup and your data staying in your browser.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Quick checklist</h2>
          <ol className="mt-4 list-decimal pl-5 space-y-2 text-gray-700">
            <li>List every subscription and its renewal date.</li>
            <li>
              Check what they cost you per year with the{" "}
              <Link href="/subscription-cost-calculator" className="font-medium underline">
                Subscription Cost Calculator
              </Link>
              .
            </li>
            <li>Set a reminder at least 7 days before each renewal.</li>
            <li>Cancel or downgrade anything you barely use — before the charge.</li>
          </ol>
        </section>

        <section className="mt-10 rounded-2xl bg-gray-50 p-6">
          <h2 className="text-xl font-bold">Track renewals free with Spendly</h2>
          <p className="mt-2 text-gray-700">
            Add your subscriptions once — the dashboard shows upcoming renewals,
            monthly and yearly totals, and your most expensive tools.
          </p>
          <div className="mt-4 flex gap-3">
            <Link
              href="/dashboard"
              className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white"
            >
              Open Dashboard
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border px-4 py-2 text-sm font-medium"
            >
              See Pricing
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
