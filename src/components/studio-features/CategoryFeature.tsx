
import { Card } from "@/components/ui/card";
import { ArrowRight, FileCode } from "lucide-react";

const CategoryFeature = () => {
  return (
    <div className="mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <FileCode className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Studio Category</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-apple-gray-800">
              Intelligent Category Classification
            </h3>
            <p className="text-lg text-apple-gray-600">
              Our AI automatically analyzes your products and suggests optimal category placement across marketplaces, increasing visibility and search relevance.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Precise product categorization across multiple marketplaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Improved search visibility with market-specific optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Reduced listing errors and compliance issues</span>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              Learn more about AI categorization <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <Card className="overflow-hidden border-0 rounded-2xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f58?auto=format&fit=crop&q=80" 
              alt="AI Category Classification" 
              className="w-full h-auto object-cover"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CategoryFeature;
