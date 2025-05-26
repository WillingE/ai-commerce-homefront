import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHeader from "@/components/pricing/PricingHeader";
import PricingPlans from "@/components/pricing/PricingPlans";
import FeatureComparisonTable from "@/components/pricing/FeatureComparisonTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import ValueProposition from "@/components/pricing/ValueProposition";
import SEO from "@/components/SEO";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Homywork Pricing - Flexible Plans for All Business Sizes"
        description="Choose the perfect Homywork plan for your e-commerce business. Flexible pricing options to scale your cross-border operations."
        canonical="https://homywork.com/pricing"
        keywords="homywork pricing, homywork plans, homywork subscription, e-commerce AI tools pricing"
      />
      <Navbar />
      <main className="flex-grow">
        <PricingHeader />
        <PricingPlans />
        <FeatureComparisonTable />
        <PricingFAQ />
        <ValueProposition />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
