import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Spendly",
  description:
    "Spendly's privacy policy: your subscriptions are stored only in your own browser. No accounts, no bank connections, no data sold — ever.",
  openGraph: {
    title: "Privacy Policy | Spendly",
    description:
      "Your data stays in your browser. Read how Spendly handles privacy — mostly by collecting nothing.",
    url: "https://spendly-beryl-three.vercel.app/privacy",
    siteName: "Spendly",
    type: "website",
  },
  alternates: {
    canonical: "https://spendly-beryl-three.vercel.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-14">
        <p className="text-sm font-medium text-blue-600">Legal</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-gray-600">Last updated: October 27, 2026</p>

        <section className="mt-8">
          <h2 className="text-2xl font-bold">The short version</h2>
          <p className="mt-4 text-gray-700">
            Spendly stores your subscriptions only in your own browser, on your
            own device. We have no accounts, no database of your subscriptions,
            and nothing to sell. This page explains the details.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">What we collect</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong>Your subscription list: not collected.</strong> The names,
              prices, and renewal dates you enter are saved in your browser's
              local storage on your device. They are never sent to our servers —
              we couldn't see them if we wanted to.
            </li>
            <li>
              <strong>Accounts: none.</strong> Spendly has no signup, so we hold
              no names, passwords, or profiles for visitors.
            </li>
            <li>
              <strong>Payment and bank details: never.</strong> Spendly never asks
              for, receives, or stores bank logins, card numbers, or payment
              information.
            </li>
            <li>
              <strong>If you email us:</strong> we receive your email address and
              whatever you write. We use it only to reply to you.
            </li>
            <li>
              <strong>Basic technical logs:</strong> our hosting provider may
              process standard technical information (such as IP address and
              browser type) in server logs to run and secure the site.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Cookies and local storage</h2>
          <p className="mt-4 text-gray-700">
            Spendly uses your browser's local storage for one functional purpose:
            remembering your subscription list between visits. We do not use
            tracking cookies of our own. If we introduce advertising in the
            future (for example Google AdSense), advertising partners may use
            cookies to serve and measure ads, and we will update this policy
            before that happens.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Your control over your data</h2>
          <p className="mt-4 text-gray-700">
            Because your data lives in your browser, you control it completely.
            Delete entries any time in the{" "}
            <Link href="/dashboard" className="font-medium underline">
              dashboard
            </Link>
            , or clear your browser's site data to remove everything at once.
            Note that clearing browser data deletes your list permanently — we
            keep no copy and cannot restore it.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Children</h2>
          <p className="mt-4 text-gray-700">
            Spendly is a budgeting tool for adults and businesses and is not
            directed at children under 13.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Changes and contact</h2>
          <p className="mt-4 text-gray-700">
            If this policy changes, we will update this page and its date.
            Questions about privacy? See our{" "}
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
