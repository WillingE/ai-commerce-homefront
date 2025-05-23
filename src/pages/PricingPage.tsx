
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHeader from "@/components/pricing/PricingHeader";
import PricingPlans from "@/components/pricing/PricingPlans";
import FeatureComparison from "@/components/pricing/FeatureComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import ValueProposition from "@/components/pricing/ValueProposition";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Pricing Header */}
      <PricingHeader />
      
      {/* Pricing Plans */}
      <PricingPlans />
      
      {/* Feature Comparison Table */}
      <FeatureComparison />
      
      {/* Pricing FAQ */}
      <PricingFAQ />
      
      {/* Value Proposition */}
      <ValueProposition />
      
      <Footer />
    </div>
  );
};

export default PricingPage;
