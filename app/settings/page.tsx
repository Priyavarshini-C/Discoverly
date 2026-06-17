export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          Settings
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div>
            <label className="block text-black font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              defaultValue="Priyavarshini"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-black font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              defaultValue="user@example.com"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-black font-semibold mb-2">
              Theme
            </label>
            <select className="w-full border p-3 rounded-lg">
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
            Save Settings
          </button>
        </div>
      </div>
    </main>
  );
}