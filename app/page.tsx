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
          <div className="flex items-center gap-3">
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
        © 2026 Spendly. Built to stop SaaS waste.
      </footer>
    </div>
  );
}