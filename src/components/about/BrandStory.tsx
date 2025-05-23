
import React from "react";

const BrandStory = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-medium text-apple-gray-800 text-center mb-12">
          我们的故事
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/954091c7-15ee-4299-a10c-43324a416a36.png" 
              alt="Our journey" 
              className="rounded-2xl shadow-lg w-full h-auto" 
            />
          </div>
          <div>
            <p className="text-apple-gray-600 mb-6 leading-relaxed">
              Homywork 诞生于2021年，由一群对AI技术和跨境电商充满热情的技术专家和行业资深人士共同创立。起初，我们只是希望解决自己在全球化业务扩张时遇到的语言障碍和文化差异问题。
            </p>
            <p className="text-apple-gray-600 mb-6 leading-relaxed">
              在探索过程中，我们发现传统的跨境电商工具无法满足日益增长的个性化和智能化需求。通过持续研发和市场验证，我们开发了一套基于AI的全方位解决方案，帮助卖家轻松应对全球多语言、多文化市场的挑战。
            </p>
            <p className="text-apple-gray-600 leading-relaxed">
              如今，Homywork 已服务超过1000家跨境电商企业，覆盖20多个国家和地区，并持续引领行业创新，为卖家提供更智能、更高效的全球化业务拓展工具。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
