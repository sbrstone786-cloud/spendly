import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Spendly",
  description:
    "Spendly's terms of service: a free subscription tracking tool provided as-is, for personal and business budgeting. Not financial advice.",
  openGraph: {
    title: "Terms of Service | Spendly",
    description:
      "The simple terms for using Spendly's free subscription tracker and guides.",
    url: "https://spendly-beryl-three.vercel.app/terms",
    siteName: "Spendly",
    type: "website",
  },
  alternates: {
    canonical: "https://spendly-beryl-three.vercel.app/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-14">
        <p className="text-sm font-medium text-blue-600">Legal</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-4 text-gray-600">Last updated: October 27, 2026</p>

        <section className="mt-8">
          <h2 className="text-2xl font-bold">Using Spendly</h2>
          <p className="mt-4 text-gray-700">
            Spendly is a free tool that helps you track subscriptions and see
            what they cost. By using the site, you agree to these terms. If you
            don't agree, please don't use the service.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Not financial advice</h2>
          <p className="mt-4 text-gray-700">
            Spendly is a budgeting and organization tool. Its totals,
            calculations, and guides are general information to help you see
            your own spending — they are not financial, tax, or investment
            advice. Decisions about your money are yours.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Your data, your responsibility</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Your subscriptions are stored only in your browser (see our{" "}
              <Link href="/privacy" className="font-medium underline">
                Privacy Policy
              </Link>
              ). We keep no backup and cannot restore a lost list.
            </li>
            <li>
              Totals and renewal dates are calculated from what you enter. If an
              entry is wrong or missing, reminders and totals will be too —
              check important renewals with the provider itself.
            </li>
            <li>
              Spendly is not responsible for charges, renewals, or missed
              cancellations by third-party services.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Acceptable use</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
            <li>Use Spendly for lawful personal or business purposes.</li>
            <li>Don't try to disrupt, overload, or break into the site or its hosting.</li>
            <li>Don't present Spendly's guides as your own work.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Service provided "as is"</h2>
          <p className="mt-4 text-gray-700">
            Spendly is provided free of charge, "as is" and "as available",
            without warranties of any kind. We may change, improve, or
            discontinue features at any time. To the fullest extent allowed by
            law, Spendly is not liable for indirect or consequential losses
            arising from use of the site.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Changes and contact</h2>
          <p className="mt-4 text-gray-700">
            We may update these terms; the current version will always be on
            this page. Questions? See our{" "}
            <Link href="/contact" className="font-medium underline">
              contact page
            </Link>{" "}
            or email spendlytool@gmail.com.
          </p>
        </section>
      </div>
    </main>
  );
}
