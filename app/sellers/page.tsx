const sellers = [
  {
    id: 1,
    name: "Sweet Treats Home Bakery",
    category: "Home Baker",
    location: "Coimbatore",
  },
  {
    id: 2,
    name: "Glow Crafts",
    category: "Handmade",
    location: "Madurai",
  },
  {
    id: 3,
    name: "Style Boutique",
    category: "Fashion",
    location: "Salem",
  },
  {
    id: 4,
    name: "Tech World",
    category: "Electronics",
    location: "Chennai",
  },
];

export default function SellersPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-3">
          Local Businesses
        </h1>

        <p className="text-gray-500 mb-10">
          Discover and support local entrepreneurs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sellers.map((seller) => (
            <div
              key={seller.id}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div className="text-4xl mb-4">🏪</div>

              <h2 className="font-bold text-xl">
                {seller.name}
              </h2>

              <p className="text-gray-500">
                {seller.category}
              </p>

              <p className="text-sm text-gray-400 mt-2">
                📍 {seller.location}
              </p>

              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-xl">
                View Store
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}