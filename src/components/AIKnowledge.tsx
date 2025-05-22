
import { ArrowRight, Database } from "lucide-react";
import { Card } from "@/components/ui/card";

const AIKnowledge = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
            <Database className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">AI Knowledge</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-800 mb-3">
            Market Insights, Without Research
          </h2>
          <p className="text-xl text-apple-gray-600 max-w-3xl mx-auto">
            Harness the power of AI to understand markets, trends, and regulations without extensive manual research
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-apple-gray-800">
                Intelligent Market Research
              </h3>
              <p className="text-lg text-apple-gray-600">
                Our AI analyzes millions of data points across global markets to provide you with actionable insights on consumer preferences, trends, and competitive landscapes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Real-time competitive analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Market-specific trend identification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Opportunity gap detection and recommendations</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Card className="overflow-hidden border-0 rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80" 
                alt="AI Knowledge Interface" 
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 border-0 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-apple-gray-800">Regulatory Compliance</h4>
            <p className="text-apple-gray-600 mb-4">
              Stay compliant across borders with AI that monitors and implements country-specific regulations and requirements.
            </p>
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mt-auto">
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Card>
          
          <Card className="p-6 border-0 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-apple-gray-800">Localization Advisor</h4>
            <p className="text-apple-gray-600 mb-4">
              Receive market-specific guidance on cultural preferences, payment methods, and shopping behaviors to optimize your approach.
            </p>
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mt-auto">
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Card>
          
          <Card className="p-6 border-0 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-apple-gray-800">AI Market Assistant</h4>
            <p className="text-apple-gray-600 mb-4">
              Ask questions and receive expert guidance on any aspect of global e-commerce with our conversational AI assistant.
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

export default AIKnowledge;
