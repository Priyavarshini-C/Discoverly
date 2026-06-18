export default function ComparePage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-3">
          Compare Products
        </h1>

        <p className="text-gray-500 mb-10">
          Compare products side by side and make smarter decisions.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Wireless Earbuds
            </h2>

            <p>💰 ₹1999</p>
            <p>⭐ 4.7</p>
            <p>🏪 Tech World</p>
            <p>📂 Electronics</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Leather Wallet
            </h2>

            <p>💰 ₹799</p>
            <p>⭐ 4.6</p>
            <p>🏪 Urban Accessories</p>
            <p>📂 Fashion</p>
          </div>
        </div>
      </div>
    </main>
  );
}