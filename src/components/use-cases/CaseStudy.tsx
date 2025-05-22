
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from "@/lib/utils";

interface CaseStudyProps {
  title: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  quote?: string;
  quoteAuthor?: string;
  className?: string;
}

const CaseStudy = ({
  title,
  image,
  challenge,
  solution,
  results,
  quote,
  quoteAuthor,
  className
}: CaseStudyProps) => {
  // Sample data for chart
  const data = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 120 },
    { name: 'Mar', value: 115 },
    { name: 'Apr', value: 130 },
    { name: 'May', value: 170 },
    { name: 'Jun', value: 230 },
    { name: 'Jul', value: 250 },
  ];

  return (
    <section className={cn("mb-32", className)}>
      <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-800 mb-8 tracking-tight">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left side - Image */}
        <div className="order-1">
          <Card className="overflow-hidden border-0 rounded-3xl shadow-xl">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </Card>
        </div>
        
        {/* Right side - Content */}
        <div className="order-2 space-y-12">
          {/* The Challenge */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-apple-gray-800">
              The Challenge
            </h3>
            <p className="text-lg text-apple-gray-600 leading-relaxed">
              {challenge}
            </p>
          </div>
          
          {/* The AI Solution */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-apple-gray-800">
              Our AI Solution
            </h3>
            <p className="text-lg text-apple-gray-600 leading-relaxed">
              {solution}
            </p>
          </div>
          
          {/* The Results */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-apple-gray-800">
              The Results
            </h3>
            
            {/* Results visualization */}
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#0071E3" 
                    strokeWidth={3} 
                    dot={{ r: 5 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            {/* Key metrics */}
            <ul className="space-y-3">
              {results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 font-bold text-xl mr-3">✓</span>
                  <span className="text-lg text-apple-gray-800">{result}</span>
                </li>
              ))}
            </ul>
            
            {/* Client Quote */}
            {quote && (
              <Card className="overflow-hidden bg-blue-50 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex">
                    <Quote className="h-10 w-10 text-blue-300 mr-4 shrink-0" />
                    <div>
                      <p className="text-lg text-apple-gray-700 italic">
                        "{quote}"
                      </p>
                      {quoteAuthor && (
                        <p className="text-apple-gray-600 mt-3 font-medium">
                          - {quoteAuthor}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
