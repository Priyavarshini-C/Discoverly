import Image from "next/image";

const product = {
  id: 1,
  name: "Wireless Earbuds",
  price: 1999,
  rating: 4.7,
  seller: "Tech World",
  description:
    "Bluetooth 5.3 wireless earbuds with active noise cancellation and premium sound quality.",
  image: "https://picsum.photos/600/400?random=1",
};

const relatedProducts = [
  {
    id: 2,
    name: "Leather Wallet",
    price: 799,
  },
  {
    id: 3,
    name: "Organic Honey",
    price: 350,
  },
  {
    id: 4,
    name: "Cotton Kurti",
    price: 899,
  },
];

export default function ProductDetailsPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                className="rounded-3xl w-full"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-4">
                {product.name}
              </h1>

              <p className="text-3xl font-semibold text-indigo-600 mb-4">
                ₹{product.price}
              </p>

              <p className="mb-2">
                ⭐ {product.rating}
              </p>

              <p className="mb-6">
                🏪 {product.seller}
              </p>

              <p className="text-gray-600 mb-8">
                {product.description}
              </p>

              <div className="flex gap-4">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl">
                  Add to Cart
                </button>

                <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">
            Related Products
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-lg p-6"
              >
                <h3 className="font-bold text-xl mb-2">
                  {item.name}
                </h3>

                <p className="text-indigo-600 font-semibold">
                  ₹{item.price}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}