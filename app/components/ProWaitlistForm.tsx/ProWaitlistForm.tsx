"use client";

import { useState, type FormEvent } from "react";

export default function ProWaitlistForm() {
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistStatus, setWaitlistStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleWaitlistSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWaitlistStatus("submitting");
    try {
      const res = await fetch("https://formsubmit.co/ajax/spendlytool@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email: waitlistEmail,
          _subject: "New Spendly Pro waitlist signup",
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("Waitlist signup failed");
      setWaitlistStatus("success");
    } catch {
      setWaitlistStatus("error");
    }
  };

  return (
    <form onSubmit={handleWaitlistSubmit} className="mt-6 border-t border-gray-200 pt-6">
      <p className="text-sm text-gray-600">Pro is coming soon — join the waitlist and we'll email you at launch.</p>
      <label htmlFor="pro-waitlist-email" className="sr-only">Email address</label>
      <input
        id="pro-waitlist-email"
        type="email"
        required
        value={waitlistEmail}
        onChange={(e) => setWaitlistEmail(e.target.value)}
        placeholder="you@example.com"
        className="mt-3 w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-black focus:outline-none"
      />
      <button
        type="submit"
        disabled={waitlistStatus === "submitting" || waitlistStatus === "success"}
        className="mt-3 w-full rounded-xl bg-black py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:opacity-50"
      >
        {waitlistStatus === "submitting" ? "Joining..." : "Join waitlist"}
      </button>
      {waitlistStatus === "success" && (
        <p role="status" className="mt-3 text-sm font-medium text-green-700">You're on the list — we'll email you when Pro launches.</p>
      )}
      {waitlistStatus === "error" && (
        <p role="status" className="mt-3 text-sm font-medium text-red-600">Something went wrong — please try again.</p>
      )}
    </form>
  );
}
