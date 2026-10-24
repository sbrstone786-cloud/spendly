import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subscription Price Increase? What to Do When Prices Go Up | Spendly",
  description:
    "Your subscription got more expensive. Here's how to decide in 5 minutes: keep, downgrade, pause, or cancel — and how to never miss the next hike.",
  keywords: [
    "subscription price increase",
    "what to do when subscription price goes up",
    "streaming price increase",
    "cancel after price increase",
  ],
  openGraph: {
    title: "Subscription Price Increase? What to Do When Prices Go Up | Spendly",
    description:
      "A 5-minute decision framework for any price hike: keep, downgrade, pause, or cancel — plus how to never miss the next one.",
    url: "https://spendly-beryl-three.vercel.app/subscription-price-increase",
    siteName: "Spendly",
    type: "website",
  },
  alternates: {
    canonical: "https://spendly-beryl-three.vercel.app/subscription-price-increase",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do subscription prices keep increasing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Companies raise prices because content, licensing, and infrastructure cost more over time — and because loyal customers rarely cancel over a small hike. Most raises are $1–$3 at a time, which is exactly why they add up unnoticed.",
      },
    },
    {
      "@type": "Question",
      name: "Should I cancel when a subscription raises its price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not automatically. First check your actual usage: if you use it weekly and the new price is still fair for what you get, keep it. If you barely use it, the hike is your reminder to cancel. Also check for a cheaper tier, a student or family plan, or an annual discount before deciding.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get notified before a price increase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most services must email you before a hike takes effect — make sure those emails aren't landing in spam or promotions. Then track every subscription with its renewal date in a free tracker like Spendly, and re-run a quick subscription audit whenever a hike lands.",
      },
    },
  ],
};

export default function SubscriptionPriceIncreasePage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-14">
        <p className="text-sm font-medium text-blue-600">Free Guide</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Subscription Price Increase? Decide in 5 Minutes
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          The email arrives: "We're updating our pricing." It's only $2 more —
          but three hikes like that and your yearly spend has crept up by $70+
          without a single new feature you use. Here's how to judge every hike
          calmly instead of ignoring it.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">The 5-minute decision: keep, downgrade, pause, or cancel</h2>
          <ol className="mt-4 list-decimal pl-5 space-y-3 text-gray-700">
            <li>
              <strong>Check your real usage.</strong> Open the service and look at
              when you last actually used it. Daily or weekly use changes the math;
              "haven't opened it in a month" ends the debate.
            </li>
            <li>
              <strong>Do the yearly math.</strong> $2/month more is $24/year — add
              this hike to everything else you pay with the{" "}
              <Link href="/subscription-cost-calculator" className="font-medium underline">
                Subscription Cost Calculator
              </Link>{" "}
              and look at the new total honestly.
            </li>
            <li>
              <strong>Look one tier down.</strong> Most hikes push you toward plans
              with features you never touch. A lower tier, an ad-supported plan, or
              a family split often erases the increase entirely.
            </li>
            <li>
              <strong>Compare one alternative.</strong> You don't need a research
              project — one serious rival at the old price is enough leverage to
              make switching (or staying) a clear choice.
            </li>
            <li>
              <strong>Decide before the new price starts.</strong> The hike applies
              from your next renewal. Decide now, while the email is open — not
              after the first higher charge lands.
            </li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Never be surprised by the next hike</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
            <li>Don't let price emails drown — search your inbox for "price" or "pricing update" once a month.</li>
            <li>
              Run a quick{" "}
              <Link href="/subscription-audit-checklist" className="font-medium underline">
                subscription audit
              </Link>{" "}
              every few months — hikes hide in the totals.
            </li>
            <li>
              Keep every subscription in the{" "}
              <Link href="/dashboard" className="font-medium underline">
                Spendly dashboard
              </Link>{" "}
              with its price and renewal date, so a change is visible the moment it
              happens.
            </li>
          </ul>
        </section>

        <section className="mt-10 rounded-2xl bg-gray-50 p-6">
          <h2 className="text-xl font-bold">See your new total after the hike</h2>
          <p className="mt-2 text-gray-700">
            Update the price in Spendly and watch your monthly and yearly totals
            change — then decide with the real number in front of you. Free, no
            signup.
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
