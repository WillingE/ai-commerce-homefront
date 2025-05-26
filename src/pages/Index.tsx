import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import SocialProofSection from "@/components/SocialProofSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Homywork - AI-Powered Cross-Border E-commerce Platform"
        description="Homywork helps e-commerce businesses scale globally with AI-powered tools for product optimization, listing management, and market intelligence."
        canonical="https://homywork.com/"
      />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <SocialProofSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
