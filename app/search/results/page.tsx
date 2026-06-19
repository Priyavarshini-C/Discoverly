"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { searchProducts } from "@/lib/api";

export default function SearchResults() {
  const params = useSearchParams();
  const query = params.get("q");

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;

    const fetchProducts = async () => {
      try {
        const data = await searchProducts(query);
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Results for "{query}"
      </h1>

      {loading ? (
        <p className="mt-6">Loading...</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product: any) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow bg-white"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />

              <h2 className="font-bold text-lg mt-3">
                {product.name}
              </h2>

              <p className="text-gray-600">
                {product.source}
              </p>

              <p className="font-semibold">
                ₹{product.price}
              </p>

              <p>
                ⭐ {product.rating}
              </p>

              <a
                href={product.product_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-indigo-600 text-white px-4 py-2 rounded"
              >
                View Product
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}