"use client";

import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    window.location.href = `/search/results?q=${query}`;
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Discover Products</h1>

      <div className="flex gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="border p-3 rounded w-full"
        />

        <button
          onClick={handleSearch}
          className="bg-indigo-600 text-white px-6 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
}