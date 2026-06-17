"use client";

import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function SearchPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

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

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
                Compare Prices
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}