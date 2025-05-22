
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPlans = () => {
  const plans = [
    {
      name: "免费版",
      price: "¥0",
      period: "/月",
      description: "适合刚起步的个人卖家，体验基础AI功能。",
      features: [
        "AI产品图片优化 (每月20张)",
        "AI标题生成 (支持1种语言)",
        "基础Listing管理",
        "社区支持"
      ],
      ctaText: "免费开始",
      primary: false
    },
    {
      name: "专业版",
      price: "¥299",
      period: "/月",
      description: "适合成长中的中小型卖家，提升跨境业绩。",
      features: [
        "AI产品图片优化 (每月200张)",
        "AI标题与描述生成 (支持5种语言)",
        "高级Listing管理与分析",
        "市场趋势洞察",
        "优先客户支持"
      ],
      ctaText: "选择专业版",
      primary: true
    },
    {
      name: "企业版",
      price: "定制",
      period: "",
      description: "适合大型企业与跨国卖家，全方位AI赋能。",
      features: [
        "无限AI产品图片优化",
        "AI标题与描述生成 (支持全部语言)",
        "高级Listing管理与分析",
        "定制化市场洞察与预测",
        "专属客户成功经理"
      ],
      ctaText: "联系销售",
      primary: false
    }
  ];

  return (
    <section className="bg-white py-12 pb-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-3xl p-8 flex flex-col h-full border ${
                plan.primary 
                  ? 'border-apple-blue bg-gradient-to-b from-blue-50 to-white shadow-lg' 
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.primary && (
                <div className="mb-4">
                  <span className="bg-apple-blue text-white text-sm font-medium px-3 py-1 rounded-full">
                    最受欢迎
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-medium text-apple-gray-800 mb-2">
                {plan.name}
              </h3>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-apple-gray-800">{plan.price}</span>
                <span className="text-apple-gray-600">{plan.period}</span>
              </div>
              
              <p className="text-apple-gray-600 mb-6">
                {plan.description}
              </p>
              
              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-apple-blue mt-0.5 mr-3 shrink-0" />
                    <span className="text-apple-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto">
                <Button 
                  className={`w-full ${
                    plan.primary ? '' : 'bg-white border-2 border-apple-blue text-apple-blue hover:bg-blue-50'
                  }`}
                  variant={plan.primary ? 'default' : 'outline'}
                >
                  {plan.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
