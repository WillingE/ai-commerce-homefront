
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText } from "lucide-react";

const ContentFeature = () => {
  return (
    <div className="mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <FileText className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">AI-Generated Text</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-apple-gray-800">
              Compelling Titles & Descriptions
            </h3>
            <p className="text-lg text-apple-gray-600">
              Generate market-specific, SEO-optimized product content that speaks to local customers and drives conversions across languages and regions.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Multi-language content generation with cultural nuance</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Keyword-rich titles that improve search ranking</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Persuasive descriptions that highlight key benefits</span>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              Explore content generation <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <Card className="overflow-hidden border-0 rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <div className="bg-gray-50 rounded-xl p-5 mb-5">
                <h4 className="font-semibold mb-2 text-apple-gray-800">Original Title</h4>
                <p className="text-apple-gray-600">Wireless Headphones Bluetooth</p>
                
                <h4 className="font-semibold mb-2 mt-4 text-apple-gray-800">AI-Enhanced Title</h4>
                <p className="text-blue-700">Premium Wireless Bluetooth Headphones with Active Noise Cancellation & 40-Hour Battery Life</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="font-semibold mb-2 text-apple-gray-800">Original Description</h4>
                <p className="text-apple-gray-600 text-sm">Bluetooth headphones with good sound quality.</p>
                
                <h4 className="font-semibold mb-2 mt-4 text-apple-gray-800">AI-Enhanced Description</h4>
                <p className="text-blue-700 text-sm">Experience immersive, studio-quality sound with our premium wireless headphones. Featuring advanced active noise cancellation technology, these comfortable over-ear headphones eliminate background noise so you can focus on what matters. With an industry-leading 40-hour battery life and quick-charge capability, they're perfect for your busy lifestyle. Compatible with all Bluetooth devices and featuring intuitive touch controls, these headphones combine elegant design with uncompromising performance.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContentFeature;
