import { Card } from "@/components/ui/card";
import { ArrowRight, Image } from "lucide-react";
import AnimatedElement from "../AnimatedElement";

const ImageFeature = () => {
  return (
    <div className="mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <AnimatedElement animation="fade-right" duration={1000}>
          <Card className="overflow-hidden border-0 rounded-2xl shadow-lg">
            <div className="grid grid-cols-2 gap-4 p-6">
              <div>
                <p className="text-center text-sm font-medium text-apple-gray-500 mb-2">Before</p>
                <img 
                  src="/lovable-uploads/before.png" 
                  alt="Before AI Image Enhancement" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <p className="text-center text-sm font-medium text-apple-gray-500 mb-2">After</p>
                <img 
                  src="/lovable-uploads/after.jpg" 
                  alt="After AI Image Enhancement" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </Card>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-left" duration={1000} delay={200}>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <Image className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">AI Image Studio</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-apple-gray-800">
              Perfect Product Images, Automatically
            </h3>
            <p className="text-lg text-apple-gray-600">
              Transform ordinary product photos into professional-grade images with our AI enhancement technology that removes backgrounds, corrects lighting, and optimizes for every marketplace.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>One-click background removal and enhancement</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Automatic resizing for different marketplace requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Increased click-through rates with professional imagery</span>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              See how image enhancement works <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default ImageFeature;
