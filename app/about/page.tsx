import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Spendly | Free SaaS Subscription Tracker",
  description:
    "Spendly is a free subscription tracker for freelancers, startups and small teams. Track every subscription, see your real spend, and never miss a renewal — no signup, data stays in your browser.",
  openGraph: {
    title: "About Spendly | Free SaaS Subscription Tracker",
    description:
      "A free subscription tracker built to stop SaaS waste. No signup, no bank connection — your data stays in your browser.",
    url: "https://spendly-beryl-three.vercel.app/about",
    siteName: "Spendly",
    type: "website",
  },
  alternates: {
    canonical: "https://spendly-beryl-three.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-14">
        <p className="text-sm font-medium text-blue-600">About</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          About Spendly
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Spendly is a free subscription tracker for freelancers, startups, and
          small teams. It helps you track every subscription, see exactly what
          you spend each month and year, and never get surprised by a renewal
          again.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Why Spendly exists</h2>
          <p className="mt-4 text-gray-700">
            Subscriptions creep up quietly. A $10 tool here, a $15 tool there, a
            yearly plan you forgot about — and suddenly hundreds of dollars a
            year are leaving your account for things you barely use. Most
            subscription trackers ask you to connect your bank account or pay
            for the privilege of seeing your own spending. Spendly does
            neither.
          </p>
          <p className="mt-4 text-gray-700">
            You add your subscriptions once, and Spendly shows your true monthly
            and yearly cost, what's renewing in the next 30 days, and how much
            you could save by cancelling what you don't use.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How Spendly is different</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>100% free to start</strong> — no credit card, no trial that secretly converts.</li>
            <li><strong>No signup</strong> — no account, no password, nothing to verify.</li>
            <li><strong>Your data stays in your browser</strong> — subscriptions are stored on your own device, never sent to a server.</li>
            <li><strong>No bank connection</strong> — you enter only what you choose to enter.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">What you can do with Spendly</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Track subscriptions in the free{" "}
              <Link href="/dashboard" className="font-medium underline">
                dashboard
              </Link>
              .
            </li>
            <li>
              Add up your spending with the{" "}
              <Link href="/subscription-cost-calculator" className="font-medium underline">
                Subscription Cost Calculator
              </Link>
              .
            </li>
            <li>
              Learn to spend less with our free guides — from a full{" "}
              <Link href="/subscription-audit-checklist" className="font-medium underline">
                subscription audit
              </Link>{" "}
              to cancelling without the runaround.
            </li>
          </ul>
        </section>

        <section className="mt-10 rounded-2xl bg-gray-50 p-6">
          <h2 className="text-xl font-bold">Try it — it takes 60 seconds</h2>
          <p className="mt-2 text-gray-700">
            Add your subscriptions and see your real number. Free, no signup,
            data stays in your browser.
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
