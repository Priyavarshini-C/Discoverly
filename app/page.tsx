import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BookCard from "@/components/BookCard";
import SearchBar from "@/components/SearchBar";
import SectionTitle from "@/components/SectionTitle"
import QuickAccessCard from "@/components/QuickAccessCard";
import FeaturedBooks from "@/components/FeaturedBooks";
import HeroSection from "@/components/HeroSection";
import QuickAccessSection from "@/components/QuickAccessSection";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-black">
      <Navbar />

      {/* Hero Section */}
     <HeroSection />

      {/* Quick Access Cards */}
      <QuickAccessSection />

      {/* Featured Books */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <SectionTitle title="Featured Books" />

        <FeaturedBooks />
      </section>

      <Footer />
    </main>
  );
}