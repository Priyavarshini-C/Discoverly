export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">
            Terms & Conditions
          </h1>

          <div className="space-y-4 text-gray-700 leading-7">
            <p>
              Welcome to Discoverly. By using this platform, you agree
              to comply with our terms and conditions.
            </p>

            <p>
              Users can compare book prices, manage wishlists, and
              track orders through the platform.
            </p>

            <p>
              Discoverly is not responsible for pricing changes made by
              third-party sellers.
            </p>

            <p>
              Users are responsible for maintaining the security of
              their accounts and information.
            </p>

            <p>
              Continued use of the platform indicates acceptance of
              these terms.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}