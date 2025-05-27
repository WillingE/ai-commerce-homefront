import { Button } from "@/components/ui/button";
import AnimatedElement from "../AnimatedElement";

const ValueProposition = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <AnimatedElement animation="fade-down" duration={1000}>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Choose the AI partner that empowers your global growth
          </h2>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-up" delay={300} duration={1000}>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Start intelligent, sell smarter. Join thousands of businesses using our platform to scale internationally with ease.
          </p>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-up" delay={600} duration={1000}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              className="h-12 px-8 bg-white text-blue-900 hover:bg-blue-50 shadow-lg"
              size="lg"
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              className="h-12 px-8 bg-white text-blue-900 hover:bg-blue-50 shadow-lg"
              size="lg"
            >
              Contact Sales
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ValueProposition;
