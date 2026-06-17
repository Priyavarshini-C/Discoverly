export default function HelpPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          Help & Support
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-black">
              Frequently Asked Questions
            </h2>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              How do I compare prices?
            </h3>
            <p className="text-gray-600">
              Open a book and click "Compare Prices".
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              How do I save books?
            </h3>
            <p className="text-gray-600">
              Use the Wishlist feature to save books.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Need more help?
            </h3>
            <p className="text-gray-600">
              Contact support@discoverly.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}