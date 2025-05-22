
import { Card } from "@/components/ui/card";
import { ArrowRight, Tag } from "lucide-react";

const AttributeFeature = () => {
  return (
    <div className="mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Card className="overflow-hidden border-0 rounded-2xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80" 
              alt="AI Attribute Management" 
              className="w-full h-auto object-cover"
            />
          </Card>
        </div>
        <div>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <Tag className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Studio Attributes</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-apple-gray-800">
              Smart Attribute Mapping
            </h3>
            <p className="text-lg text-apple-gray-600">
              Our AI automatically maps and translates product attributes across marketplaces, ensuring compliance with local requirements and enhancing product discoverability.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Automatic attribute mapping across platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Compliant with marketplace-specific requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Enhanced search relevance with optimized attributes</span>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              Learn about attribute optimization <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttributeFeature;
