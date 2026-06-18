import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-indigo-600">
          Discoverly
        </h1>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/sellers">Sellers</Link>
          <Link href="/compare">Compare</Link>
        </div>

        <button className="bg-indigo-600 text-white px-5 py-2 rounded-xl">
          Get Started
        </button>
      </div>
    </nav>
  );