import { Button } from "@/components/ui/button";
import AnimatedElement from "./AnimatedElement";

const ProductCta = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-800 to-indigo-900 text-white">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <AnimatedElement animation="fade-up" duration={1000}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Transform Your Global E-Commerce Today
          </h2>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-up" delay={200} duration={1000}>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join thousands of businesses using our AI platform to scale internationally with ease.
          </p>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-up" delay={400} duration={1000}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="h-14 px-8 bg-white text-blue-900 hover:bg-blue-50 rounded-full text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              size="lg"
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              className="h-14 px-8 bg-white text-blue-900 hover:bg-blue-50 rounded-full text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              size="lg"
            >
              Schedule Demo
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ProductCta;
