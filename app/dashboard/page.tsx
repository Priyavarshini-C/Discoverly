import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6">
          <Link
            href="/search"
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <h2 className="text-xl font-bold text-black">Search</h2>
          </Link>

          <Link
            href="/wishlist"
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <h2 className="text-xl font-bold text-black">Wishlist</h2>
          </Link>

          <Link
            href="/seller"
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <h2 className="text-xl font-bold text-black">Seller</h2>
          </Link>

          <Link
            href="/profile"
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <h2 className="text-xl font-bold text-black">Profile</h2>
          </Link>
        </div>
      </div>
    </main>
  );
}