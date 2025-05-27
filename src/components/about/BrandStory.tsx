import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedElement from "../AnimatedElement";

const BrandStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <AnimatedElement animation="fade-down" duration={800}>
          <h2 className="text-3xl md:text-4xl font-medium text-apple-gray-800 text-center mb-14">
            Our Story
          </h2>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" duration={1000}>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img
                src="/lovable-uploads/computer-up.jpg"
                alt="The journey of Homywork"
                className="rounded-3xl shadow-xl object-cover w-full h-[400px]"
              />
            </div>

            <div className="lg:w-1/2 space-y-6">
              <p className="text-lg text-apple-gray-600">
                Homywork began in 2020 with a simple observation: cross-border e-commerce was unnecessarily complex. Our founders, with backgrounds in AI and international trade, envisioned a platform that could break down the barriers preventing businesses from reaching global markets.
              </p>
              <p className="text-lg text-apple-gray-600">
                What started as a tool for optimizing product listings across languages has evolved into a comprehensive platform that handles everything from AI-powered content creation to cultural adaptation and marketplace integration. Along the way, we've helped thousands of businesses expand their reach and increase their global sales.
              </p>
              <p className="text-lg text-apple-gray-600">
                Today, Homywork continues to innovate at the intersection of artificial intelligence and global commerce, guided by our belief that every business deserves the opportunity to succeed internationally.
              </p>
              <Button className="mt-8" variant="outline">
                Learn more about our journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default BrandStory;
