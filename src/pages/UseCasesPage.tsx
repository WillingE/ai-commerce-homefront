
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UseCasesHeader from "@/components/use-cases/UseCasesHeader";
import CaseStudy from "@/components/use-cases/CaseStudy";

const UseCasesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <UseCasesHeader />
        <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24">
          <CaseStudy 
            title="Case Study 1: Boosting Sales for Artisan Gems"
            image="/lovable-uploads/4be604be-1cfc-435a-8509-cdc400c67895.png"
            challenge="Artisan Gems, a seller of handmade jewelry, struggled with low product visibility and time-consuming listing creation across multiple international marketplaces."
            solution="Leveraging Studio's AI-powered image enhancement and multi-language description generator, alongside Listing Manager for streamlined publishing, Artisan Gems revitalized their product presentation."
            results={[
              "150% increase in global sales",
              "50% reduction in listing creation time",
              "32% improvement in search visibility"
            ]}
            quote="This AI platform transformed our international sales strategy. We're reaching more customers than ever before!"
            quoteAuthor="Jane Doe, Founder of Artisan Gems"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UseCasesPage;
