type BookCardProps = {
  title: string;
  price: number;
};

export default function BookCard({
  title,
  price,
}: BookCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-green-700 font-semibold mt-2">
        ₹{price}
      </p>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
        View Details
      </button>
    </div>
  );
}