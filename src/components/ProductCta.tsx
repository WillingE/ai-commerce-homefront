
import { Button } from "@/components/ui/button";

const ProductCta = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-800 to-indigo-900 text-white">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
          Transform Your Global E-Commerce Today
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Join thousands of businesses using our AI platform to scale internationally with ease.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            className="h-14 px-8 bg-white text-blue-900 hover:bg-blue-50 rounded-full text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            size="lg"
          >
            Start Free Trial
          </Button>
          <Button 
            variant="outline" 
            className="h-14 px-8 border-2 border-white text-white hover:bg-white/10 rounded-full text-lg font-medium transition duration-300"
            size="lg"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCta;
