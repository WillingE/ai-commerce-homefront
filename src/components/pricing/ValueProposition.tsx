
import React from "react";
import { Button } from "@/components/ui/button";

const ValueProposition = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-apple-gray-800 mb-4">
          选择赋能您全球增长的AI伙伴
        </h2>
        <p className="text-apple-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          从今天开始，智能化您的跨境电商业务，开启无界限的全球销售之旅。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg">
            免费开始
          </Button>
          <Button variant="outline" size="lg">
            联系销售顾问
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
