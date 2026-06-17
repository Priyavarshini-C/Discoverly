import SectionTitle from "./SectionTitle";
import QuickAccessCard from "./QuickAccessCard";

export default function QuickAccessSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <SectionTitle title="Quick Access" />

      <div className="grid md:grid-cols-4 gap-6">
        <QuickAccessCard title="Dashboard" href="/dashboard" />
        <QuickAccessCard title="Search" href="/search" />
        <QuickAccessCard title="Wishlist" href="/wishlist" />
        <QuickAccessCard title="Profile" href="/profile" />
      </div>
    </section>
  );
}