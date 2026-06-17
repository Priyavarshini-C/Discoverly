export default function OrdersPage() {
  const orders = [
    {
      id: 1,
      book: "Atomic Habits",
      price: 499,
      status: "Delivered",
    },
    {
      id: 2,
      book: "Rich Dad Poor Dad",
      price: 399,
      status: "Shipped",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          My Orders
        </h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-black">
                {order.book}
              </h2>

              <p className="text-green-700 font-semibold mt-2">
                ₹{order.price}
              </p>

              <p className="mt-2 text-gray-600">
                Status: {order.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}