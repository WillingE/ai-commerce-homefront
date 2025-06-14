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
    title: "Chat-Native, Decision-First",
    description: "You don't need dashboards and tabs. You ask. Homywork answers—with actions:\n\"Why did traffic drop yesterday?\"\n\"What category performs best this week?\"\n\"Change the background to a Scandinavian minimalistic bedroom.\""
  },
  {
    icon: Globe,
    title: "Always Learning, Always Managing",
    description: "Every edit, every sale, every click trains our system. Over time, it understands your tone, product style, and pricing logic—and manages accordingly."
  },
  {
    icon: Users,
    title: "Full Operational Coverage",
    description: "Image Generation. Inventory adjustments. SEO tuning. Pricing tests. Cross-platform consistency. All handled automatically or through one unified interface."
  },
  {
    icon: Shield,
    title: "Built for Ecommerce Sellers",
    description: "Optimized for complex SKUs with detailed specs, variant images, and size constraints. Homywork knows the difference between a nursery shelf and a warehouse rack, and adjusts accordingly."
  }
];

const CoreValues = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <AnimatedElement animation="fade-down" duration={800}>
          <h2 className="text-3xl md:text-4xl font-medium text-apple-gray-800 text-center mb-4">
            Our Core Value Prop
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
              <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-apple-gray-50 transition-colors">
                <div className="w-20 h-20 flex items-center justify-center bg-apple-blue bg-opacity-10 rounded-full mb-6">
                  <value.icon className="h-9 w-9 text-apple-blue" />
                </div>
                <h3 className="text-xl font-medium text-apple-gray-800 mb-4">{value.title}</h3>
                <p className="text-apple-gray-600 whitespace-pre-line">{value.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
