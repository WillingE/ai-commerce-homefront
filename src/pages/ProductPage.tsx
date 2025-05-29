import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import StudioFeatures from "@/components/StudioFeatures";
import ListingManager from "@/components/ListingManager";
import AIKnowledge from "@/components/AIKnowledge";
import ProductCta from "@/components/ProductCta";
import SEO from "@/components/SEO";
// import ImageCompareDemo from "@/components/ImageCompareDemo";

const ProductPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Homywork Product - AI-Powered E-commerce Tools"
        description="Discover Homywork's powerful AI tools for e-commerce optimization, listing management, and market intelligence."
        canonical="https://homywork.com/product"
        ogTitle="Homywork Product Suite - Optimize Your E-commerce Business"
        twitterTitle="Homywork Product - E-commerce AI Tools"
      />
      <Navbar />
      <main className="flex-grow">
        <ProductHero />
        <StudioFeatures />
        {/* <ImageCompareDemo /> */}
        <ListingManager />
        <AIKnowledge />
        <ProductCta />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
