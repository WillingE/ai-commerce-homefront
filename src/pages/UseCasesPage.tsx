
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
  <span className="text-gray-600 font-medium">
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
                    35% Sales Growth - <CompanyDescription>a 30-year established american home goods retailer</CompanyDescription>
                  </>
                }
                clientName="Heritage Home Co."
                industry="Home & Garden E-commerce"
                primaryImage="/lovable-uploads/328328eb-cdb0-4de6-b738-70ea44db5315.png"
                secondaryImage="/lovable-uploads/1bd9f347-beb2-4d11-8231-753e9de4054c.png"
                challenge="This established home goods retailer was struggling with declining online sales due to poor product presentation and inconsistent listings across multiple e-commerce platforms, making it difficult to compete with larger retailers."
                solution="We implemented our AI-powered listing optimization and image enhancement tools to create professional, consistent product presentations across all their sales channels, improving product visibility and customer engagement."
                detailedResults={
                  <p>
                    Heritage Home Co. achieved a remarkable <HighlightedMetric>35%</HighlightedMetric> increase in overall online sales within 3 months, with conversion rates improving by <HighlightedMetric>28%</HighlightedMetric> and average order value rising by <HighlightedMetric>18%</HighlightedMetric> due to better product presentation and optimized listings.
                  </p>
                }
                quote="Our sales transformation has been incredible. The AI-optimized listings and images have made our products much more appealing to customers, directly translating to higher sales."
                quoteAuthor="Jennifer Martinez, E-commerce Director"
                learnMoreLink="#"
                learnMoreText="See how Homywork helped"
              />
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={300} duration={800}>
              <CaseStudy 
                headline={
                  <>
                    80% Cost Reduction - <CompanyDescription>a growing european online fashion boutique</CompanyDescription>
                  </>
                }
                clientName="StyleCraft Boutique"
                industry="Fashion E-commerce"
                primaryImage="/lovable-uploads/09c7c9b6-558f-472c-adc8-8bbe8e3c1568.png"
                secondaryImage=""
                challenge="This expanding fashion retailer was spending thousands of euros monthly on professional photography shoots and graphic design services, with each product requiring 2-3 hours of image editing work, severely limiting their ability to launch new collections quickly."
                solution="Our AI Studio completely transformed their image workflow by automatically enhancing product photos, removing backgrounds, and creating professional-quality visuals in minutes instead of hours, eliminating the need for expensive photography services."
                detailedResults={
                  <p>
                    StyleCraft Boutique reduced their monthly image production costs by <HighlightedMetric>80%</HighlightedMetric>, cutting image processing time from <HighlightedMetric>3 hours to 15 minutes</HighlightedMetric> per product, and increased their new product launch frequency by <HighlightedMetric>150%</HighlightedMetric> due to streamlined image workflows.
                  </p>
                }
                quote="The cost savings have been game-changing for our business. We've eliminated our photography budget entirely while actually improving our image quality and speed."
                quoteAuthor="Alessandro Rossi, Founder"
                learnMoreLink="#"
                learnMoreText="See how Homywork helped"
              />
            </AnimatedElement>
            
            <AnimatedElement animation="fade-up" delay={600} duration={800}>
              <CaseStudy 
                headline={
                  <>
                    5x Listing Speed - <CompanyDescription>a fast-growing online electronics retailer</CompanyDescription>
                  </>
                }
                clientName="TechMart Direct"
                industry="Electronics E-commerce"
                primaryImage="/lovable-uploads/b232ee87-5bf4-4694-bf8b-8b96f014346c.png"
                secondaryImage=""
                challenge="This rapidly expanding electronics retailer was overwhelmed by the manual process of creating product listings across multiple platforms, with each listing taking 2-3 hours to complete and often containing inconsistencies that hurt their search rankings and sales performance."
                solution="We deployed our automated Listing Manager to streamline their entire product listing workflow, automatically generating optimized titles, descriptions, and specifications for multiple e-commerce platforms simultaneously, ensuring consistency and SEO optimization."
                detailedResults={
                  <p>
                    TechMart Direct increased their listing creation speed by <HighlightedMetric>400%</HighlightedMetric>, reducing time per listing from <HighlightedMetric>3 hours to 35 minutes</HighlightedMetric>, and improved their search ranking visibility by <HighlightedMetric>45%</HighlightedMetric> through consistent, SEO-optimized product descriptions across all platforms.
                  </p>
                }
                quote="We can now list products 5 times faster with better quality and consistency. Our team can focus on sourcing and customer service instead of repetitive listing work."
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
