import { Button } from "@/components/ui/button";
import AnimatedElement from "./AnimatedElement";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const login = () => {
    if (window.location.port === "8000") {
      window.location.href = "https://homywork.com:8000/PublishLogin";
    } else {
      window.location.href = "https://homywork.com/PublishLogin";
    }
  };
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-apple-gray-100">
      {/* Abstract AI background animation - simplified gradient effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white via-apple-gray-100 to-blue-50 opacity-60"></div>

      {/* Animated subtle background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-light"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-light animation-delay-2000"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <AnimatedElement animation="fade-down" duration={1000}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-apple-gray-800 font-semibold mb-6 tracking-tight animate-fade-in">
              <span>AI-Powered.</span>
              <span className="block">Global Reach.</span>
              <span className="block">Effortless E-commerce.</span>
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={300} duration={1000}>
            <p className="text-xl md:text-2xl text-apple-gray-600 mt-6 max-w-3xl mx-auto animate-slide-up">
              Unlock intelligent product optimization, streamlined listing
              management, and expert AI knowledge to scale your international
              sales.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={600} duration={1000}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-slide-up">
              <Button
                className="h-14 px-8 rounded-full bg-apple-blue hover:bg-blue-600 text-white text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105"
                size="lg"
                onClick={login}
              >
                Try Studio Free
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 rounded-full border-2 border-apple-gray-400 text-apple-gray-700 hover:text-apple-gray-900 hover:border-apple-gray-800 text-lg font-medium transition duration-300 ease-in-out"
                size="lg"
              >
                <Link to="/product">Explore Features</Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>

        {/* Hero image showing international e-commerce concept */}
        <AnimatedElement animation="zoom-in" delay={900} duration={1200}>
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
              <img
                src="/lovable-uploads/top-main.png"
                alt="AI-powered global e-commerce platform"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default HeroSection;
