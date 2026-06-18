"use client";

import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  seller: string;
  image: string;
}

export default function SellerDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Seller Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">Total Products</h2>
          <p className="text-3xl font-bold">
            {products.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">Orders</h2>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">Revenue</h2>
          <p className="text-3xl font-bold">₹0</p>
        </div>
      </div>

      <a
        href="/seller/add-product"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl mb-8"
      >
        Add Product
      </a>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">
          My Products
        </h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded"
                />

                <h3 className="font-bold mt-3">
                  {product.name}
                </h3>

                <p className="text-gray-600">
                  {product.category}
                </p>

                <p className="text-blue-600 font-bold">
                  ₹{product.price}
                </p>

                <p className="text-sm text-gray-500">
                  Seller: {product.seller}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}