
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-apple-gray-800 mb-6">
            与我们联系
          </h2>
          <p className="text-apple-gray-600 max-w-2xl mb-10">
            无论您是有产品疑问，合作提案，还是希望加入我们的团队，我们都很乐意听取您的想法和需求。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
            <div className="flex flex-col items-center p-6">
              <div className="bg-blue-50 rounded-full p-4 mb-4">
                <Mail className="h-6 w-6 text-apple-blue" />
              </div>
              <h3 className="text-lg font-medium text-apple-gray-800 mb-2">电子邮件</h3>
              <a href="mailto:contact@homywork.com" className="text-apple-blue hover:underline">
                contact@homywork.com
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6">
              <div className="bg-blue-50 rounded-full p-4 mb-4">
                <MapPin className="h-6 w-6 text-apple-blue" />
              </div>
              <h3 className="text-lg font-medium text-apple-gray-800 mb-2">总部地址</h3>
              <p className="text-apple-gray-600 text-center">
                上海市浦东新区张江高科技园区
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6">
              <div className="bg-blue-50 rounded-full p-4 mb-4">
                <Send className="h-6 w-6 text-apple-blue" />
              </div>
              <h3 className="text-lg font-medium text-apple-gray-800 mb-2">加入我们</h3>
              <a href="mailto:careers@homywork.com" className="text-apple-blue hover:underline">
                careers@homywork.com
              </a>
            </div>
          </div>
          
          <Button className="mt-12">
            预约演示
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
