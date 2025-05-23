
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";

const FeatureComparison = () => {
  const features = [
    {
      category: "AI产品图片优化",
      items: [
        { name: "基础图片优化", free: true, pro: true, enterprise: true },
        { name: "批量图片处理", free: false, pro: true, enterprise: true },
        { name: "高级图片编辑选项", free: false, pro: true, enterprise: true },
        { name: "每月图片数量", free: "20张/月", pro: "200张/月", enterprise: "无限" }
      ]
    },
    {
      category: "AI内容生成",
      items: [
        { name: "标题生成", free: true, pro: true, enterprise: true },
        { name: "产品描述生成", free: false, pro: true, enterprise: true },
        { name: "关键词优化", free: false, pro: true, enterprise: true },
        { name: "支持语言数量", free: "1种", pro: "5种", enterprise: "所有语言" }
      ]
    },
    {
      category: "Listing管理",
      items: [
        { name: "基础Listing分析", free: true, pro: true, enterprise: true },
        { name: "竞品监控", free: false, pro: true, enterprise: true },
        { name: "批量编辑与管理", free: false, pro: true, enterprise: true },
        { name: "跨平台Listing同步", free: false, pro: false, enterprise: true }
      ]
    },
    {
      category: "数据与分析",
      items: [
        { name: "基础销售数据", free: true, pro: true, enterprise: true },
        { name: "市场趋势分析", free: false, pro: true, enterprise: true },
        { name: "自定义报表", free: false, pro: false, enterprise: true },
        { name: "AI预测分析", free: false, pro: false, enterprise: true }
      ]
    },
    {
      category: "客户支持",
      items: [
        { name: "社区支持", free: true, pro: true, enterprise: true },
        { name: "邮件支持", free: false, pro: true, enterprise: true },
        { name: "优先响应", free: false, pro: true, enterprise: true },
        { name: "专属客户经理", free: false, pro: false, enterprise: true },
        { name: "培训与咨询", free: false, pro: false, enterprise: true }
      ]
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-medium text-apple-gray-800 text-center mb-10">
          功能详细对比
        </h2>
        
        <div className="overflow-x-auto">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-1/3 font-medium text-apple-gray-800">功能</TableHead>
                <TableHead className="text-center font-medium text-apple-gray-800">免费版</TableHead>
                <TableHead className="text-center font-medium text-apple-gray-800">专业版</TableHead>
                <TableHead className="text-center font-medium text-apple-gray-800">企业版</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <TableRow className="bg-gray-50">
                    <TableCell colSpan={4} className="font-medium text-apple-gray-700">
                      {category.category}
                    </TableCell>
                  </TableRow>
                  {category.items.map((feature, featureIndex) => (
                    <TableRow key={`${categoryIndex}-${featureIndex}`} className="border-b border-gray-100">
                      <TableCell className="text-apple-gray-700">{feature.name}</TableCell>
                      <TableCell className="text-center">
                        {typeof feature.free === 'boolean' ? (
                          feature.free ? 
                            <Check className="h-5 w-5 text-apple-blue mx-auto" /> : 
                            <X className="h-5 w-5 text-gray-300 mx-auto" />
                        ) : (
                          <span className="text-apple-gray-700">{feature.free}</span>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {typeof feature.pro === 'boolean' ? (
                          feature.pro ? 
                            <Check className="h-5 w-5 text-apple-blue mx-auto" /> : 
                            <X className="h-5 w-5 text-gray-300 mx-auto" />
                        ) : (
                          <span className="text-apple-gray-700">{feature.pro}</span>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? 
                            <Check className="h-5 w-5 text-apple-blue mx-auto" /> : 
                            <X className="h-5 w-5 text-gray-300 mx-auto" />
                        ) : (
                          <span className="text-apple-gray-700">{feature.enterprise}</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;
