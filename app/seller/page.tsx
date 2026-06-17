export default function SellerPage() {
  const products = [
    {
      id: 1,
      name: "Atomic Habits",
      price: 499,
    },
    {
      id: 2,
      name: "Rich Dad Poor Dad",
      price: 399,
    },
    {
      id: 3,
      name: "Think and Grow Rich",
      price: 299,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-blue-600">
            ABC Book Store
          </h1>

          <p className="text-gray-600 mt-2">
            Chennai, Tamil Nadu
          </p>

          <p className="mt-4 text-black">
            We provide affordable books and educational resources for students and readers.
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-10 mb-6 text-black">
          Available Books
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-black">
                {product.name}
              </h3>

              <p className="text-green-700 font-semibold mt-2">
                ₹{product.price}
              </p>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}