import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Trial Reminder — Never Pay for a Forgotten Trial | Spendly",
  description:
    "Set a free trial reminder so you never get charged for a trial you forgot to cancel. 3 free methods, a pre-trial checklist, and a free tracker — no signup.",
  keywords: [
    "free trial reminder",
    "free trial tracker",
    "cancel free trial reminder",
    "free trial reminder app",
  ],
  openGraph: {
    title: "Free Trial Reminder — Never Pay for a Forgotten Trial | Spendly",
    description:
      "3 free ways to get reminded before any free trial ends — plus a checklist and a free tracker. No signup.",
    url: "https://spendly-beryl-three.vercel.app/free-trial-reminder",
    siteName: "Spendly",
    type: "website",
  },
  alternates: {
    canonical: "https://spendly-beryl-three.vercel.app/free-trial-reminder",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I remind myself to cancel a free trial before it charges me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Note the exact trial end date when you sign up and set a calendar reminder 2 days before it. An even simpler method: cancel the trial right after signing up — most services let you keep access until the trial ends, so there is nothing left to forget.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free way to track free trial end dates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Spendly is free with no signup — add each trial with its end date and the dashboard shows what is expiring soon, so no trial converts silently.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I cancel a free trial early?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On most services cancelling early just stops the auto-charge — you keep full access until the trial period ends. Always check the trial terms, but early cancellation is the safest reminder of all.",
      },
    },
  ],
};

export default function FreeTrialReminderPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-14">
        <p className="text-sm font-medium text-blue-600">Free Guide</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Free Trial Reminder: Never Pay for a Trial You Forgot to Cancel
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Free trials are designed to convert — your card is already on file, the
          end date is buried in an email, and most services never remind you.
          This guide gives you three free ways to make sure no trial charges you
          by surprise.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Why trials catch you off guard</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
            <li>Your card is required up front — the charge is automatic, not a decision.</li>
            <li>Trial lengths vary (7, 14, 30 days) and the end date is easy to misremember.</li>
            <li>Most vendors send no reminder — or one that arrives hours before the charge.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">3 free ways to never miss a trial end date</h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">1. Cancel right after signing up</h3>
              <p className="mt-1 text-gray-700">
                The simplest reminder is no reminder at all: cancel the trial
                immediately after starting it. Most services keep your access until
                the trial ends — and if you love it, you can always resubscribe.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">2. Calendar reminder 2 days before</h3>
              <p className="mt-1 text-gray-700">
                When a trial starts, create a calendar event 2 days before it ends
                titled "Decide: keep or cancel [Tool]". Two days gives you time to
                actually use the trial before judging it.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">3. Track every trial in one dashboard</h3>
              <p className="mt-1 text-gray-700">
                Add each trial once with its end date and see everything expiring
                soon in one place.{" "}
                <Link href="/dashboard" className="font-medium underline">
                  Spendly's dashboard
                </Link>{" "}
                does this free, with no signup and your data staying in your browser.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Checklist before starting any free trial</h2>
          <ol className="mt-4 list-decimal pl-5 space-y-2 text-gray-700">
            <li>Read the trial terms: how long is it, and what plan (and price) starts after?</li>
            <li>Write down the exact end date — don't trust your memory.</li>
            <li>Set your reminder (or cancel immediately, method 1 above).</li>
            <li>
              After the trial, check what it added to your spend with the{" "}
              <Link href="/subscription-cost-calculator" className="font-medium underline">
                Subscription Cost Calculator
              </Link>
              .
            </li>
            <li>
              If it becomes a paid plan, set up{" "}
              <Link href="/saas-renewal-reminder" className="font-medium underline">
                renewal reminders
              </Link>{" "}
              so it can't surprise you next year either.
            </li>
          </ol>
        </section>

        <section className="mt-10 rounded-2xl bg-gray-50 p-6">
          <h2 className="text-xl font-bold">Track every trial free with Spendly</h2>
          <p className="mt-2 text-gray-700">
            Add your trials once — the dashboard shows what's expiring soon,
            plus your monthly and yearly totals for everything you keep.
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
