"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/api";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  seller: string;
  rating: number;
  image: string;
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Backend not connected");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h3 className="text-xl font-bold">
                {product.name}
              </h3>

              <p className="text-gray-500 mt-1">
                {product.category}
              </p>

              <p className="mt-2 text-yellow-500">
                ⭐ {product.rating}
              </p>

              <p className="mt-2 text-lg font-bold text-green-600">
                ₹{product.price}
              </p>

              <p className="mt-2 text-sm text-gray-600">
                Seller: {product.seller}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}