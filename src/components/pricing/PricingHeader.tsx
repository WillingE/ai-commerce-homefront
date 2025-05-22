
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingHeader = () => {
  return (
    <section className="bg-white pt-20 pb-10">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-medium text-apple-gray-800 mb-4">
          选择适合您的方案
        </h1>
        <p className="text-apple-gray-600 text-lg max-w-2xl mx-auto mb-6">
          我们提供多种方案以满足不同规模卖家的需求，从初创企业到大型跨国公司。
        </p>
      </div>
    </section>
  );
};

export default PricingHeader;
