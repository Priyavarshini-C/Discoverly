"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">
          Featured Products
        </h2>
        <p>Loading products...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">
          Featured Products
        </h2>
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
          >
            <div className="bg-white border rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-bold">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  {product.category}
                </p>

                <p className="text-xl font-semibold mt-2">
                  ₹{product.price}
                </p>

                <p className="text-yellow-600 mt-1">
                  ⭐ {product.rating}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  Seller: {product.seller}
                </p>

                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                  View Details
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}