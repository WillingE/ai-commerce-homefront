
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import StudioFeatures from "@/components/StudioFeatures";
import ListingManager from "@/components/ListingManager";
import AIKnowledge from "@/components/AIKnowledge";
import ProductCta from "@/components/ProductCta";

const ProductPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ProductHero />
        <StudioFeatures />
        <ListingManager />
        <AIKnowledge />
        <ProductCta />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
