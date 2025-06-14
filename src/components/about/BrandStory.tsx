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
                Homywork was born inside a cross-border furniture company, where we managed thousands of SKUs across Wayfair, Home Depot, and Shopify.
              </p>
              <p className="text-lg text-apple-gray-600">
                It wasn’t just listings. It was pricing updates, category mismatches, performance drops, photo edits, A/B testing, platform rules, and endless guesswork. We spent hours creating images, adjusting SEO, and reacting to scattered data every single day.
              </p>
              <p className="text-lg text-apple-gray-600">
                We built Homywork because we needed more than tools. We required an AI-native manager. One that could generate images, fix weak listings, adapt in real time, and make smart decisions so we didn’t have to.
              </p>
              <p className="text-lg text-apple-gray-600">
                What started as an internal fix is now powering storefronts globally, so sellers can stop juggling tasks, and start running their business like it runs itself.
              </p>
              {/* <Button className="mt-8" variant="outline">
                Learn more about our journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default BrandStory;
