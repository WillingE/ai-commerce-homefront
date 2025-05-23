
import { Card } from "@/components/ui/card";
import { Image, LayoutDashboard, MessageSquare } from 'lucide-react';
import { Link } from "react-router-dom";

const features = [
  {
    id: 1,
    title: "AI Studio",
    subtitle: "Perfect Product Visuals",
    description: "Automatically enhance images and generate compelling descriptions.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
    alt: "AI enhancing product images",
    icon: <Image className="h-10 w-10 text-apple-blue" strokeWidth={1.5} />,
    link: "/product"
  },
  {
    id: 2,
    title: "Listing Manager",
    subtitle: "Smart Listing Management",
    description: "Effortlessly sync and manage your products across all channels.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    alt: "Multi-platform listing management dashboard",
    icon: <LayoutDashboard className="h-10 w-10 text-apple-blue" strokeWidth={1.5} />,
    link: "/product"
  },
  {
    id: 3,
    title: "AI Knowledge",
    subtitle: "Instant AI Expertise",
    description: "Get instant answers and insights from our AI-powered knowledge hub.",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80",
    alt: "AI providing market insights and knowledge",
    icon: <MessageSquare className="h-10 w-10 text-apple-blue" strokeWidth={1.5} />,
    link: "/product"
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
              className="overflow-hidden border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md group cursor-pointer"
            >
              <Link to={feature.link} className="block">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent z-10"></div>
                  <div className="absolute top-4 left-4 z-20">
                    {feature.icon}
                  </div>
                  <img 
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <h3 className="text-lg font-semibold text-apple-gray-800">
                      {feature.subtitle}
                    </h3>
                    <p className="mt-0.5 text-sm text-apple-gray-500">
                      {feature.title}
                    </p>
                  </div>
                  <p className="text-apple-gray-600">
                    {feature.description}
                  </p>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
