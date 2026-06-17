import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BookCard from "@/components/BookCard";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-6xl font-bold text-black">
          Search Once.
          <br />
          Discover Every Option.
        </h2>

        <p className="mt-6 text-xl text-gray-600">
          Compare products from multiple sellers and discover the best deals.
        </p>

        <SearchBar />
      </section>

      {/* Quick Access Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Quick Access
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <Link
            href="/dashboard"
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold">Dashboard</h3>
          </Link>

          <Link
            href="/search"
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold">Search</h3>
          </Link>

          <Link
            href="/wishlist"
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold">Wishlist</h3>
          </Link>

          <Link
            href="/profile"
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold">Profile</h3>
          </Link>
        </div>
      </section>

      {/* Featured Books */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Books
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <BookCard title="Atomic Habits" price={499} />
          <BookCard title="Rich Dad Poor Dad" price={399} />
          <BookCard title="Think and Grow Rich" price={299} />
        </div>
      </section>

      <Footer />
    </main>
  );
}