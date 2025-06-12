import { Card } from "@/components/ui/card";
import { Image, LayoutDashboard, MessageSquare } from 'lucide-react';
import { Link } from "react-router-dom";
import AnimatedElement from "./AnimatedElement";
import ImageCompare from "./ImageCompare";

const features = [
  {
    id: 1,
    title: "AI Studio",
    subtitle: "Perfect Product Visuals",
    description: "Automatically enhance images and generate compelling descriptions.",
    image: "/lovable-uploads/PerfectProductVisuals.png",
    beforeImage: "/lovable-uploads/before.png",
    afterImage: "/lovable-uploads/after.jpg",
    alt: "AI enhancing product images",
    // icon: <Image className="h-10 w-10 text-apple-blue" strokeWidth={1.5} />,
    link: "/product"
  },
  {
    id: 2,
    title: "Listing Manager",
    subtitle: "Smart Listing Management",
    description: "Effortlessly sync and manage your products across all channels.",
    image: "/lovable-uploads/SmartListingManagement1.png",
    alt: "Multi-platform listing management dashboard",
    // icon: <LayoutDashboard className="h-10 w-10 text-apple-blue" strokeWidth={1.5} />,
    link: "/product"
  },
  {
    id: 3,
    title: "AI Knowledge",
    subtitle: "Instant AI Expertise",
    description: "Get instant answers and insights from our AI-powered knowledge hub.",
    image: "/lovable-uploads/InstantAIExpertise.png",
    alt: "AI providing market insights and knowledge",
    // icon: <MessageSquare className="h-10 w-10 text-apple-blue" strokeWidth={1.5} />,
    link: "/product"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-800 mb-3">
              Key Platform Features
            </h2>
            <p className="text-xl text-apple-gray-600 max-w-3xl mx-auto">
              Powerful AI tools designed to transform your e-commerce business
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedElement
              key={feature.id}
              animation="fade-up"
              delay={index * 100}
              duration={800}
            >
              <Card
                className="overflow-hidden border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md group cursor-pointer"
              >
                <div className="block">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent z-10"></div>
                    <div className="absolute top-4 left-4 z-20">
                      {/* {feature.icon} */}
                    </div>
                    {feature.id === 1 ? (
                      <ImageCompare
                        beforeImage={feature.beforeImage}
                        afterImage={feature.afterImage}
                        beforeAlt={feature.alt}
                        afterAlt={feature.alt}
                        aspectRatio="16/11"
                      />
                    ) : (
                      <img
                        src={feature.image}
                        alt={feature.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <Link to={feature.link}>
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
                </div>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
