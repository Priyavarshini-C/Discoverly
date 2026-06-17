export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      user: "Priya",
      rating: 5,
      comment: "Excellent book with practical advice.",
    },
    {
      id: 2,
      user: "Yogi",
      rating: 4,
      comment: "Very useful and easy to understand.",
    },
    {
      id: 3,
      user: "Alex",
      rating: 5,
      comment: "One of the best self-improvement books.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          Book Reviews
        </h1>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-black">
                {review.user}
              </h2>

              <p className="text-yellow-500 mt-2">
                {"⭐".repeat(review.rating)}
              </p>

              <p className="text-gray-700 mt-3">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}