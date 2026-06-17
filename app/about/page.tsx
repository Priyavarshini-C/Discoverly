export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">
            About Discoverly
          </h1>

          <p className="text-gray-700 text-lg leading-8">
            Discoverly is a book comparison platform that helps users
            discover books, compare prices from multiple sellers,
            manage wishlists, track orders, and find the best deals.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-slate-100 p-6 rounded-xl">
              <h2 className="font-bold text-xl">Compare</h2>
              <p className="mt-2 text-gray-600">
                Compare prices from multiple sellers.
              </p>
            </div>

            <div className="bg-slate-100 p-6 rounded-xl">
              <h2 className="font-bold text-xl">Save</h2>
              <p className="mt-2 text-gray-600">
                Store books in your wishlist.
              </p>
            </div>

            <div className="bg-slate-100 p-6 rounded-xl">
              <h2 className="font-bold text-xl">Track</h2>
              <p className="mt-2 text-gray-600">
                Monitor orders and notifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}