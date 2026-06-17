import BookCard from "./BookCard";

export default function FeaturedBooks() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <BookCard title="Atomic Habits" price={499} />
      <BookCard title="Rich Dad Poor Dad" price={399} />
      <BookCard title="Think and Grow Rich" price={299} />
    </div>
  );
}