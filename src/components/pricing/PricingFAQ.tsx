import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedElement from "../AnimatedElement";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Yes, you can easily change your plan at any time from your account settings. When upgrading, you'll be prorated for the remaining time in your billing cycle. When downgrading, changes will take effect at the start of your next billing period."
    },
    {
      question: "Is there a contract or commitment period?",
      answer: "Our monthly plans have no long-term contracts. You can cancel anytime. Annual plans are billed upfront for the year and offer a 20% discount compared to monthly billing."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. Enterprise customers may arrange for invoiced payments with our finance team."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial on our Starter and Growth plans, no credit card required. This gives you full access to all features included in those plans so you can thoroughly evaluate our platform."
    },
    {
      question: "What kind of support can I expect?",
      answer: "All plans include email support. Growth plans and above include priority support with faster response times. Enterprise plans include a dedicated account manager and personalized onboarding."
    }
  ];

  return (
    <section className="py-16 bg-apple-gray-50">
      <div className="container max-w-4xl mx-auto px-4">
        <AnimatedElement animation="fade-up" duration={800}>
          <h2 className="text-3xl font-semibold text-apple-gray-800 mb-10 text-center">
            Frequently Asked Questions
          </h2>
        </AnimatedElement>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AnimatedElement key={index} animation="fade-up" delay={index * 150} duration={800}>
              <AccordionItem value={`item-${index}`} className="border-b border-apple-gray-200">
                <AccordionTrigger className="text-lg text-apple-gray-800 hover:text-blue-500 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-apple-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </AnimatedElement>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default PricingFAQ;
