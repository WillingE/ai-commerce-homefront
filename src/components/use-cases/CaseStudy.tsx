
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
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left side - Visual content */}
        <div className="relative bg-gray-200 h-[300px] md:h-[400px] flex items-center justify-center">
          {/* Placeholder for primary image */}
          <p className="text-gray-500">Image will be updated</p>
          
          {/* Overlay with key result */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-8">
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
        </div>
        
        {/* Right side - Content */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="space-y-6">
            {/* Challenge section */}
            <div>
              <h3 className="text-lg font-medium text-apple-gray-800">
                The Challenge
              </h3>
              <p className="text-apple-gray-600 mt-1">
                {challenge}
              </p>
            </div>
          </div>
          
          {/* Solution and Results */}
          <div className="space-y-6">
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
              <div className="border-l-4 border-apple-blue pl-4 py-3 bg-apple-gray-100 rounded-r-lg">
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
              <div>
                <Button variant="link" className="p-0 h-auto text-apple-blue" asChild>
                  <a href={learnMoreLink}>
                    {learnMoreText || "Learn more"} <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CaseStudy;
