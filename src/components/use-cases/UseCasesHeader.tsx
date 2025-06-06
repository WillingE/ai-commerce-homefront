import AnimatedElement from "../AnimatedElement";

const UseCasesHeader = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <AnimatedElement animation="fade-down" duration={1000}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-apple-gray-800 mb-6 tracking-tight">
            Real Results, Real Growth
          </h1>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-up" delay={300} duration={1000}>
          <p className="text-xl md:text-2xl text-apple-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how businesses like yours are achieving extraordinary outcomes with our intelligent AI platform.
          </p>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default UseCasesHeader;
