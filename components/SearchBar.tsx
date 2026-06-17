export default function SearchBar() {
  return (
    <div className="mt-10 flex justify-center">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full max-w-xl p-4 border border-gray-300 rounded-l-xl bg-white text-black"
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-r-xl">
        Search
      </button>
    </div>
  );
}
