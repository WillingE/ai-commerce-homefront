
import { Card } from "@/components/ui/card";
import { ArrowRight, FileCode } from "lucide-react";

const CategoryFeature = () => {
  return (
    <div className="mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-blue-100/80 px-5 py-3 rounded-full">
              <FileCode className="h-6 w-6 text-blue-600" />
              <span className="text-base font-medium text-blue-700">Studio Category</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-apple-gray-800 leading-tight">
              Intelligent Category Classification
            </h3>
            <p className="text-xl text-apple-gray-600">
            Our AI will analyze your products to suggest optimal category placements across all major marketplaces, instantly boosting visibility, search ranking, and listing efficiency.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <span className="text-lg">Precise product categorization across multiple marketplaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <span className="text-lg">Improved search visibility with market-specific optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <span className="text-lg">Reduced listing errors and compliance issues</span>
              </li>
            </ul>
            {/* <a href="#" className="inline-flex items-center text-lg text-blue-600 hover:text-blue-800 font-medium group">
              Learn more about AI categorization 
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a> */}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <Card className="overflow-hidden border-0 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <img 
              src="/lovable-uploads/StudioCategory.png" 
              alt="Woman cooking in a bright kitchen" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CategoryFeature;
