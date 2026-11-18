"use client"; 
import { useState, type FormEvent } from "react"; 
import Link from "next/link";
import { Check, Wallet, ArrowRight } from "lucide-react";

export default function Pricing() { 
  const [waitlistEmail, setWaitlistEmail] = useState(""); 
  const [waitlistStatus, setWaitlistStatus] = useState<"idle" | "submitting" | "success" | "error">("idle"); 
  const handleWaitlistSubmit = async (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 
    setWaitlistStatus("submitting"); 
    try { 
      const res = await fetch("https://formsubmit.co/ajax/spendlytool@gmail.com", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ email: waitlistEmail, _subject: "New Spendly Pro waitlist signup", _template: "table" }) }); 
      if (!res.ok) throw new Error("Waitlist signup failed"); 
      setWaitlistStatus("success"); 
    } catch { 
      setWaitlistStatus("error"); 
    } };
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
                Renewal view on your dashboard
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check size={16} className="text-green-600" />
                Data saved in your browser
                <li className="flex items-center gap-2 text-sm">
                <Check size={16} className="text-green-600" />
                Export to CSV
              </li>
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
                Priority support
              </li>
            </ul>

            <button
              disabled
              className="mt-8 w-full bg-gray-100 text-gray-400 rounded-xl py-3 text-sm font-medium cursor-not-allowed"
            >
              Coming Soon
            </button>
            <form onSubmit={handleWaitlistSubmit} className="mt-6 border-t border-gray-100 pt-6">
            <p className="text-sm text-gray-600">Pro is coming soon — join the waitlist and we'll email you at launch.</p>
            <label htmlFor="pro-waitlist-email" className="sr-only">Email address</label>
            <input id="pro-waitlist-email" type="email" required value={waitlistEmail} onChange={(e) => setWaitlistEmail(e.target.value)} placeholder="you@example.com" className="mt-3 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />
            <button type="submit" disabled={waitlistStatus === "submitting" || waitlistStatus === "success"} className="mt-3 w-full rounded-xl bg-black py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:opacity-50">{waitlistStatus === "submitting" ? "Joining..." : "Join waitlist"}</button>
            {waitlistStatus === "success" && (<p role="status" className="mt-3 text-sm font-medium text-green-700">You're on the list — we'll email you when Pro launches.</p>)}
            {waitlistStatus === "error" && (<p role="status" className="mt-3 text-sm font-medium text-red-600">Something went wrong — please try again.</p>)}
            </form>
          </div>
        </div>
      </div>

      <footer className="border-t py-8 text-center text-sm text-gray-500">
        © 2026 Spendly
      </footer>
    </div>
  );
}
