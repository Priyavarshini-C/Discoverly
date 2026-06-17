export default function WishlistPage() {
  const wishlist = [
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
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          My Wishlist
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {wishlist.map((book) => (
            <div
              key={book.id}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-black">
                {book.name}
              </h2>

              <p className="text-green-700 font-semibold mt-2">
                ₹{book.price}
              </p>

              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}