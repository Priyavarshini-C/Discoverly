"use client";

import { useState } from "react";

export default function ComparePage() {
  const [products] = useState([
    {
      source: "Amazon",
      price: 1999,
      rating: 4.5,
    },
    {
      source: "Flipkart",
      price: 1899,
      rating: 4.6,
    },
    {
      source: "Meesho",
      price: 1799,
      rating: 4.4,
    },
    {
      source: "Local Business",
      price: 1750,
      rating: 4.9,
    },
  ]);

  const bestDeal = products.reduce((prev, curr) =>
    curr.price < prev.price ? curr : prev
  );

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Product Comparison
        </h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-4 text-left">Platform</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Rating</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-4">{product.source}</td>
                  <td className="p-4">₹{product.price}</td>
                  <td className="p-4">
                    ⭐ {product.rating}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-green-100 border border-green-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-green-700">
            🏆 Best Deal
          </h2>

          <p className="mt-2">
            {bestDeal.source} - ₹{bestDeal.price}
          </p>

          <p>
            Rating: ⭐ {bestDeal.rating}
          </p>
        </div>
      </div>
    </div>
  );
}