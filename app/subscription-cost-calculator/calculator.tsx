"use client";
import { useState } from "react";

type Sub = { id: string; name: string; cost: string; cycle: "monthly" | "yearly" };

const initial: Sub[] = [
  { id: "1", name: "Netflix", cost: "15.99", cycle: "monthly" },
  { id: "2", name: "Canva", cost: "14.99", cycle: "monthly" },
  { id: "3", name: "ChatGPT Plus", cost: "20", cycle: "monthly" },
];

export default function Calculator() {
  const [subs, setSubs] = useState<Sub[]>(initial);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly");

  const monthly = subs.reduce((sum, s) => sum + (parseFloat(s.cost) || 0) / (s.cycle === "yearly" ? 12 : 1), 0);
  const yearly = monthly * 12;

  const add = () => {
    if (!name.trim() || !cost) return;
    setSubs([...subs, { id: Date.now().toString(), name: name.trim(), cost, cycle }]);
    setName(""); setCost(""); setCycle("monthly");
  };

  return (
    <div className="border rounded-2xl p-5">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-xl p-4"><p className="text-sm text-gray-500">Monthly</p><p className="text-2xl font-bold">${monthly.toFixed(2)}</p></div>
        <div className="bg-gray-50 rounded-xl p-4"><p className="text-sm text-gray-500">Yearly</p><p className="text-2xl font-bold">${yearly.toFixed(2)}</p></div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name, e.g. Spotify" className="flex-1 border rounded-xl px-3 py-2 text-sm" />
        <input value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Cost" type="number" className="w-full sm:w-28 border rounded-xl px-3 py-2 text-sm" />
        <select value={cycle} onChange={(e) => setCycle(e.target.value as "monthly" | "yearly")} className="border rounded-xl px-3 py-2 text-sm">
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
        <button onClick={add} className="bg-black text-white rounded-xl px-4 py-2 text-sm">Add</button>
      </div>
      <div className="mt-4 divide-y">
        {subs.map((s) => (
          <div key={s.id} className="py-3 flex items-center justify-between">
            <span className="text-sm font-medium">{s.name} <span className="text-gray-500">· {s.cycle}</span></span>
            <span className="flex items-center gap-3"><span className="font-semibold text-sm">${s.cost}</span>
            <button onClick={() => setSubs(subs.filter((x) => x.id !== s.id))} className="text-sm text-red-600">Delete</button></span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-gray-500">Example prices (Netflix $15.99, Canva $14.99, ChatGPT Plus $20) sirf demo ke liye hain.</p>
    </div>
  );
}
