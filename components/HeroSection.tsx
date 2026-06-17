import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <section className="text-center py-20 px-6">
      <h2 className="text-6xl font-bold text-black">
        Search Once.
        <br />
        Discover Every Option.
      </h2>

      <p className="mt-6 text-xl text-gray-600">
        Compare products from multiple sellers and discover the best deals.
      </p>

      <SearchBar />
    </section>
  );
}