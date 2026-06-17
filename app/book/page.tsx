export default function BookPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-5xl font-bold text-blue-600">
            Atomic Habits
          </h1>

          <p className="text-gray-600 mt-2 text-lg">
            By James Clear
          </p>

          <p className="text-3xl font-bold text-green-700 mt-6">
            ₹499
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-3">
              Description
            </h2>

            <p className="text-gray-700 leading-7">
              Atomic Habits provides practical strategies for
              building good habits, breaking bad ones, and making
              small improvements that lead to remarkable results.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
              Add to Wishlist
            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-xl">
              Compare Prices
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}