
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UseCasesHeader from "@/components/use-cases/UseCasesHeader";
import CaseStudy from "@/components/use-cases/CaseStudy";
import SEO from "@/components/SEO";
import AnimatedElement from "@/components/AnimatedElement";

const HighlightedMetric = ({ children }: { children: React.ReactNode }) => (
  <span className="text-1xl font-bold text-blue-500 inline-block">
    {children}
  </span>
);

const UseCasesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Homywork Use Cases - Real Success Stories"
        description="Explore how businesses are using Homywork's AI tools to optimize their e-commerce operations and scale globally."
        canonical="https://homywork.com/use-cases"
        keywords="homywork use cases, homywork success stories, homywork case studies, cross-border e-commerce"
      />
      <Navbar />
      <main className="flex-grow">
        <UseCasesHeader />
        <AnimatedElement animation="fade-up" duration={800}>
          <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24">
            <AnimatedElement animation="fade-up" delay={0} duration={800}>
              <CaseStudy 
                headline="40% Sales Growth - A 30-Year American Furniture Company"
                clientName="Artisan Gems"
                industry="Furniture"
                primaryImage="/lovable-uploads/328328eb-cdb0-4de6-b738-70ea44db5315.png"
                secondaryImage="/lovable-uploads/1bd9f347-beb2-4d11-8231-753e9de4054c.png"
                challenge="This established furniture manufacturer was spending significant resources on manual product photography and creating listings for international markets, with inconsistent quality across platforms."
                solution="Our AI Studio automated product image enhancement and generated multilingual descriptions, while the Listing Manager streamlined publishing across five international marketplaces."
                detailedResults={
                  <p>
                    The company achieved a <HighlightedMetric>40%</HighlightedMetric> increase in cross-border sales, reduced image processing costs by <HighlightedMetric>60%</HighlightedMetric>, and improved listing creation efficiency by <HighlightedMetric>75%</HighlightedMetric>, cutting the time from 4 hours to under 1 hour per product.
                  </p>
                }
                quote="The AI platform transformed our international expansion. We're reaching customers in markets we never thought possible with our small team."
                quoteAuthor="Sarah Johnson, International Sales Director"
                learnMoreLink="#"
                learnMoreText="See how Homywork helped"
              />
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={300} duration={800}>
              <CaseStudy 
                headline="50% Time Savings - A Mid-Size European Design Studio"
                clientName="Nordic Designs"
                industry="Furniture"
                primaryImage="/lovable-uploads/09c7c9b6-558f-472c-adc8-8bbe8e3c1568.png"
                secondaryImage=""
                challenge="This growing design studio was struggling with time-consuming product photography sessions and manual listing creation across multiple European marketplaces, limiting their ability to launch new collections quickly."
                solution="Our AI-powered image enhancement eliminated the need for expensive photoshoots, while automated listing generation enabled rapid market entry across different European countries."
                detailedResults={
                  <p>
                    Nordic Designs reduced their product photography costs by <HighlightedMetric>70%</HighlightedMetric>, decreased listing creation time by <HighlightedMetric>50%</HighlightedMetric>, and increased their monthly product launches by <HighlightedMetric>35%</HighlightedMetric> due to improved efficiency.
                  </p>
                }
                quote="We can now launch new collections in weeks instead of months. The AI handles the tedious work so we can focus on design and customer relationships."
                quoteAuthor="Erik Johansson, Creative Director"
                learnMoreLink="#"
                learnMoreText="See how Homywork helped"
              />
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={600} duration={800}>
              <CaseStudy 
                headline="3x Listing Speed - A Growing Online Furniture Retailer"
                clientName="Urban Living Furniture"
                industry="Furniture"
                primaryImage="/lovable-uploads/b232ee87-5bf4-4694-bf8b-8b96f014346c.png"
                secondaryImage=""
                challenge="This fast-growing online retailer needed to scale their catalog quickly but was bottlenecked by manual product listing processes and inconsistent image quality across their growing inventory."
                solution="Our platform automated image optimization and standardized product descriptions, while enabling bulk listing uploads across multiple sales channels with consistent branding and quality."
                detailedResults={
                  <p>
                    Urban Living achieved a <HighlightedMetric>25%</HighlightedMetric> increase in online sales, reduced image editing time by <HighlightedMetric>80%</HighlightedMetric>, and improved listing efficiency by <HighlightedMetric>200%</HighlightedMetric>, enabling them to list products 3x faster than before.
                  </p>
                }
                quote="The efficiency gains have been incredible. We can now manage three times the inventory with the same team size and maintain consistent quality across all our channels."
                quoteAuthor="Maria Chen, Operations Manager"
                learnMoreLink="#"
                learnMoreText="See how Homywork helped"
              />
            </AnimatedElement>
          </div>
        </AnimatedElement>
      </main>
      <Footer />
    </div>
  );
};

export default UseCasesPage;
