import AnimatedElement from "../AnimatedElement";

const AboutHeader = () => {
  return (
    <section className="bg-white pt-24 pb-14">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement animation="fade-down" duration={1000}>
            <h1 className="text-5xl md:text-6xl font-semibold text-apple-gray-800 mb-6 tracking-tight">
              About Us
            </h1>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" delay={300} duration={1000}>
            <p className="text-xl text-apple-gray-600 max-w-2xl mx-auto">
              We're building the future of cross-border e-commerce with AI-powered tools that help businesses reach global markets.
            </p>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
