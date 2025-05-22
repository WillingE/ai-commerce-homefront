
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
            headline="+150% Sales Growth in 30 Days"
            clientName="Artisan Gems"
            industry="Handcrafted Jewelry"
            primaryImage="/lovable-uploads/328328eb-cdb0-4de6-b738-70ea44db5315.png"
            secondaryImage="/lovable-uploads/1bd9f347-beb2-4d11-8231-753e9de4054c.png"
            challenge="Manual listing across 5 international platforms consumed over 20 hours weekly with inconsistent results."
            solution="Our AI Studio automated image optimization and multi-language descriptions, while Listing Manager enabled one-click publishing across all marketplaces."
            detailedResults="Within the first month, Artisan Gems saw a 150% increase in global sales, 50% reduction in listing creation time, and 32% improvement in search visibility."
            quote="This AI platform transformed our international sales strategy. We're reaching more customers than ever before!"
            quoteAuthor="Jane Doe, Founder of Artisan Gems"
            learnMoreLink="#"
            learnMoreText="See how Studio helped"
          />
          
          {/* Additional case studies can be added here using the same component */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UseCasesPage;
