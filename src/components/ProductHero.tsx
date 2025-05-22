
import { Button } from "@/components/ui/button";

const ProductHero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-apple-gray-800 mb-6 tracking-tight">
          Our AI-Powered Platform Features
        </h1>
        <p className="text-xl md:text-2xl text-apple-gray-600 mb-10 max-w-3xl mx-auto">
          Discover how our suite of intelligent tools transforms cross-border e-commerce with innovative AI solutions.
        </p>
        <Button 
          className="h-14 px-8 rounded-full text-lg font-medium shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          size="lg"
        >
          Start Free Trial
        </Button>
      </div>
    </section>
  );
};

export default ProductHero;
