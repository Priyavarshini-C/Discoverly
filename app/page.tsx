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
            href="/login"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            href="/wishlist"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Wishlist
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-5xl font-bold text-black">
          Search Once.
          <br />
          Discover Every Option.
        </h2>

        <p className="mt-4 text-lg text-gray-700">
          Compare products across multiple sellers and discover the best deal.
        </p>

        <div className="mt-8 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-xl border border-gray-300 bg-white text-black p-4 rounded-l-lg"
          />

          <button className="bg-blue-600 text-white px-6 rounded-r-lg">
            Search
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-10 pb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white border rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-black">
              Atomic Habits
            </h3>

            <p className="text-green-700 font-semibold mt-2">
              ₹499
            </p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Compare
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white border rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-black">
              Rich Dad Poor Dad
            </h3>

            <p className="text-green-700 font-semibold mt-2">
              ₹399
            </p>

            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
              Compare
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white border rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-black">
              Think and Grow Rich
            </h3>

            <p className="text-green-700 font-semibold mt-2">
              ₹299
            </p>

            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
              Compare
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-4 text-gray-600 border-t">
        © 2026 Discoverly
      </footer>
    </main>
  );
}