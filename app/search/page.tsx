"use client";

import { useState } from "react";

export default function SearchPage() {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Atomic Habits",
      price: 499,
      seller: "ABC Book Store",
    },
    {
      id: 2,
      name: "Rich Dad Poor Dad",
      price: 399,
      seller: "Readers Hub",
    },
    {
      id: 3,
      name: "Think and Grow Rich",
      price: 299,
      seller: "Knowledge Mart",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-600 mb-3">
          Discover Books
        </h1>

        <p className="text-gray-700 mb-8">
          Search and compare books from different sellers.
        </p>

        <input
          type="text"
          placeholder="Search for books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 bg-white text-black shadow-sm"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg p-6 border"
            >
              <h2 className="text-2xl font-bold text-black">
                {product.name}
              </h2>

              <p className="text-green-700 font-semibold mt-2 text-lg">
                ₹{product.price}
              </p>

              <p className="text-gray-600 mt-2">
                Seller: {product.seller}
              </p>

              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                Compare Prices
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}