// components/CompareProductsSection.tsx

export default function CompareProductsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-10 shadow-2xl">
        <h2 className="text-4xl font-bold mb-4">
          Compare Products Instantly
        </h2>

        <p className="text-lg text-indigo-100 mb-8">
          Find the best value by comparing products side by side.
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold">
              Wireless Earbuds
            </h3>
            <p className="text-indigo-100 mt-2">
              ₹1,999
            </p>
          </div>

          <div className="text-center">
            <span className="text-4xl font-bold">
              VS
            </span>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold">
              Leather Wallet
            </h3>
            <p className="text-indigo-100 mt-2">
              ₹799
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-xl hover:bg-indigo-50 transition">
            Compare Now
          </button>
        </div>
      </div>
    </section>
  );
}