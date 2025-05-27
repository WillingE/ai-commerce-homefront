import { ArrowRight, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import InstantAIExpertise from "../../public/lovable-uploads/InstantAIExpertise.avif";
import AnimatedElement from "./AnimatedElement";

const AIKnowledge = () => {
  return (
    <section id="ai-knowledge" className="py-32 bg-gradient-to-b from-white to-purple-50">
      <div className="container max-w-7xl mx-auto px-4">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-purple-100 px-5 py-3 rounded-full mb-4">
              <Database className="h-6 w-6 text-purple-600" />
              <span className="text-base font-medium text-purple-700">AI Knowledge</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-apple-gray-800 mb-5">
              Market Insights, Without Research
            </h2>
            <p className="text-xl text-apple-gray-600 max-w-3xl mx-auto">
              Harness the power of AI to understand markets, trends, and regulations without extensive manual research
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <AnimatedElement animation="fade-right" duration={1000} className="order-2 lg:order-1">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-apple-gray-800 leading-tight">
                Intelligent Market Research
              </h3>
              <p className="text-xl text-apple-gray-600">
                Our AI analyzes millions of data points across global markets to provide you with actionable insights on consumer preferences, trends, and competitive landscapes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-purple-500 text-xl mr-3">✓</span>
                  <span className="text-lg">Real-time competitive analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 text-xl mr-3">✓</span>
                  <span className="text-lg">Market-specific trend identification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 text-xl mr-3">✓</span>
                  <span className="text-lg">Opportunity gap detection and recommendations</span>
                </li>
              </ul>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-left" duration={1000} delay={200} className="order-1 lg:order-2">
            <Card className="overflow-hidden border-0 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <img 
                src={InstantAIExpertise} 
                alt="AI Knowledge Interface" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </Card>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedElement animation="fade-up" delay={0} duration={800}>
            <Card className="p-8 border-0 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-white">
              <h4 className="text-2xl font-semibold mb-4 text-apple-gray-800">Regulatory Compliance</h4>
              <p className="text-lg text-apple-gray-600 mb-6">
                Stay compliant across borders with AI that monitors and implements country-specific regulations and requirements.
              </p>
              <a href="#" className="inline-flex items-center text-lg text-purple-600 hover:text-purple-800 font-medium mt-auto group">
                Learn more <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Card>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" delay={150} duration={800}>
            <Card className="p-8 border-0 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-white">
              <h4 className="text-2xl font-semibold mb-4 text-apple-gray-800">Localization Advisor</h4>
              <p className="text-lg text-apple-gray-600 mb-6">
                Receive market-specific guidance on cultural preferences, payment methods, and shopping behaviors to optimize your approach.
              </p>
              <a href="#" className="inline-flex items-center text-lg text-purple-600 hover:text-purple-800 font-medium mt-auto group">
                Learn more <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Card>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" delay={300} duration={800}>
            <Card className="p-8 border-0 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-white">
              <h4 className="text-2xl font-semibold mb-4 text-apple-gray-800">AI Market Assistant</h4>
              <p className="text-lg text-apple-gray-600 mb-6">
                Ask questions and receive expert guidance on any aspect of global e-commerce with our conversational AI assistant.
              </p>
              <a href="#" className="inline-flex items-center text-lg text-purple-600 hover:text-purple-800 font-medium mt-auto group">
                Learn more <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default AIKnowledge;
