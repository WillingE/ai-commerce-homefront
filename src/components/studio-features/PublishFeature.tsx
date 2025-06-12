
import { Card } from "@/components/ui/card";
import { ArrowRight, Upload } from "lucide-react";

const PublishFeature = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <Upload className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Studio Publish</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-apple-gray-800">
              One-Click Global Publishing
            </h3>
            <p className="text-lg text-apple-gray-600">
              Publish optimized product listings to multiple marketplaces simultaneously with automated compliance checks and localization for each target market.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Simultaneous publishing across marketplaces</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Automated compliance verification</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Real-time status monitoring and optimization</span>
              </li>
            </ul>
            {/* <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              See publishing in action <ArrowRight className="h-4 w-4 ml-1" />
            </a> */}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <Card className="overflow-hidden border-0 rounded-2xl shadow-lg">
            <img 
              src="/lovable-uploads/PerfectProductVisuals.png" 
              alt="One-Click Publishing" 
              className="w-full h-auto object-cover"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PublishFeature;
