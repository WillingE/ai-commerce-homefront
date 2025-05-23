
import { 
  Lightbulb, 
  Globe, 
  Users, 
  Shield 
} from "lucide-react";

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
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-medium text-apple-gray-800 text-center mb-4">
          Our Core Values
        </h2>
        
        <p className="text-lg text-apple-gray-600 text-center max-w-3xl mx-auto mb-16">
          The principles that guide everything we do at Homywork.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-apple-blue bg-opacity-10 rounded-full mb-6">
                <value.icon className="h-8 w-8 text-apple-blue" />
              </div>
              <h3 className="text-xl font-medium text-apple-gray-800 mb-2">{value.title}</h3>
              <p className="text-apple-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
