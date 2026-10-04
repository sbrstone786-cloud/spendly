"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Plus,
  Trash2,
  Calendar,
  DollarSign,
  CreditCard,
  AlertCircle,
  Pencil,
  Wallet,
} from "lucide-react";

type Subscription = {
  id: string;
  name: string;
  cost: number;
  billingCycle: "monthly" | "yearly";
  nextRenewal: string;
  category: string;
};

export default function Dashboard() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    billingCycle: "monthly",
    nextRenewal: "",
    category: "",
  });

  // Load data
  useEffect(() => {
    const saved = localStorage.getItem("spendly-subscriptions");
    if (saved) setSubscriptions(JSON.parse(saved));
  }, []);

  // Save data
  useEffect(() => {
    localStorage.setItem("spendly-subscriptions", JSON.stringify(subscriptions));
  }, [subscriptions]);

  const monthlyTotal = subscriptions.reduce((sum, sub) => {
    return sum + (sub.billingCycle === "monthly" ? sub.cost : sub.cost / 12);
  }, 0);

  const yearlyTotal = monthlyTotal * 12;

  const today = new Date();
  const upcoming = subscriptions
    .filter((sub) => {
      const renewalDate = new Date(sub.nextRenewal);
      const diffDays = (renewalDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
      return diffDays >= 0 && diffDays <= 30;
    })
    .sort((a, b) => new Date(a.nextRenewal).getTime() - new Date(b.nextRenewal).getTime());

  const openAddForm = () => {
    setEditingId(null);
    setFormData({
      name: "",
      cost: "",
      billingCycle: "monthly",
      nextRenewal: "",
      category: "",
    });
    setShowForm(true);
  };

  const openEditForm = (sub: Subscription) => {
    setEditingId(sub.id);
    setFormData({
      name: sub.name,
      cost: sub.cost.toString(),
      billingCycle: sub.billingCycle,
      nextRenewal: sub.nextRenewal,
      category: sub.category,
    });
    setShowForm(true);
  };

  const handleSave = () => {
    if (!formData.name || !formData.cost || !formData.nextRenewal) return;

    if (editingId) {
      setSubscriptions(
        subscriptions.map((sub) =>
          sub.id === editingId
            ? {
                ...sub,
                name: formData.name,
                cost: parseFloat(formData.cost),
                billingCycle: formData.billingCycle as "monthly" | "yearly",
                nextRenewal: formData.nextRenewal,
                category: formData.category || "Other",
              }
            : sub
        )
      );
    } else {
      const newSub: Subscription = {
        id: Date.now().toString(),
        name: formData.name,
        cost: parseFloat(formData.cost),
        billingCycle: formData.billingCycle as "monthly" | "yearly",
        nextRenewal: formData.nextRenewal,
        category: formData.category || "Other",
      };
      setSubscriptions([...subscriptions, newSub]);
    }

    setShowForm(false);
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this subscription?")) {
      setSubscriptions(subscriptions.filter((sub) => sub.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
            <Wallet size={22} />
            Spendly
          </Link>
          <button
            onClick={openAddForm}
            className="flex items-center gap-2 bg-black text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-gray-800 transition"
          >
            <Plus size={16} />
            Add Subscription
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <DollarSign size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Monthly Spend</p>
                <p className="text-2xl font-bold tracking-tight">${monthlyTotal.toFixed(0)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                <CreditCard size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Yearly Spend</p>
                <p className="text-2xl font-bold tracking-tight">${yearlyTotal.toFixed(0)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Active Tools</p>
                <p className="text-2xl font-bold tracking-tight">{subscriptions.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Renewals */}
        {upcoming.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="text-amber-600" size={18} />
              <h2 className="font-semibold text-amber-900">
                Upcoming Renewals (Next 30 Days)
              </h2>
            </div>
            <div className="space-y-2">
              {upcoming.map((sub) => (
                <div
                  key={sub.id}
                  className="flex items-center justify-between bg-white rounded-xl px-4 py-3"
                >
                  <div>
                    <div className="font-medium text-sm">{sub.name}</div>
                    <div className="text-xs text-gray-500">{sub.nextRenewal}</div>
                  </div>
                  <div className="font-semibold text-amber-700 text-sm">${sub.cost}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Subscriptions List */}
        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b flex items-center justify-between">
            <h2 className="font-semibold text-lg">Your Subscriptions</h2>
            <span className="text-sm text-gray-500">{subscriptions.length} tools</span>
          </div>

          {subscriptions.length === 0 ? (
            <div className="p-16 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="text-gray-400" size={28} />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">No subscriptions yet</h3>
              <p className="text-sm text-gray-500 mb-6">
                Start tracking your SaaS tools to see where your money is going.
              </p>
              <button
                onClick={openAddForm}
                className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-gray-800 transition"
              >
                <Plus size={16} />
                Add your first subscription
              </button>
            </div>
          ) : (
            <div className="divide-y">
              {subscriptions.map((sub) => (
                <div
                  key={sub.id}
                  className="px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <div className="min-w-0">
                    <div className="font-medium truncate">{sub.name}</div>
                    <div className="text-sm text-gray-500">
                      {sub.category} · Renews {sub.nextRenewal}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 ml-4">
                    <div className="text-right">
                      <div className="font-semibold">${sub.cost}</div>
                      <div className="text-xs text-gray-500">/{sub.billingCycle}</div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => openEditForm(sub)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        title="Edit"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(sub.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl">
            <h3 className="text-lg font-semibold mb-5">
              {editingId ? "Edit Subscription" : "Add Subscription"}
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Notion, ChatGPT, Vercel"
                  className="mt-1.5 w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Cost ($)</label>
                <input
                  type="number"
                  value={formData.cost}
                  onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
                  placeholder="10"
                  className="mt-1.5 w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Billing Cycle</label>
                <select
                  value={formData.billingCycle}
                  onChange={(e) => setFormData({ ...formData, billingCycle: e.target.value })}
                  className="mt-1.5 w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
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
                  className="mt-1.5 w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="e.g. Productivity, AI, Design"
                  className="mt-1.5 w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                }}
                className="flex-1 border border-gray-200 rounded-xl py-2.5 text-sm font-medium hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 bg-black text-white rounded-xl py-2.5 text-sm font-medium hover:bg-gray-800 transition"
              >
                {editingId ? "Update" : "Add Subscription"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}