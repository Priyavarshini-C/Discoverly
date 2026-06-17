export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-8">
            Contact Us
          </h1>

          <div className="space-y-6">
            <div>
              <label className="block font-semibold text-black mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="block font-semibold text-black mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="block font-semibold text-black mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Enter your message"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}