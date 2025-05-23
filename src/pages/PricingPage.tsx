
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHeader from "@/components/pricing/PricingHeader";
import PricingPlans from "@/components/pricing/PricingPlans";
import FeatureComparisonTable from "@/components/pricing/FeatureComparisonTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import ValueProposition from "@/components/pricing/ValueProposition";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
