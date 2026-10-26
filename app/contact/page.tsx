import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Spendly | Get in Touch",
  description:
    "Contact Spendly for feedback, bug reports, feature requests, or guide suggestions. Email us at spendlytool@gmail.com — we read every message.",
  openGraph: {
    title: "Contact Spendly | Get in Touch",
    description:
      "Questions, feedback, or a bug to report? Email spendlytool@gmail.com — we read every message.",
    url: "https://spendly-beryl-three.vercel.app/contact",
    siteName: "Spendly",
    type: "website",
  },
  alternates: {
    canonical: "https://spendly-beryl-three.vercel.app/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-14">
        <p className="text-sm font-medium text-blue-600">Contact</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Contact Spendly
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Questions, feedback, or something broken? Send us an email — a real
          person reads every message.
        </p>

        <section className="mt-10 rounded-2xl bg-gray-50 p-6">
          <h2 className="text-xl font-bold">Email us</h2>
          <p className="mt-2 text-gray-700">
            The fastest way to reach us:
          </p>
          <p className="mt-3 text-lg font-semibold">
            <a href="mailto:spendlytool@gmail.com" className="text-blue-600 underline">
              spendlytool@gmail.com
            </a>
          </p>
          <p className="mt-3 text-gray-700">
            Spendly is a small independent project, so replies can take a few
            days — but every email is read and appreciated.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">What to write about</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Bug reports</strong> — tell us what you clicked and what happened.</li>
            <li><strong>Feature requests</strong> — what would make Spendly more useful for you?</li>
            <li><strong>Guide suggestions</strong> — a subscription topic you'd like explained.</li>
            <li><strong>Corrections</strong> — spotted something wrong in a guide? Tell us.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Before you email</h2>
          <p className="mt-4 text-gray-700">
            Spendly stores your subscriptions only in your own browser — we
            don't have accounts, passwords, or copies of your data, so we can't
            look up or restore your list. If your subscriptions disappeared,
            check you're in the same browser you added them in. For how the
            tool works, the{" "}
            <Link href="/subscription-cost-calculator" className="font-medium underline">
              Subscription Cost Calculator
            </Link>{" "}
            page explains the math.
          </p>
        </section>
      </div>
    </main>
  );
}
