export default function SearchSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border">
        <h2 className="text-3xl font-bold text-center mb-3">
          Discover Products Faster
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Search products, compare prices, and support local businesses.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 border rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl hover:bg-indigo-700 transition">
            Search
          </button>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold mb-4 text-gray-700">
            Trending Categories
          </h3>

          <div className="flex flex-wrap gap-3">
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">
              Electronics
            </span>

            <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full">
              Fashion
            </span>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
              Food
            </span>

            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
              Home Decor
            </span>

            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
              Handmade
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}