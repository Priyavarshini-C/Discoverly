"use client";

import { useState } from "react";

export default function AddProductPage() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    seller: "",
    description: "",
    image: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("http://127.0.0.1:8000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...product,
        rating: 0,
        stock: true,
      }),
    });

    alert("Product Added Successfully");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-bold mb-6">Add Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Product Name"
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setProduct({ ...product, name: e.target.value })
            }
          />

          <input
            placeholder="Price"
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setProduct({ ...product, price: e.target.value })
            }
          />

          <input
            placeholder="Category"
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
          />

          <input
            placeholder="Seller Name"
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setProduct({ ...product, seller: e.target.value })
            }
          />

          <input
            placeholder="Image URL"
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setProduct({ ...product, image: e.target.value })
            }
          />

          <textarea
            placeholder="Description"
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}