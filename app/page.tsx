import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";
import QuickAccessSection from "@/components/QuickAccessSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CompareProductsSection from "@/components/CompareProductsSection";
// import LocalBusinessesSection from "@/components/LocalBusinessesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-black">
      <Navbar />

      <HeroSection />

      <SearchSection />

      <QuickAccessSection />

      <CategoriesSection />

      <FeaturedProducts />

      {/* Enable after backend API is working */}
      {/* <LocalBusinessesSection /> */}

      <CompareProductsSection />

      <Footer />
    </main>
  );
}