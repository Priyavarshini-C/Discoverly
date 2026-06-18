// components/CategoriesSection.tsx

import SectionTitle from "./SectionTitle";

const categories = [
  "Electronics",
  "Fashion",
  "Food",
  "Home Decor",
  "Handmade",
  "Local Businesses",
];

export default function CategoriesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <SectionTitle title="Browse Categories" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer text-center"
          >
            <h3 className="text-lg font-semibold">
              {category}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}