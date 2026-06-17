import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-black">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Discoverly
        </h1>

        <div className="flex gap-6">
          <Link
            href="/dashboard"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Dashboard
          </Link>

          <Link
            href="/search"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Search
          </Link>

          <Link
            href="/wishlist"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Wishlist
          </Link>

          <Link
            href="/profile"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Profile
          </Link>

          <Link
            href="/login"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-6xl font-bold text-black">
          Search Once.
          <br />
          Discover Every Option.
        </h2>

        <p className="mt-6 text-xl text-gray-600">
          Compare products from multiple sellers and discover the best deals.
        </p>

        <div className="mt-10 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-xl p-4 border border-gray-300 rounded-l-xl bg-white text-black"
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-r-xl">
            Search
          </button>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Quick Access
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <Link
            href="/dashboard"
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold">Dashboard</h3>
          </Link>

          <Link
            href="/search"
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold">Search</h3>
          </Link>

          <Link
            href="/wishlist"
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold">Wishlist</h3>
          </Link>

          <Link
            href="/profile"
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold">Profile</h3>
          </Link>
        </div>
      </section>

      {/* Featured Books */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Books
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold">Atomic Habits</h3>
            <p className="text-green-700 font-semibold mt-2">₹499</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold">Rich Dad Poor Dad</h3>
            <p className="text-green-700 font-semibold mt-2">₹399</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold">Think and Grow Rich</h3>
            <p className="text-green-700 font-semibold mt-2">₹299</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-4 text-center text-gray-600">
        © 2026 Discoverly
      </footer>
    </main>
  );
}