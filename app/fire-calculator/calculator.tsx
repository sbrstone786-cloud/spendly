"use client";

import { useMemo, useState } from "react";
import { calculateFire, round1, roundDollar } from "./fireMath";

function money(n: number): string {
  return "$" + roundDollar(n).toLocaleString("en-US");
}

export default function FireCalculator() {
  const [annualExpenses, setAnnualExpenses] = useState(40000);
  const [currentSavings, setCurrentSavings] = useState(100000);
  const [monthlySaving, setMonthlySaving] = useState(1000);
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [annualReturnPct, setAnnualReturnPct] = useState(7);

  const results = useMemo(
    () =>
      calculateFire({
        annualExpenses: annualExpenses || 0,
        currentSavings: currentSavings || 0,
        monthlySaving: monthlySaving || 0,
        currentAge: currentAge || 0,
        retirementAge: retirementAge || 0,
        annualReturnPct: annualReturnPct || 0,
      }),
    [
      annualExpenses,
      currentSavings,
      monthlySaving,
      currentAge,
      retirementAge,
      annualReturnPct,
    ]
  );

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none";
  const labelClass = "block text-sm font-medium text-gray-700";

  return (
    <div className="mt-8 rounded-2xl border border-gray-200 p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Annual expenses ($ per year)</label>
          <input
            type="number"
            className={inputClass}
            value={annualExpenses}
            onChange={(e) => setAnnualExpenses(Number(e.target.value))}
          />
        </div>
        <div>
          <label className={labelClass}>Current savings ($)</label>
          <input
            type="number"
            className={inputClass}
            value={currentSavings}
            onChange={(e) => setCurrentSavings(Number(e.target.value))}
          />
        </div>
        <div>
          <label className={labelClass}>Monthly saving ($)</label>
          <input
            type="number"
            className={inputClass}
            value={monthlySaving}
            onChange={(e) => setMonthlySaving(Number(e.target.value))}
          />
        </div>
        <div>
          <label className={labelClass}>Expected annual return (%)</label>
          <input
            type="number"
            className={inputClass}
            value={annualReturnPct}
            onChange={(e) => setAnnualReturnPct(Number(e.target.value))}
          />
        </div>
        <div>
          <label className={labelClass}>Current age</label>
          <input
            type="number"
            className={inputClass}
            value={currentAge}
            onChange={(e) => setCurrentAge(Number(e.target.value))}
          />
        </div>
        <div>
          <label className={labelClass}>Retirement age</label>
          <input
            type="number"
            className={inputClass}
            value={retirementAge}
            onChange={(e) => setRetirementAge(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="mt-8 rounded-xl bg-blue-50 p-6 text-center">
        <p className="text-sm font-medium text-gray-600">Your FIRE number</p>
        <p className="mt-1 text-4xl font-bold text-gray-900">
          {money(results.fire)}
        </p>
        {results.yearsToFire === 0 ? (
          <p className="mt-2 text-gray-700">
            You have already reached your FIRE number. 🎉
          </p>
        ) : !isFinite(results.yearsToFire) ? (
          <p className="mt-2 text-gray-700">
            With these numbers the target is not reached — try saving more
            each month.
          </p>
        ) : (
          <p className="mt-2 text-gray-700">
            At this pace you reach it in about{" "}
            <strong>{round1(results.yearsToFire)} years</strong>, at around
            age <strong>{round1(currentAge + results.yearsToFire)}</strong>.
          </p>
        )}
      </div>
    </div>
  );
}
