// fireMath.ts — shared maths for Spendly's FIRE + Coast FIRE calculators.
// Pure functions only. Convention: ANNUAL compounding throughout.
// Do NOT mix monthly compounding into these formulas.

export interface FireInputs {
  /** Yearly spending in USD — drives the FIRE number. */
  annualExpenses: number;
  /** Current savings/investments in USD. */
  currentSavings: number;
  /** Amount saved each month in USD. */
  monthlySaving: number;
  /** Current age in years. */
  currentAge: number;
  /** Age at which retirement should be fully funded. */
  retirementAge: number;
  /** Expected annual return as a percent, e.g. 7 means 7%. */
  annualReturnPct: number;
}

/** FIRE number = annual expenses x 25 (the 4% rule). */
export function fireNumber(annualExpenses: number): number {
  return annualExpenses * 25;
}

/**
 * Coast FIRE number: the amount that grows to the FIRE number by
 * retirement with no further contributions.
 * = FIRE number / (1 + r) ^ (retirementAge - currentAge)
 */
export function coastFireNumber(
  fire: number,
  annualReturnPct: number,
  currentAge: number,
  retirementAge: number,
): number {
  const r = annualReturnPct / 100;
  const years = Math.max(0, retirementAge - currentAge);
  return fire / Math.pow(1 + r, years);
}

/**
 * Years to reach target T from principal P with annual saving A
 * at annual return r (decimal):
 *   n = ln((T*r + A) / (P*r + A)) / ln(1 + r)
 * Returns 0 when the target is already reached.
 * With a 0% return it is simple division: (T - P) / A.
 */
export function yearsToTarget(
  principal: number,
  annualSaving: number,
  target: number,
  annualReturnPct: number,
): number {
  if (target <= principal) return 0;
  const r = annualReturnPct / 100;
  if (r === 0) {
    return annualSaving > 0 ? (target - principal) / annualSaving : Infinity;
  }
  const numerator = Math.log((target * r + annualSaving) / (principal * r + annualSaving));
  return numerator / Math.log(1 + r);
}

export interface FireResults {
  fire: number;
  coast: number;
  yearsToFire: number;
  yearsToCoast: number;
  alreadyCoastFI: boolean;
}

/**
 * One call for both pages. NOTE: "years to Coast" holds today's Coast
 * number fixed, so the page labels it an estimate (in reality the
 * required Coast balance rises as retirement approaches).
 */
export function calculateFire(inputs: FireInputs): FireResults {
  const fire = fireNumber(inputs.annualExpenses);
  const coast = coastFireNumber(
    fire,
    inputs.annualReturnPct,
    inputs.currentAge,
    inputs.retirementAge,
  );
  const annualSaving = inputs.monthlySaving * 12;
  const yearsToFire = yearsToTarget(
    inputs.currentSavings,
    annualSaving,
    fire,
    inputs.annualReturnPct,
  );
  const yearsToCoast = yearsToTarget(
    inputs.currentSavings,
    annualSaving,
    coast,
    inputs.annualReturnPct,
  );
  return {
    fire,
    coast,
    yearsToFire,
    yearsToCoast,
    alreadyCoastFI: inputs.currentSavings >= coast,
  };
}

/** Round for display to 1 decimal place (e.g. 1.6 years). */
export function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

/** Round for display to whole dollars (e.g. $131,367). */
export function roundDollar(n: number): number {
  return Math.round(n);
}
