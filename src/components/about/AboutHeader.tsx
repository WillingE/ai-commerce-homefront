import AnimatedElement from "../AnimatedElement";

const AboutHeader = () => {
  return (
    <section className="bg-white pt-24 pb-14">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement animation="fade-down" duration={1000}>
            <h1 className="text-5xl md:text-6xl font-semibold text-apple-gray-800 mb-6 tracking-tight">
              About Homywork
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="fade-down" duration={1000}>
            <h3 className="text-2xl md:text-3xl font-semibold text-apple-gray-800 mb-6 tracking-tight">
              The always-on AI manager for furniture e-commerce.
            </h3>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" delay={300} duration={1000}>
            <p className="text-xl text-apple-gray-600 max-w-4xl mx-auto">
              Homywork is your AI-native command center for running and scaling a storefront. From real-time edits and pricing changes to keyword tracking, A/B testing, and multi-market visibility, Homywork acts as your 24/7 operations partner.
            </p>
            <br />
            <p className="text-xl text-apple-gray-600 max-w-4xl mx-auto">
              Built specifically for home furnishing sellers, our system learns from every product, marketplace, and decision, so your storefront gets smarter, faster, and more profitable with every interaction.
            </p>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
