import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessesSection from "@/components/LocalBusinessesSection";
import HeroSection from "@/components/HeroSection";
import QuickAccessSection from "@/components/QuickAccessSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CompareProductsSection from "@/components/CompareProductsSection";
import SearchSection from "@/components/SearchSection";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-black">
      <Navbar />

      <HeroSection />
      <SearchSection />

      <QuickAccessSection />

      <CategoriesSection />

      <FeaturedProducts />

      <LocalBusinessesSection />

      <CompareProductsSection />

      <Footer />
    </main>
  );
}