import Link from "next/link";
import { Check, Wallet, ArrowRight } from "lucide-react";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Wallet size={22} />
            Spendly
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <Link
              href="/dashboard"
              className="bg-black text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-gray-800 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold tracking-tight">Simple Pricing</h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Start free. Upgrade when you need more power.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free Plan */}
          <div className="border rounded-2xl p-8 bg-white">
            <div className="text-sm font-medium text-gray-500 mb-2">Free</div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-500">/month</span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Perfect for freelancers and individuals.
            </p>

            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Check size={16} className="text-green-600" />
                Track unlimited subscriptions
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check size={16} className="text-green-600" />
                Monthly & yearly cost overview
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check size={16} className="text-green-600" />
                Upcoming renewal alerts
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check size={16} className="text-green-600" />
                Data saved in your browser
              </li>
            </ul>

            <Link
              href="/dashboard"
              className="mt-8 flex items-center justify-center gap-2 w-full border border-gray-300 rounded-xl py-3 text-sm font-medium hover:bg-gray-50 transition"
            >
              Start Free
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-black rounded-2xl p-8 bg-white relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-medium px-3 py-1 rounded-full">
              Coming Soon
            </div>
            <div className="text-sm font-medium text-gray-500 mb-2">Pro</div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">$9</span>
              <span className="text-gray-500">/month</span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              For teams and power users.
            </p>

            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Check size={16} className="text-green-600" />
                Everything in Free
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check size={16} className="text-green-600" />
                Cloud sync across devices
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check size={16} className="text-green-600" />
                Email renewal reminders
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check size={16} className="text-green-600" />
                Team sharing
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check size={16} className="text-green-600" />
                Export to CSV
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check size={16} className="text-green-600" />
                Priority support
              </li>
            </ul>

            <button
              disabled
              className="mt-8 w-full bg-gray-100 text-gray-400 rounded-xl py-3 text-sm font-medium cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>

      <footer className="border-t py-8 text-center text-sm text-gray-500">
        © 2026 Spendly
      </footer>
    </div>
  );
}