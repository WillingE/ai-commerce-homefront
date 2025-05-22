
import { Card } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "AI Image Studio",
    description: "Perfect Product Shots, Automatically.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
    alt: "AI enhancing product images"
  },
  {
    id: 2,
    title: "Listing Manager",
    description: "One Dashboard, All Marketplaces.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    alt: "Multi-platform listing management dashboard"
  },
  {
    id: 3,
    title: "AI Knowledge",
    description: "Market Insights, Without Research.",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80",
    alt: "AI providing market insights and knowledge"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-800 mb-3">
            Key Platform Features
          </h2>
          <p className="text-xl text-apple-gray-600 max-w-3xl mx-auto">
            Powerful AI tools designed to transform your e-commerce business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.id}
              className="overflow-hidden border-0 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-apple-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-apple-gray-600 mb-4">
                  {feature.description}
                </p>
                <a href="#" className="inline-flex items-center text-apple-blue hover:text-blue-700 font-medium">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
