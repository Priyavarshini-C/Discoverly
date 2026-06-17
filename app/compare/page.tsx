export default function ComparePage() {
  const sellers = [
    {
      name: "ABC Book Store",
      price: 499,
    },
    {
      name: "Readers Hub",
      price: 459,
    },
    {
      name: "Knowledge Mart",
      price: 479,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          Compare Prices
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-black">
            Atomic Habits
          </h2>

          <p className="text-gray-600 mt-2">
            Compare prices from different sellers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {sellers.map((seller) => (
            <div
              key={seller.name}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-black">
                {seller.name}
              </h3>

              <p className="text-green-700 text-2xl font-bold mt-4">
                ₹{seller.price}
              </p>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}