export default function FAQPage() {
  const faqs = [
    {
      question: "How do I compare book prices?",
      answer: "Open a book and click Compare Prices.",
    },
    {
      question: "How do I add books to Wishlist?",
      answer: "Click the Add to Wishlist button on any book page.",
    },
    {
      question: "Can I track my orders?",
      answer: "Yes, visit the Orders page to see order status.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-black">
                {faq.question}
              </h2>

              <p className="text-gray-700 mt-3">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}