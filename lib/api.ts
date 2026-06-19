const API_URL = "http://localhost:8000";

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function getProduct(id: string) {
  const res = await fetch(`${API_URL}/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export async function searchProducts(query: string) {
  const res = await fetch(
    `${API_URL}/search?query=${encodeURIComponent(query)}`
  );

  if (!res.ok) {
    throw new Error("Failed to search products");
  }

  return res.json();
}