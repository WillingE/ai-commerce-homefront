import AnimatedElement from "../AnimatedElement";

const PricingHeader = () => {
  return (
    <section className="bg-white pt-24 pb-14">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement animation="fade-down" duration={1000}>
            <h1 className="text-5xl md:text-6xl font-semibold text-apple-gray-800 mb-6 tracking-tight">
              Simple, Transparent Pricing
            </h1>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" delay={300} duration={1000}>
            <p className="text-xl text-apple-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. Scale your global reach with the power of AI.
            </p>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default PricingHeader;
