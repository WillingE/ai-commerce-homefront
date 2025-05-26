
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="container max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
          Ready to elevate your e-commerce with AI?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Join thousands of businesses transforming their global sales strategy with our platform.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            className="h-14 px-8 bg-white text-blue-900 hover:bg-blue-50 rounded-full text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105"
            size="lg"
          >
            Start Free Trial
          </Button>
          <Button 
            variant="outline" 
            className="h-14 px-8 bg-white text-blue-900 hover:bg-blue-50 rounded-full text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105"
            size="lg"
            asChild
          >
            <Link to="/product">View Product Features</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
