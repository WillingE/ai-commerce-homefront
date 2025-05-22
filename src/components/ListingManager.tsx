
import { ArrowRight, List } from "lucide-react";
import { Card } from "@/components/ui/card";

const ListingManager = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
            <List className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Listing Manager</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-800 mb-3">
            One Dashboard, All Marketplaces
          </h2>
          <p className="text-xl text-apple-gray-600 max-w-3xl mx-auto">
            Control your global e-commerce presence from a single, intelligent interface
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Card className="overflow-hidden border-0 rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                alt="Unified Dashboard" 
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>
          <div>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-apple-gray-800">
                Unified Multi-Channel Management
              </h3>
              <p className="text-lg text-apple-gray-600">
                Manage listings, inventory, and performance across Amazon, eBay, Etsy, Shopify, and dozens more global marketplaces from a single, intuitive dashboard.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Synchronized inventory across all channels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Bulk operations and automation workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Real-time performance analytics and insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 border-0 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-apple-gray-800">Intelligent Pricing</h4>
            <p className="text-apple-gray-600 mb-4">
              AI-driven pricing strategies optimize your margins while staying competitive in each marketplace.
            </p>
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mt-auto">
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Card>
          
          <Card className="p-6 border-0 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-apple-gray-800">Automated Order Fulfillment</h4>
            <p className="text-apple-gray-600 mb-4">
              Streamline your operations with intelligent routing, shipping label generation, and tracking updates.
            </p>
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mt-auto">
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Card>
          
          <Card className="p-6 border-0 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-apple-gray-800">Performance Analytics</h4>
            <p className="text-apple-gray-600 mb-4">
              Gain actionable insights with detailed reports on sales, traffic, conversion rates, and growth opportunities.
            </p>
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mt-auto">
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ListingManager;
