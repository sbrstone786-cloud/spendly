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
  Download,
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

  useEffect(() => {
    const saved = localStorage.getItem("spendly-subscriptions");
    if (saved) setSubscriptions(JSON.parse(saved));
  }, []);

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

  const handleExport = () => {
    if (subscriptions.length === 0) {
      alert("No subscriptions to export");
      return;
    }

    const headers = ["Name", "Cost", "Billing Cycle", "Next Renewal", "Category"];
    const rows = subscriptions.map((sub) => [
      sub.name,
      sub.cost,
      sub.billingCycle,
      sub.nextRenewal,
      sub.category,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((row) => row.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "spendly-subscriptions.csv";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl text-gray-900">
            <Wallet size={20} />
            Spendly
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/pricing"
              className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Pricing
            </Link>
            <button
              onClick={handleExport}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 border px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl hover:bg-gray-50 transition"
            >
              <Download size={15} />
              <span className="hidden sm:inline">Export</span>
            </button>
            <button
              onClick={openAddForm}
              className="flex items-center gap-1.5 bg-black text-white text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl hover:bg-gray-800 transition"
            >
              <Plus size={15} />
              <span className="hidden sm:inline">Add</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl border shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-blue-50 text-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                <DollarSign size={18} />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Monthly</p>
                <p className="text-lg sm:text-2xl font-bold tracking-tight">${monthlyTotal.toFixed(0)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl border shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-green-50 text-green-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                <CreditCard size={18} />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Yearly</p>
                <p className="text-lg sm:text-2xl font-bold tracking-tight">${yearlyTotal.toFixed(0)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl border shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-purple-50 text-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                <Calendar size={18} />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Tools</p>
                <p className="text-lg sm:text-2xl font-bold tracking-tight">{subscriptions.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Renewals */}
        {upcoming.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <AlertCircle className="text-amber-600" size={16} />
              <h2 className="font-semibold text-sm sm:text-base text-amber-900">
                Upcoming Renewals
              </h2>
            </div>
            <div className="space-y-2">
              {upcoming.map((sub) => (
                <div
                  key={sub.id}
                  className="flex items-center justify-between bg-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3"
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
        <div className="bg-white rounded-xl sm:rounded-2xl border shadow-sm overflow-hidden">
          <div className="px-4 sm:px-5 py-3 sm:py-4 border-b flex items-center justify-between">
            <h2 className="font-semibold text-base sm:text-lg">Your Subscriptions</h2>
            <span className="text-xs sm:text-sm text-gray-500">{subscriptions.length} tools</span>
          </div>

          {subscriptions.length === 0 ? (
            <div className="p-10 sm:p-16 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="text-gray-400" size={24} />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">No subscriptions yet</h3>
              <p className="text-sm text-gray-500 mb-6">
                Start tracking your SaaS tools.
              </p>
              <button
                onClick={openAddForm}
                className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-gray-800 transition"
              >
                <Plus size={16} />
                Add your first
              </button>
            </div>
          ) : (
            <div className="divide-y">
              {subscriptions.map((sub) => (
                <div
                  key={sub.id}
                  className="px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-sm sm:text-base truncate">{sub.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500 truncate">
                      {sub.category} · {sub.nextRenewal}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-4 ml-3">
                    <div className="text-right">
                      <div className="font-semibold text-sm sm:text-base">${sub.cost}</div>
                      <div className="text-xs text-gray-500">/{sub.billingCycle === "monthly" ? "mo" : "yr"}</div>
                    </div>

                    <div className="flex items-center">
                      <button
                        onClick={() => openEditForm(sub)}
                        className="p-1.5 sm:p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      >
                        <Pencil size={15} />
                      </button>
                      <button
                        onClick={() => handleDelete(sub.id)}
                        className="p-1.5 sm:p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        <Trash2 size={15} />
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
        <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-md p-5 sm:p-6 shadow-xl">
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
                  placeholder="e.g. Notion, ChatGPT"
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
                  placeholder="e.g. Productivity, AI"
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
                {editingId ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}