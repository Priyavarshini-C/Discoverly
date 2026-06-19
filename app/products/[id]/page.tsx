"use client";

import { useEffect, useState } from "react";

export default function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:8000/products/${params.id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [params.id]);

  if (!product) return <p className="p-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-h-96 object-cover rounded"
      />

      <h1 className="text-3xl font-bold mt-6">
        {product.name}
      </h1>

      <p className="mt-4">{product.description}</p>

      <p className="mt-4 font-semibold">
        ₹{product.price}
      </p>

      <p>⭐ {product.rating}</p>

      <p>{product.source}</p>

      <a
        href={product.product_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-indigo-600 text-white px-5 py-2 rounded"
      >
        View Product
      </a>
    </div>
  );
}