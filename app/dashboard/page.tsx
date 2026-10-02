"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Trash2, Calendar, DollarSign, CreditCard } from "lucide-react";

type Subscription = {
  id: string;
  name: string;
  cost: number;
  billingCycle: "monthly" | "yearly";
  nextRenewal: string;
  category: string;
};

export default function Dashboard() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      id: "1",
      name: "Notion",
      cost: 10,
      billingCycle: "monthly",
      nextRenewal: "2026-10-15",
      category: "Productivity",
    },
    {
      id: "2",
      name: "ChatGPT Plus",
      cost: 20,
      billingCycle: "monthly",
      nextRenewal: "2026-10-08",
      category: "AI",
    },
    {
      id: "3",
      name: "Vercel Pro",
      cost: 20,
      billingCycle: "monthly",
      nextRenewal: "2026-11-01",
      category: "Hosting",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    billingCycle: "monthly",
    nextRenewal: "",
    category: "",
  });

  // Calculate totals
  const monthlyTotal = subscriptions.reduce((sum, sub) => {
    return sum + (sub.billingCycle === "monthly" ? sub.cost : sub.cost / 12);
  }, 0);

  const yearlyTotal = monthlyTotal * 12;

  const handleAdd = () => {
    if (!formData.name || !formData.cost || !formData.nextRenewal) return;

    const newSub: Subscription = {
      id: Date.now().toString(),
      name: formData.name,
      cost: parseFloat(formData.cost),
      billingCycle: formData.billingCycle as "monthly" | "yearly",
      nextRenewal: formData.nextRenewal,
      category: formData.category || "Other",
    };

    setSubscriptions([...subscriptions, newSub]);
    setFormData({ name: "", cost: "", billingCycle: "monthly", nextRenewal: "", category: "" });
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    setSubscriptions(subscriptions.filter((sub) => sub.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-gray-900">
            Spendly
          </Link>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-black text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            <Plus size={16} />
            Add Subscription
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                <DollarSign size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Monthly Spend</p>
                <p className="text-2xl font-bold">${monthlyTotal.toFixed(0)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                <CreditCard size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Yearly Spend</p>
                <p className="text-2xl font-bold">${yearlyTotal.toFixed(0)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Active Tools</p>
                <p className="text-2xl font-bold">{subscriptions.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscriptions List */}
        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="font-semibold text-lg">Your Subscriptions</h2>
          </div>

          {subscriptions.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              No subscriptions yet. Add your first one!
            </div>
          ) : (
            <div className="divide-y">
              {subscriptions.map((sub) => (
                <div
                  key={sub.id}
                  className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <div>
                    <div className="font-medium">{sub.name}</div>
                    <div className="text-sm text-gray-500">
                      {sub.category} · Next renewal: {sub.nextRenewal}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-semibold">${sub.cost}</div>
                      <div className="text-xs text-gray-500">/{sub.billingCycle}</div>
                    </div>
                    <button
                      onClick={() => handleDelete(sub.id)}
                      className="text-gray-400 hover:text-red-500 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add Subscription Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6">
            <h3 className="text-lg font-semibold mb-4">Add Subscription</h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Notion"
                  className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Cost ($)</label>
                <input
                  type="number"
                  value={formData.cost}
                  onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
                  placeholder="10"
                  className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Billing Cycle</label>
                <select
                  value={formData.billingCycle}
                  onChange={(e) => setFormData({ ...formData, billingCycle: e.target.value })}
                  className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Next Renewal Date</label>
                <input
                  type="date"
                  value={formData.nextRenewal}
                  onChange={(e) => setFormData({ ...formData, nextRenewal: e.target.value })}
                  className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="e.g. Productivity"
                  className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowForm(false)}
                className="flex-1 border rounded-lg py-2 font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="flex-1 bg-black text-white rounded-lg py-2 font-medium hover:bg-gray-800"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
