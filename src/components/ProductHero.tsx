import { Button } from "@/components/ui/button";
import AnimatedElement from "./AnimatedElement";

const ProductHero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <AnimatedElement animation="fade-down" duration={1000}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-apple-gray-800 mb-6 tracking-tight">
            Our AI-Powered Platform Features
          </h1>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-up" delay={300} duration={1000}>
          <p className="text-xl md:text-2xl text-apple-gray-600 mb-10 max-w-3xl mx-auto">
            Discover how our suite of intelligent tools transforms cross-border e-commerce with innovative AI solutions.
          </p>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-up" delay={600} duration={1000}>
          <Button 
            className="h-14 px-8 rounded-full text-lg font-medium shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            size="lg"
          >
            Start Free Trial
          </Button>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ProductHero;
