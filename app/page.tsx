{/* Navbar */}
<nav className="border-b sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
  <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
    <div className="flex items-center gap-2 font-bold text-xl">
      <Wallet size={22} />
      Spendly
    </div>
    <div className="flex items-center gap-4">
      <Link
        href="/pricing"
        className="text-sm font-medium text-gray-600 hover:text-gray-900"
      >
        Pricing
      </Link>
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