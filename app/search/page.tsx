"use client";

import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const searchProducts = async () => {
    const res = await fetch(
      `http://127.0.0.1:8000/search?q=${query}`
    );

    const data = await res.json();
    setResults(data);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Search Products
        </h1>

        <div className="flex gap-4 mb-8">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-1 border p-3 rounded-lg"
          />

          <button
            onClick={searchProducts}
            className="bg-blue-600 text-white px-6 rounded-lg"
          >
            Search
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {results.map((product: any) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover rounded-lg"
              />

              <h2 className="font-bold text-xl mt-3">
                {product.name}
              </h2>

              <p className="text-gray-600">
                {product.category}
              </p>

              <p className="font-bold text-blue-600 mt-2">
                ₹{product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}