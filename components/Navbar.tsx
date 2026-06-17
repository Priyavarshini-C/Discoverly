import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-blue-600">
        Discoverly
      </h1>

      <div className="flex gap-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>

        <Link href="/dashboard" className="hover:text-blue-600">
          Dashboard
        </Link>

        <Link href="/search" className="hover:text-blue-600">
          Search
        </Link>

        <Link href="/wishlist" className="hover:text-blue-600">
          Wishlist
        </Link>

        <Link href="/profile" className="hover:text-blue-600">
          Profile
        </Link>
      </div>
    </nav>
  );
}