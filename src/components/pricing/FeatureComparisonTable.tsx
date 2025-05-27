import React from "react";
import { Check, Minus } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AnimatedElement from "../AnimatedElement";

const FeatureComparisonTable = () => {
  const featureGroups = [
    {
      name: "Studio Features",
      features: [
        {
          name: "AI Listing Creator",
          starter: true,
          growth: true,
          enterprise: true,
        },
        {
          name: "Smart Image Optimization",
          starter: "100/month",
          growth: "500/month",
          enterprise: "Unlimited",
        },
        {
          name: "AI Content Enhancement",
          starter: false,
          growth: true,
          enterprise: true,
        },
        {
          name: "Multilingual SEO",
          starter: false,
          growth: true,
          enterprise: true,
        },
      ],
    },
    {
      name: "Listing Manager",
      features: [
        {
          name: "Cross-Border Listings",
          starter: "5 markets",
          growth: "15 markets",
          enterprise: "Unlimited",
        },
        {
          name: "Auto-Translation",
          starter: "3 languages",
          growth: "15 languages",
          enterprise: "All languages",
        },
        {
          name: "Bulk Editing",
          starter: false,
          growth: true,
          enterprise: true,
        },
        {
          name: "Custom Fields",
          starter: false,
          growth: "Up to 10",
          enterprise: "Unlimited",
        },
      ],
    },
    {
      name: "Support & Integration",
      features: [
        {
          name: "Email Support",
          starter: "48h response",
          growth: "24h response",
          enterprise: "Dedicated",
        },
        {
          name: "Chat Support",
          starter: false,
          growth: true,
          enterprise: true,
        },
        {
          name: "API Access",
          starter: false,
          growth: "Limited",
          enterprise: "Full access",
        },
        {
          name: "Marketplace Integrations",
          starter: "2",
          growth: "10",
          enterprise: "All available",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <AnimatedElement animation="fade-up" duration={800}>
          <h2 className="text-3xl md:text-4xl font-medium text-apple-gray-800 mb-10 text-center">
            Compare All Features
          </h2>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-up" delay={300} duration={800}>
          <div className="overflow-x-auto rounded-xl shadow-lg border border-apple-gray-200">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-apple-gray-100">
                  <TableHead className="w-1/4 py-5 text-apple-gray-800 text-base">Feature</TableHead>
                  <TableHead className="text-center py-5 text-apple-gray-800 text-base">Starter</TableHead>
                  <TableHead className="text-center py-5 text-apple-gray-800 text-base">Growth</TableHead>
                  <TableHead className="text-center py-5 text-apple-gray-800 text-base">Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {featureGroups.map((group, groupIndex) => (
                  <React.Fragment key={group.name}>
                    <TableRow>
                      <TableCell 
                        colSpan={4} 
                        className="bg-apple-gray-50 font-medium text-apple-gray-800 py-4 text-base"
                      >
                        {group.name}
                      </TableCell>
                    </TableRow>
                    
                    {group.features.map((feature, featureIndex) => (
                      <TableRow key={feature.name} className="hover:bg-apple-gray-50 transition-colors">
                        <TableCell className="py-4 font-medium">{feature.name}</TableCell>
                        <TableCell className="text-center">
                          {typeof feature.starter === "boolean" ? (
                            feature.starter ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <Minus className="h-5 w-5 text-apple-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm text-apple-gray-600">{feature.starter}</span>
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          {typeof feature.growth === "boolean" ? (
                            feature.growth ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <Minus className="h-5 w-5 text-apple-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm text-apple-gray-600">{feature.growth}</span>
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          {typeof feature.enterprise === "boolean" ? (
                            feature.enterprise ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <Minus className="h-5 w-5 text-apple-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm text-apple-gray-600">{feature.enterprise}</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default FeatureComparisonTable;
