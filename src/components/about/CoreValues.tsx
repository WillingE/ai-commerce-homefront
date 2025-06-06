import { 
  Lightbulb, 
  Globe, 
  Users, 
  Shield 
} from "lucide-react";
import AnimatedElement from "../AnimatedElement";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible with AI in e-commerce."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "We embrace diverse markets and cultures, considering global implications in everything we build."
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "We measure our success by the success of the businesses we serve."
  },
  {
    icon: Shield,
    title: "Trust & Quality",
    description: "We deliver reliable, accurate tools that businesses can depend on for their global growth."
  }
];

const CoreValues = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <AnimatedElement animation="fade-down" duration={800}>
          <h2 className="text-3xl md:text-4xl font-medium text-apple-gray-800 text-center mb-4">
            Our Core Values
          </h2>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-up" delay={200} duration={800}>
          <p className="text-lg text-apple-gray-600 text-center max-w-3xl mx-auto mb-16">
            The principles that guide everything we do at Homywork.
          </p>
        </AnimatedElement>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, index) => (
            <AnimatedElement key={value.title} animation="fade-up" delay={300 + (index * 150)} duration={800}>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-apple-gray-50 transition-colors">
                <div className="w-20 h-20 flex items-center justify-center bg-apple-blue bg-opacity-10 rounded-full mb-6">
                  <value.icon className="h-9 w-9 text-apple-blue" />
                </div>
                <h3 className="text-xl font-medium text-apple-gray-800 mb-3">{value.title}</h3>
                <p className="text-apple-gray-600">{value.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
