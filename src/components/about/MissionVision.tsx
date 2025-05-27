import AnimatedElement from "../AnimatedElement";

const MissionVision = () => {
  return (
    <section className="py-24 bg-apple-gray-100">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <AnimatedElement animation="fade-right" duration={1000}>
            <div className="bg-white p-12 rounded-2xl shadow-sm">
              <h2 className="text-3xl font-medium text-apple-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-apple-gray-600">
                To empower businesses of all sizes to succeed globally by breaking down language, cultural, and technical barriers in cross-border e-commerce.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-left" duration={1000} delay={200}>
            <div className="bg-white p-12 rounded-2xl shadow-sm">
              <h2 className="text-3xl font-medium text-apple-gray-800 mb-6">Our Vision</h2>
              <p className="text-lg text-apple-gray-600">
                A world where any business, regardless of size or location, can seamlessly reach customers anywhere, with AI-powered tools making global commerce as easy as local.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
