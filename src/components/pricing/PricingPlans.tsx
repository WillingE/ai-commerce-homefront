import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import AnimatedElement from "../AnimatedElement";

const PricingPlans = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses exploring global markets",
      features: [
        "AI Listing Creator",
        "100 AI-enhanced images per month",
        "3 supported languages for translations",
        "5 marketplace integrations",
        "Basic analytics dashboard",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Growth",
      price: "$149",
      period: "/month",
      description: "For businesses ready to scale their global presence",
      features: [
        "Everything in Starter",
        "500 AI-enhanced images per month",
        "15 supported languages for translations",
        "15 marketplace integrations",
        "Advanced analytics & reporting",
        "Bulk listing management",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale global operations and custom needs",
      features: [
        "Everything in Growth",
        "Unlimited AI-enhanced images",
        "All supported languages",
        "Unlimited marketplace integrations",
        "Custom AI model training",
        "Dedicated account manager",
        "24/7 priority support",
        "Full API access & custom integrations",
        "Enterprise SLA",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className="py-16 bg-apple-gray-100">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <AnimatedElement key={plan.name} animation="fade-up" delay={index * 200} duration={800}>
              <Card 
                className={`flex flex-col h-full border-2 ${
                  plan.popular ? "border-blue-500" : "border-transparent"
                } shadow-sm hover:shadow-lg transition-shadow duration-300`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white py-1 px-3 text-sm font-medium text-center rounded-t-md">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <h3 className="text-2xl font-medium text-apple-gray-800">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-semibold">{plan.price}</span>
                    <span className="ml-1 text-apple-gray-600">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-apple-gray-500">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-apple-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.popular ? "bg-blue-500 hover:bg-blue-600" : ""}`}
                    variant={plan.name === "Enterprise" ? "outline" : "default"}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
