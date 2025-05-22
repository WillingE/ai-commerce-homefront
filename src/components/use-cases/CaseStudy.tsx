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
  return <Card className={cn("overflow-hidden border-0 rounded-3xl shadow-lg mb-16", className)}>
      {/* Header section with refined background */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-5 px-6 md:px-8 border-b border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col space-y-2">
            {/* Industry tag */}
            <div>
              
            </div>
            
            {/* Client name and headline */}
            
            <p className="text-2xl text-apple-blue md:text-4xl font-extrabold">
              {headline}
            </p>
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
              <img src={primaryImage} alt={`${clientName} - Product image 1`} className="w-full h-auto object-cover" />
            </div>
            
            {/* Secondary image */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src={secondaryImage} alt={`${clientName} - Product image 2`} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Challenge section - Moved down here for both mobile and desktop */}
          <div>
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
          {quote && <div className="border-l-4 border-apple-blue pl-4 py-3 bg-blue-50 rounded-r-lg">
              <p className="text-apple-gray-700 italic">
                "{quote}"
              </p>
              {quoteAuthor && <p className="text-apple-gray-600 mt-2 text-sm">
                  — {quoteAuthor}
                </p>}
            </div>}
          
          {/* Learn More Link */}
          {learnMoreLink && <div className="mt-4">
              <Button variant="link" className="p-0 h-auto text-apple-blue" asChild>
                <a href={learnMoreLink}>
                  {learnMoreText || "Learn more"} <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>}
        </div>
      </div>
    </Card>;
};
export default CaseStudy;