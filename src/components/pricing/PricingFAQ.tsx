
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "我可以随时更改我的方案吗？",
      answer: "是的，您可以随时从账户设置中轻松升级或降级您的方案。对于月付用户，更改将在下一个结算周期生效；对于年付用户，降级将在当前订阅到期后生效，升级则会按比例收取差价。"
    },
    {
      question: "是否有长期合约或承诺期？",
      answer: "我们的月付方案没有长期合约，您可以随时取消。年付方案需要一次性支付整年费用，提供更多优惠，但不支持中途退款。"
    },
    {
      question: "支持哪些支付方式？",
      answer: "我们接受所有主要信用卡、PayPal、微信支付和支付宝。企业客户可以通过银行转账付款，请联系我们的销售团队了解详情。"
    },
    {
      question: "如果我需要超出我当前方案的使用量，会怎样？",
      answer: "当您接近方案限制时，系统会通知您。您可以选择升级到更高级别的方案，或针对某些功能购买一次性附加包。我们确保您的业务不会因为使用限制而中断。"
    },
    {
      question: "是否提供退款？",
      answer: "对于月付方案，我们不提供部分月退款，但您可以取消服务以防止future charges。对于年付方案，在购买后14天内，如果您不满意，我们提供全额退款政策。"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-2xl md:text-3xl font-medium text-apple-gray-800 text-center mb-10">
          常见问题
        </h2>
        
        <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="px-6 text-apple-gray-800 font-medium text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-apple-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default PricingFAQ;
