import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navbar */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-gray-900">Spendly</div>
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard"
              className="bg-black text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
          Track every SaaS.
          <br />
          <span className="text-blue-600">Stop wasting money.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Simple subscription tracker & cost calculator for freelancers, startups and small teams.
          Know exactly where your money is going.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="bg-black text-white font-medium px-8 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Start Tracking Free
          </Link>
          <a
            href="#features"
            className="border border-gray-300 text-gray-700 font-medium px-8 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            See Features
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl mb-4">
              📊
            </div>
            <h3 className="font-semibold text-lg">Cost Overview</h3>
            <p className="mt-2 text-gray-600 text-sm">
              See your total monthly and yearly SaaS spend in one clean dashboard.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-xl mb-4">
              🔔
            </div>
            <h3 className="font-semibold text-lg">Renewal Alerts</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Never get surprised by renewals. Get reminded before charges hit.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-xl mb-4">
              💰
            </div>
            <h3 className="font-semibold text-lg">Savings Finder</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Identify unused tools and calculate how much you can save.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-gray-500">
        © 2026 Spendly. Built for people who hate wasting money on SaaS.
      </footer>
    </div>
  );
}
