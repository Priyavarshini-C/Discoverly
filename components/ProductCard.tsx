import Link from "next/link";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  seller: string;
  rating: number;
};

export default function ProductCard({
  id,
  title,
  price,
  image,
  seller,
  rating,
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>

          <p className="text-gray-500 text-sm">{seller}</p>

          <p className="text-yellow-500">⭐ {rating}</p>

          <p className="text-xl font-bold mt-2">₹{price}</p>
        </div>
      </div>
    </Link>
  );
}