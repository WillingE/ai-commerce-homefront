
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudyProps {
  headline: string;
  clientName: string;
  industry: string;
  primaryImage: string;
  secondaryImage: string;
  challenge: string;
  solution: string;
  detailedResults: string;
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
      {/* Header section with background */}
      <div className="bg-apple-gray-800 p-6 md:p-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left side - Text header */}
            <div>
              <div className="mb-4">
                <span className="text-white/80 text-sm font-medium bg-white/10 px-3 py-1 rounded-full">
                  {industry}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                {clientName}
              </h2>
              <p className="text-3xl md:text-4xl font-bold text-white">
                {headline}
              </p>
            </div>
            
            {/* Right side - Key challenge */}
            <div className="hidden lg:block bg-white/10 p-5 rounded-xl">
              <h3 className="text-lg font-medium text-white mb-2">
                The Challenge
              </h3>
              <p className="text-white/90">
                {challenge}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content section */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left side - Visual content */}
        <div className="bg-gray-100 p-6">
          <div className="flex flex-col space-y-6">
            {/* Primary image */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={primaryImage} 
                alt={`${clientName} - Product image 1`}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Secondary image */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={secondaryImage} 
                alt={`${clientName} - Product image 2`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Challenge section - Visible only on mobile */}
          <div className="lg:hidden">
            <h3 className="text-lg font-medium text-apple-gray-800">
              The Challenge
            </h3>
            <p className="text-apple-gray-600 mt-1">
              {challenge}
            </p>
          </div>
          
          {/* Solution */}
          <div>
            <h3 className="text-lg font-medium text-apple-gray-800">
              Our AI Solution
            </h3>
            <p className="text-apple-gray-600 mt-1">
              {solution}
            </p>
          </div>
          
          {/* Detailed Results */}
          <div>
            <h3 className="text-lg font-medium text-apple-gray-800">
              The Results
            </h3>
            <p className="text-apple-gray-600 mt-1">
              {detailedResults}
            </p>
          </div>
          
          {/* Client Quote */}
          {quote && (
            <div className="border-l-4 border-apple-blue pl-4 py-3 bg-blue-50 rounded-r-lg">
              <p className="text-apple-gray-700 italic">
                "{quote}"
              </p>
              {quoteAuthor && (
                <p className="text-apple-gray-600 mt-2 text-sm">
                  — {quoteAuthor}
                </p>
              )}
            </div>
          )}
          
          {/* Learn More Link */}
          {learnMoreLink && (
            <div className="mt-4">
              <Button variant="link" className="p-0 h-auto text-apple-blue" asChild>
                <a href={learnMoreLink}>
                  {learnMoreText || "Learn more"} <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CaseStudy;
