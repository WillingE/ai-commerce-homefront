import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Image, FileFolder, FileText, Tag, Upload } from "lucide-react";

const StudioFeatures = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-800 mb-3">
            AI Studio
          </h2>
          <p className="text-xl text-apple-gray-600 max-w-3xl mx-auto">
            Create compelling product listings with AI-powered optimization tools
          </p>
        </div>

        {/* Category Feature */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                  <FileFolder className="h-5 w-5 text-blue-600" />
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

        {/* Image Feature */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="overflow-hidden border-0 rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 gap-4 p-6">
                  <div>
                    <p className="text-center text-sm font-medium text-apple-gray-500 mb-2">Before</p>
                    <img 
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80" 
                      alt="Before AI Image Enhancement" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-center text-sm font-medium text-apple-gray-500 mb-2">After</p>
                    <img 
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=90&w=400&h=400&auto=enhance" 
                      alt="After AI Image Enhancement" 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                  <Image className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">AI Image Studio</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-apple-gray-800">
                  Perfect Product Images, Automatically
                </h3>
                <p className="text-lg text-apple-gray-600">
                  Transform ordinary product photos into professional-grade images with our AI enhancement technology that removes backgrounds, corrects lighting, and optimizes for every marketplace.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>One-click background removal and enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Automatic resizing for different marketplace requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Increased click-through rates with professional imagery</span>
                  </li>
                </ul>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  See how image enhancement works <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Title & Description Feature */}
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

        {/* Attribute Feature */}
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

        {/* Publish Feature */}
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
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  See publishing in action <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Card className="overflow-hidden border-0 rounded-2xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80" 
                  alt="One-Click Publishing" 
                  className="w-full h-auto object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioFeatures;
