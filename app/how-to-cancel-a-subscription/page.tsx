import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Cancel a Subscription: Step-by-Step Guide | Spendly",
  description:
    "Cancel any subscription without the runaround: find the real cancel page, avoid retention traps, confirm it actually stopped, and track what's left. Free guide.",
  keywords: [
    "how to cancel a subscription",
    "cancel subscription online",
    "subscription cancellation guide",
    "stop recurring payments",
  ],
  openGraph: {
    title: "How to Cancel a Subscription: Step-by-Step Guide | Spendly",
    description:
      "The reliable way to cancel any subscription — plus what to do when the cancel button is hidden.",
    url: "https://spendly-beryl-three.vercel.app/how-to-cancel-a-subscription",
    siteName: "Spendly",
    type: "website",
  },
  alternates: {
    canonical: "https://spendly-beryl-three.vercel.app/how-to-cancel-a-subscription",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I cancel a subscription online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go to Account or Settings, then Billing or Subscription, and look for Cancel plan. If there is no cancel button, use the service's help center or live chat and ask for written confirmation that auto-renewal is off.",
      },
    },
    {
      "@type": "Question",
      name: "Do I get a refund if I cancel a subscription mid-cycle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually you keep access until the end of the paid period but don't get a refund for the remaining time. Annual plans sometimes offer prorated refunds — check the terms before cancelling, and cancel a few days before renewal, not on the day.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do after cancelling a subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Save the cancellation confirmation email for 60 days, check your next card statement for stray charges, remove the payment method if the service allows it, and update your subscription tracker so the cancelled plan stops showing in your totals.",
      },
    },
  ],
};

export default function CancelSubscriptionGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-14">
        <p className="text-sm font-medium text-blue-600">Free Guide</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          How to Cancel a Subscription (Without the Runaround)
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Signing up takes one click — cancelling takes a treasure hunt. Companies
          bury the cancel button on purpose. Here is the reliable process that
          works on almost any service, plus what to do when they hide the exit.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">The 5-step cancel process</h2>
          <ol className="mt-4 list-decimal pl-5 space-y-4 text-gray-700">
            <li>
              <strong>Screenshot first.</strong> Before touching anything, note your
              current plan, price, and renewal date. If something goes wrong later,
              this is your proof.
            </li>
            <li>
              <strong>Find the real billing page.</strong> Go to Account or Settings,
              then Billing, Subscription, or Membership. If you can't find a cancel
              option, search the service's help center for "cancel subscription" —
              the official article always links the real page.
            </li>
            <li>
              <strong>Choose: cancel, downgrade, or pause.</strong> If you might
              return, a pause or a cheaper tier beats a full cancel. Only take a
              retention discount if you'd keep the service at full price too.
            </li>
            <li>
              <strong>Confirm it actually stopped.</strong> Don't trust a success
              screen alone — wait for the confirmation email, and re-open the
              billing page to check it says "cancelled" or "expires on [date]".
            </li>
            <li>
              <strong>Update your tracker.</strong> Remove or mark the subscription
              as cancelled in your{" "}
              <Link href="/dashboard" className="font-medium underline">
                Spendly dashboard
              </Link>{" "}
              so it stops inflating your monthly and yearly totals.
            </li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">When the cancel button is hidden</h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">No cancel button anywhere</h3>
              <p className="mt-1 text-gray-700">
                Open live chat or email support and write one line: "Please cancel
                my subscription and turn off auto-renewal, and confirm in writing."
                A written confirmation beats a verbal promise every time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">The retention-offer trap</h3>
              <p className="mt-1 text-gray-700">
                "Stay for 30% off!" only saves money if you'd keep paying full
                price. If the service wasn't worth it before the discount, it
                isn't worth it now — the discount just restarts the forgetting
                cycle. Set a{" "}
                <Link href="/saas-renewal-reminder" className="font-medium underline">
                  renewal reminder
                </Link>{" "}
                if you accept one.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">They demand a phone call</h3>
              <p className="mt-1 text-gray-700">
                Some services force you to call. Keep it short: state the
                cancellation, decline every offer once, and ask for a confirmation
                email before hanging up. Note the agent's name and the time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Annual plan, mid-cycle</h3>
              <p className="mt-1 text-gray-700">
                Check the refund terms first — some plans prorate, most don't.
                Either way, cancel a few days <em>before</em> the renewal date,
                never on the day: processing delays are how "cancelled" plans
                charge you once more.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">After you cancel: the 60-day watch</h2>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
            <li>Keep the confirmation email for 60 days.</li>
            <li>Check your next two card statements for stray charges.</li>
            <li>Remove the saved payment method if the service allows it.</li>
            <li>
              Recount what you actually spend now with the{" "}
              <Link href="/subscription-cost-calculator" className="font-medium underline">
                Subscription Cost Calculator
              </Link>{" "}
              — the number usually drops more than expected.
            </li>
            <li>
              For trials you start in future, set a{" "}
              <Link href="/free-trial-reminder" className="font-medium underline">
                free trial reminder
              </Link>{" "}
              so you never need this guide again.
            </li>
            <li>
  If a price rise is why you cancelled, see what to do when a{" "}
  <Link href="/subscription-price-increase" className="font-medium underline">
    subscription price increases
  </Link>
  .
</li>
          </ul>
        </section>

        <section className="mt-10 rounded-2xl bg-gray-50 p-6">
          <h2 className="text-xl font-bold">See what cancelling saved you</h2>
          <p className="mt-2 text-gray-700">
            Mark cancelled subscriptions in the Spendly dashboard and watch your
            monthly and yearly totals drop — free, no signup, data stays in your
            browser.
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
