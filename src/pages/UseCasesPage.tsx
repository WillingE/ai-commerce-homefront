
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

const CompanyDescription = ({ children }: { children: React.ReactNode }) => (
  <span className="font-handwriting text-blue-600 font-medium">
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
                headline={
                  <>
                    35% Sales Growth - <CompanyDescription>A well-established American home goods retailer</CompanyDescription>
                  </>
                }
                clientName="Heritage Home Co."
                industry="Home & Garden E-commerce"
                primaryImage="/lovable-uploads/328328eb-cdb0-4de6-b738-70ea44db5315.png"
                secondaryImage="/lovable-uploads/1bd9f347-beb2-4d11-8231-753e9de4054c.png"
                challenge="This established online retailer was spending excessive time and budget on product photography and struggling to create compelling listings for international marketplaces, leading to inconsistent brand presentation across channels."
                solution="Our AI Studio automated product image enhancement and background removal, while the Listing Manager generated optimized descriptions for multiple e-commerce platforms including Amazon, eBay, and Shopify."
                detailedResults={
                  <p>
                    Heritage Home Co. achieved a <HighlightedMetric>35%</HighlightedMetric> increase in online sales, reduced product photography costs by <HighlightedMetric>65%</HighlightedMetric>, and improved listing creation speed by <HighlightedMetric>70%</HighlightedMetric>, reducing time from 3 hours to 50 minutes per product listing.
                  </p>
                }
                quote="The platform revolutionized our e-commerce operations. We're now selling effectively on platforms we couldn't manage before with our limited resources."
                quoteAuthor="Jennifer Martinez, E-commerce Director"
                learnMoreLink="#"
                learnMoreText="See how Homywork helped"
              />
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={300} duration={800}>
              <CaseStudy 
                headline={
                  <>
                    50% Cost Reduction - <CompanyDescription>A growing European online fashion boutique</CompanyDescription>
                  </>
                }
                clientName="StyleCraft Boutique"
                industry="Fashion E-commerce"
                primaryImage="/lovable-uploads/09c7c9b6-558f-472c-adc8-8bbe8e3c1568.png"
                secondaryImage=""
                challenge="This expanding fashion e-commerce business was overwhelmed by expensive product photoshoots and time-consuming manual listing processes across multiple online marketplaces, limiting their ability to launch new collections quickly."
                solution="Our AI-powered image enhancement eliminated costly studio shoots, while automated listing generation enabled rapid product launches across European e-commerce platforms including local marketplaces and social commerce channels."
                detailedResults={
                  <p>
                    StyleCraft Boutique reduced their product photography costs by <HighlightedMetric>75%</HighlightedMetric>, decreased listing creation time by <HighlightedMetric>60%</HighlightedMetric>, and increased their monthly product launches by <HighlightedMetric>40%</HighlightedMetric> due to streamlined workflows.
                  </p>
                }
                quote="We can now launch new collections in days instead of weeks. The AI handles the tedious work so we can focus on design and customer engagement."
                quoteAuthor="Alessandro Rossi, Founder"
                learnMoreLink="#"
                learnMoreText="See how Homywork helped"
              />
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={600} duration={800}>
              <CaseStudy 
                headline={
                  <>
                    3x Listing Efficiency - <CompanyDescription>A fast-growing online electronics retailer</CompanyDescription>
                  </>
                }
                clientName="TechMart Direct"
                industry="Electronics E-commerce"
                primaryImage="/lovable-uploads/b232ee87-5bf4-4694-bf8b-8b96f014346c.png"
                secondaryImage=""
                challenge="This rapidly expanding electronics e-commerce store needed to scale their product catalog quickly but was constrained by manual listing processes and inconsistent product image quality across their growing inventory of tech products."
                solution="Our platform automated image optimization for electronics products and standardized technical descriptions, while enabling bulk listing uploads across multiple e-commerce channels including Amazon, Newegg, and their own Shopify store."
                detailedResults={
                  <p>
                    TechMart Direct achieved a <HighlightedMetric>28%</HighlightedMetric> increase in conversion rates, reduced image processing time by <HighlightedMetric>80%</HighlightedMetric>, and improved listing efficiency by <HighlightedMetric>200%</HighlightedMetric>, enabling them to list products 3x faster with consistent quality.
                  </p>
                }
                quote="The efficiency gains have been remarkable. We can now manage three times the inventory with the same team size while maintaining professional quality across all our sales channels."
                quoteAuthor="David Kim, Operations Manager"
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
