
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import AnimatedElement from "../AnimatedElement";

interface CaseStudyProps {
  headline: ReactNode;
  clientName: string;
  industry: string;
  primaryImage: string;
  secondaryImage: string;
  challenge: string;
  solution: string;
  detailedResults: ReactNode;
  quote?: string;
  quoteAuthor?: string;
  learnMoreLink?: string;
  learnMoreText?: string;
  className?: string;
}

const CaseStudy = ({
  headline,
  clientName,
  industry,
  primaryImage,
  secondaryImage,
  challenge,
  solution,
  detailedResults,
  quote,
  quoteAuthor,
  learnMoreLink,
  learnMoreText,
  className
}: CaseStudyProps) => {
  return (
    <Card className={cn("overflow-hidden border-0 rounded-3xl shadow-lg mb-16", className)}>
      {/* Header section with refined background */}
      <AnimatedElement animation="fade-down" duration={800}>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-5 px-6 md:px-8 border-b border-gray-100">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col space-y-2">
              {/* Industry tag */}
              <div>
                <span className="text-apple-blue text-sm font-medium bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                  {industry}
                </span>
              </div>
              
              {/* Client name and headline */}
              <p className="text-2xl md:text-3xl font-bold text-apple-blue">
                {headline}
              </p>
            </div>
          </div>
        </div>
      </AnimatedElement>
      
      {/* Main content section */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left side - Visual content */}
        <AnimatedElement animation="fade-right" duration={800} delay={200}>
          <div className="bg-gray-100 p-6 flex items-center justify-center h-full">
            <div className="flex flex-col space-y-6 w-full">
              {/* Primary image */}
              <div className="rounded-lg overflow-hidden shadow-md">
                <img src={primaryImage} alt={`${clientName} - Product image`} className="w-full h-auto object-cover" />
              </div>
              
              {/* Secondary image - Hidden for now */}
              <div className="rounded-lg overflow-hidden shadow-md">
                {/* Secondary image is not currently displayed */}
                {secondaryImage && <img src={secondaryImage} alt={`${clientName} - Product image`} className="w-full h-auto object-cover" />}
              </div>
            </div>
          </div>
        </AnimatedElement>
        
        {/* Right side - Content */}
        <AnimatedElement animation="fade-left" duration={800} delay={400}>
          <div className="p-6 md:p-8 space-y-6">
            {/* Challenge section - Moved down here for both mobile and desktop */}
            <div>
              <h3 className="text-lg font-medium text-apple-gray-800">
                The Challenge
              </h3>
              <p className="text-apple-gray-600 mt-1 text-base">
                {challenge}
              </p>
            </div>
            
            {/* Solution */}
            <div>
              <h3 className="text-lg font-medium text-apple-gray-800">
                Our AI Solution
              </h3>
              <p className="text-apple-gray-600 mt-1 text-base">
                {solution}
              </p>
            </div>
            
            {/* Detailed Results */}
            <AnimatedElement animation="fade-up" delay={600} duration={800}>
              <div>
                <h3 className="text-lg font-medium text-apple-gray-800">
                  The Results
                </h3>
                <div className="text-apple-gray-600 mt-1 text-base">
                  {detailedResults}
                </div>
              </div>
            </AnimatedElement>
            
            {/* Client Quote */}
            {quote && (
              <AnimatedElement animation="fade-up" delay={800} duration={800}>
                <div className="border-l-4 border-apple-blue pl-4 py-3 bg-blue-50 rounded-r-lg">
                  <p className="text-apple-gray-700 italic text-base">
                    "{quote}"
                  </p>
                  {quoteAuthor && (
                    <p className="text-apple-gray-600 mt-2 text-sm">
                      — {quoteAuthor}
                    </p>
                  )}
                </div>
              </AnimatedElement>
            )}
            
            {/* Learn More Link */}
            {/* {learnMoreLink && (
              <AnimatedElement animation="fade-up" delay={1000} duration={800}>
                <div className="mt-4">
                  <Button variant="link" className="p-0 h-auto text-apple-blue" asChild>
                    <a href={learnMoreLink}>
                      {learnMoreText || "Learn more"} <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </AnimatedElement>
            )} */}
          </div>
        </AnimatedElement>
      </div>
    </Card>
  );
};

export default CaseStudy;
