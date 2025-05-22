
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UseCasesHeader from "@/components/use-cases/UseCasesHeader";
import CaseStudy from "@/components/use-cases/CaseStudy";

const HighlightedMetric = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold text-apple-blue">
    {children}
  </span>
);

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
            industry="Furniture"
            primaryImage="/lovable-uploads/328328eb-cdb0-4de6-b738-70ea44db5315.png"
            secondaryImage="/lovable-uploads/1bd9f347-beb2-4d11-8231-753e9de4054c.png"
            challenge="Manual listing across 5 international platforms consumed over 20 hours weekly with inconsistent results."
            solution="Our AI Studio automated image optimization and multi-language descriptions, while Listing Manager enabled one-click publishing across all marketplaces."
            detailedResults={
              <p>
                Within the first month, Artisan Gems saw a <HighlightedMetric>150%</HighlightedMetric> increase in global sales, <HighlightedMetric>50%</HighlightedMetric> reduction in listing creation time, and <HighlightedMetric>32%</HighlightedMetric> improvement in search visibility.
              </p>
            }
            quote="This AI platform transformed our international sales strategy. We're reaching more customers than ever before!"
            quoteAuthor="Jane Doe, Founder of Artisan Gems"
            learnMoreLink="#"
            learnMoreText="See how Homywork helped"
          />
          
          {/* Additional case studies */}
          <CaseStudy 
            headline="Custom Furniture Orders Up 85%"
            clientName="Nordic Designs"
            industry="Furniture"
            primaryImage="/lovable-uploads/7331360f-1c63-4a01-8a26-ca608cba4d57.png"
            secondaryImage="/lovable-uploads/7258290f-386d-4475-b95e-27fc6b88308f.png"
            challenge="Struggling to manage custom furniture orders with complex specifications and long lead times, resulting in customer dissatisfaction."
            solution="Our AI platform streamlined order processing with automated measurements interpretation and material recommendations, while providing real-time production tracking."
            detailedResults={
              <p>
                After implementation, Nordic Designs experienced an <HighlightedMetric>85%</HighlightedMetric> increase in custom orders, <HighlightedMetric>40%</HighlightedMetric> reduction in production errors, and <HighlightedMetric>28%</HighlightedMetric> faster delivery times.
              </p>
            }
            quote="The AI platform has revolutionized how we handle custom furniture orders. Our customers love the transparency and accuracy."
            quoteAuthor="Erik Johansson, CEO of Nordic Designs"
            learnMoreLink="#"
            learnMoreText="See how Homywork helped"
          />
          
          <CaseStudy 
            headline="Inventory Costs Reduced by 34%"
            clientName="Urban Living Furniture"
            industry="Furniture"
            primaryImage="/lovable-uploads/6281928c-0dbc-4934-a537-998d49e479ff.png"
            secondaryImage="/lovable-uploads/f25fc616-1897-4001-a256-e1d769333a09.png"
            challenge="Inefficient inventory management led to overstocking of slow-moving items and stockouts of popular products, causing financial strain."
            solution="Our AI-powered inventory forecasting system analyzed sales patterns, seasonal trends, and market data to optimize stock levels across all product categories."
            detailedResults={
              <p>
                Within just three months, Urban Living achieved a <HighlightedMetric>34%</HighlightedMetric> reduction in inventory costs, <HighlightedMetric>65%</HighlightedMetric> fewer stockouts, and <HighlightedMetric>22%</HighlightedMetric> improvement in cash flow.
              </p>
            }
            quote="The precision of the AI forecasting has transformed our business model. We're now more agile and financially healthier than ever before."
            quoteAuthor="Maria Chen, Operations Director at Urban Living"
            learnMoreLink="#"
            learnMoreText="See how Homywork helped"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UseCasesPage;
