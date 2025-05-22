
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHeader from "@/components/pricing/PricingHeader";
import PricingPlans from "@/components/pricing/PricingPlans";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Pricing Header */}
      <PricingHeader />
      
      {/* Pricing Plans */}
      <PricingPlans />
      
      <Footer />
    </div>
  );
};

export default PricingPage;
