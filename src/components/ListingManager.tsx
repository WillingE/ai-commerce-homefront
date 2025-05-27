
import { ArrowRight, List } from "lucide-react";
import { Card } from "@/components/ui/card";
import SmartListingManagement from "../../public/lovable-uploads/SmartListingManagement.avif";

const ListingManager = () => {
  return (
    <section id="listing-manager" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-green-100 px-5 py-3 rounded-full mb-4">
            <List className="h-6 w-6 text-green-600" />
            <span className="text-base font-medium text-green-700">Listing Manager</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-apple-gray-800 mb-5">
            One Dashboard, All Marketplaces
          </h2>
          <p className="text-xl text-apple-gray-600 max-w-3xl mx-auto">
            Control your global e-commerce presence from a single, intelligent interface
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Card className="overflow-hidden border-0 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <img 
                src={SmartListingManagement} 
                alt="Unified Dashboard" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </Card>
          </div>
          <div>
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-apple-gray-800 leading-tight">
                Unified Multi-Channel Management
              </h3>
              <p className="text-xl text-apple-gray-600">
                Manage listings, inventory, and performance across Amazon, eBay, Etsy, Shopify, and dozens more global marketplaces from a single, intuitive dashboard.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-lg">Synchronized inventory across all channels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-lg">Bulk operations and automation workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-lg">Real-time performance analytics and insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 border-0 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-2xl font-semibold mb-4 text-apple-gray-800">Intelligent Pricing</h4>
            <p className="text-lg text-apple-gray-600 mb-6">
              AI-driven pricing strategies optimize your margins while staying competitive in each marketplace.
            </p>
            <a href="#" className="inline-flex items-center text-lg text-green-600 hover:text-green-800 font-medium mt-auto group">
              Learn more <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Card>
          
          <Card className="p-8 border-0 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-2xl font-semibold mb-4 text-apple-gray-800">Automated Order Fulfillment</h4>
            <p className="text-lg text-apple-gray-600 mb-6">
              Streamline your operations with intelligent routing, shipping label generation, and tracking updates.
            </p>
            <a href="#" className="inline-flex items-center text-lg text-green-600 hover:text-green-800 font-medium mt-auto group">
              Learn more <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Card>
          
          <Card className="p-8 border-0 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-2xl font-semibold mb-4 text-apple-gray-800">Performance Analytics</h4>
            <p className="text-lg text-apple-gray-600 mb-6">
              Gain actionable insights with detailed reports on sales, traffic, conversion rates, and growth opportunities.
            </p>
            <a href="#" className="inline-flex items-center text-lg text-green-600 hover:text-green-800 font-medium mt-auto group">
              Learn more <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ListingManager;
