export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          My Profile
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center text-3xl font-bold text-blue-700">
            P
          </div>

          <h2 className="text-2xl font-bold mt-4 text-black">
            Priyavarshini
          </h2>

          <p className="text-gray-600">
            Buyer
          </p>

          <div className="mt-6 space-y-3">
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="font-semibold text-black">
                Wishlist Items
              </p>
              <p className="text-gray-600">2 Books</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="font-semibold text-black">
                Compared Products
              </p>
              <p className="text-gray-600">3 Products</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}