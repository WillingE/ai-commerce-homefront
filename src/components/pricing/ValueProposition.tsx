
import { Button } from "@/components/ui/button";

const ValueProposition = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-6">
          Choose the AI partner that empowers your global growth
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Start intelligent, sell smarter. Join thousands of businesses using our platform to scale internationally with ease.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            className="h-12 px-8 bg-white text-blue-900 hover:bg-blue-50"
            size="lg"
          >
            Start Free Trial
          </Button>
          <Button 
            variant="outline" 
            className="h-12 px-8 border-white text-white hover:bg-white/10"
            size="lg"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
