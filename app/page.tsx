import Link from "next/link";
import { Wallet, BarChart3, Bell, PiggyBank, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Wallet size={22} />
            Spendly
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/pricing"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard"
              className="bg-black text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-gray-800 transition"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
          Free SaaS Subscription Tracker
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
          Stop wasting money
          <br />
          <span className="text-blue-600">on unused SaaS tools</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Spendly helps freelancers, startups and small teams track every subscription,
          see total spend, and never miss a renewal.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 bg-black text-white font-medium px-7 py-3.5 rounded-xl hover:bg-gray-800 transition"
          >
            Start Tracking Free
            <ArrowRight size={18} />
          </Link>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          No signup required · Data stays in your browser
        </p>
      </section>

      {/* Facts band */}
<section className="max-w-5xl mx-auto px-4 py-8">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-50 border rounded-2xl px-6 py-8 text-center">
    <div>
      <p className="font-semibold text-lg">100% Free</p>
      <p className="mt-1 text-gray-600 text-sm">No hidden charges, ever</p>
    </div>
    <div>
      <p className="font-semibold text-lg">No Signup</p>
      <p className="mt-1 text-gray-600 text-sm">Start tracking in seconds</p>
    </div>
    <div>
      <p className="font-semibold text-lg">Private by Design</p>
      <p className="mt-1 text-gray-600 text-sm">Your data stays in your browser</p>
    </div>
    <div>
      <p className="font-semibold text-lg">8 Free Guides</p>
      <p className="mt-1 text-gray-600 text-sm">Learn to cut subscription costs</p>
    </div>
  </div>
</section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-2xl p-6 border">
            <div className="w-11 h-11 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 size={22} />
            </div>
            <h3 className="font-semibold text-lg">Clear Cost Overview</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              See your exact monthly and yearly SaaS spend in one clean dashboard.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border">
            <div className="w-11 h-11 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
              <Bell size={22} />
            </div>
            <h3 className="font-semibold text-lg">Renewal Alerts</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              Get a clear view of subscriptions renewing in the next 30 days so nothing surprises you.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border">
            <div className="w-11 h-11 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
              <PiggyBank size={22} />
            </div>
            <h3 className="font-semibold text-lg">Find Savings</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              Spot tools you’re not using and calculate how much you can save by cancelling them.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 border-y py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto font-bold mb-4">
                1
              </div>
              <h3 className="font-semibold">Add your tools</h3>
              <p className="mt-2 text-sm text-gray-600">
                Quickly add name, cost, billing cycle and renewal date.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto font-bold mb-4">
                2
              </div>
              <h3 className="font-semibold">See the full picture</h3>
              <p className="mt-2 text-sm text-gray-600">
                Instantly know your monthly & yearly spend and upcoming charges.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mx-auto font-bold mb-4">
                3
              </div>
              <h3 className="font-semibold">Cut what you don’t need</h3>
              <p className="mt-2 text-sm text-gray-600">
                Cancel unused tools and keep more money in your pocket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Guides */}
     <section className="max-w-5xl mx-auto px-4 py-16">
  <p className="text-sm font-medium text-blue-600">Free Guides</p>
  <h2 className="mt-2 text-3xl font-bold tracking-tight">Free guides to cut your subscription spend</h2>
  <p className="mt-3 text-gray-600">No signup. Read a guide, then track it free in the Spendly dashboard.</p>
  <div className="mt-8 grid gap-4 sm:grid-cols-2">
    <Link href="/subscription-cost-calculator" className="block rounded-2xl bg-gray-50 p-6 border">
      <h3 className="font-semibold">Subscription Cost Calculator</h3>
      <p className="mt-1 text-sm text-gray-600">Add your subscriptions and see your true monthly and yearly cost.</p>
    </Link>
    <Link href="/saas-renewal-reminder" className="block rounded-2xl bg-gray-50 p-6 border">
      <h3 className="font-semibold">SaaS Renewal Reminder</h3>
      <p className="mt-1 text-sm text-gray-600">Never pay for a subscription you forgot to cancel.</p>
    </Link>
    <Link href="/how-much-am-i-spending-on-subscriptions" className="block rounded-2xl bg-gray-50 p-6 border">
      <h3 className="font-semibold">How Much Am I Spending on Subscriptions?</h3>
      <p className="mt-1 text-sm text-gray-600">A 10-minute audit to find your real number.</p>
    </Link>
    <Link href="/free-trial-reminder" className="block rounded-2xl bg-gray-50 p-6 border">
      <h3 className="font-semibold">Free Trial Reminder</h3>
      <p className="mt-1 text-sm text-gray-600">Never get charged for a trial you forgot to cancel.</p>
    </Link>
    <Link href="/how-to-cancel-a-subscription" className="block rounded-2xl bg-gray-50 p-6 border">
      <h3 className="font-semibold">How to Cancel a Subscription</h3>
      <p className="mt-1 text-sm text-gray-600">The reliable way to cancel, even when the button is hidden.</p>
    </Link>
    <Link href="/subscription-audit-checklist" className="block rounded-2xl bg-gray-50 p-6 border">
      <h3 className="font-semibold">Subscription Audit Checklist</h3>
      <p className="mt-1 text-sm text-gray-600">Find every wasted charge in about 15 minutes.</p>
    </Link>
    <Link href="/annual-vs-monthly-subscription" className="block rounded-2xl bg-gray-50 p-6 border">
      <h3 className="font-semibold">Annual vs Monthly Subscription</h3>
      <p className="mt-1 text-sm text-gray-600">The breakeven math: when yearly is cheaper, and when it is not.</p>
    </Link>
    <Link href="/subscription-price-increase" className="block rounded-2xl bg-gray-50 p-6 border">
      <h3 className="font-semibold">Subscription Price Increase?</h3>
      <p className="mt-1 text-sm text-gray-600">Decide in 5 minutes: keep, downgrade, pause, or cancel.</p>
    </Link>
    </div>
    </section>

    {/* Pricing strip */}
<section className="max-w-5xl mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold text-center">Simple pricing</h2>
  <p className="mt-3 text-center text-gray-600">
    Start free. Upgrade when you need more power.
  </p>
  <div className="mt-10 grid md:grid-cols-2 gap-6">
    <div className="bg-gray-50 rounded-2xl p-6 border">
      <h3 className="font-semibold text-lg">Free</h3>
      <p className="mt-2">
        <span className="text-3xl font-bold">$0</span>
        <span className="text-gray-600"> /month</span>
      </p>
      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        <li>Track unlimited subscriptions</li>
        <li>Monthly &amp; yearly cost overview</li>
        <li>Upcoming renewal alerts</li>
        <li>Data saved in your browser</li>
        <li>Export to CSV</li>
      </ul>
      <Link
        href="/dashboard"
        className="mt-6 inline-block bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium"
      >
        Start Free
      </Link>
    </div>
    <div className="bg-gray-50 rounded-2xl p-6 border">
      <div className="flex items-center gap-3">
        <h3 className="font-semibold text-lg">Pro</h3>
        <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-1 rounded-full">
          Coming Soon
        </span>
      </div>
      <p className="mt-2">
        <span className="text-3xl font-bold">$9</span>
        <span className="text-gray-600"> /month</span>
      </p>
      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        <li>Everything in Free</li>
        <li>Cloud sync across devices</li>
        <li>Email renewal reminders</li>
        <li>Team sharing</li>
        <li>Priority support</li>
      </ul>
      <Link
        href="/pricing"
        className="mt-6 inline-block border px-5 py-2.5 rounded-xl font-medium"
      >
        See Pricing
      </Link>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Ready to take control of your SaaS spend?
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Join freelancers and small teams who are finally seeing where their money goes.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 mt-8 bg-black text-white font-medium px-7 py-3.5 rounded-xl hover:bg-gray-800 transition"
        >
          Open Dashboard
          <ArrowRight size={18} />
        </Link>
      </section>

      {/* Footer */}
<footer className="border-t py-8 text-center text-sm text-gray-500">
  <div className="flex justify-center gap-6 mb-3">
    <Link href="/about" className="hover:text-gray-900">About</Link>
    <Link href="/contact" className="hover:text-gray-900">Contact</Link>
    <Link href="/privacy" className="hover:text-gray-900">Privacy</Link>
    <Link href="/terms" className="hover:text-gray-900">Terms</Link>
    <Link href="/pricing" className="hover:text-gray-900">Pricing</Link>
  </div>
  © 2026 Spendly. Built to stop SaaS waste.
</footer>
    </div>
  );
}