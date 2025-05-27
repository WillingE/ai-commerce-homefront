import { 
  TrendingUp, 
  Clock,
  Globe
} from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const benefits = [
  {
    id: 1,
    title: "Increased Efficiency",
    description: "Save hours with AI-powered automation that handles tedious tasks in seconds.",
    icon: <Clock className="h-10 w-10 text-apple-blue" />,
    stat: "70%",
    statLabel: "time saved"
  },
  {
    id: 2,
    title: "Enhanced Sales",
    description: "Convert more with optimized listings, perfect images, and AI-written descriptions.",
    icon: <TrendingUp className="h-10 w-10 text-apple-blue" />,
    stat: "32%",
    statLabel: "higher conversion"
  },
  {
    id: 3,
    title: "Global Scalability",
    description: "Expand to international markets with AI translation and localization.",
    icon: <Globe className="h-10 w-10 text-apple-blue" />,
    stat: "5x",
    statLabel: "market reach"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-apple-gray-100">
      <div className="container max-w-7xl mx-auto px-4">
        <AnimatedElement animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-apple-gray-800 mb-3">
              How AI Transforms Your Business
            </h2>
            <p className="text-xl text-apple-gray-600 max-w-3xl mx-auto">
              Tangible benefits that directly impact your bottom line
            </p>
          </div>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedElement 
              key={benefit.id} 
              animation="fade-up" 
              delay={index * 150} 
              duration={800}
            >
              <div className="bg-white p-8 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col items-center text-center">
                  <AnimatedElement animation="zoom-in" delay={index * 150 + 300}>
                    <div className="bg-blue-50 p-4 rounded-full mb-6 transition-transform hover:scale-110 duration-300">
                      {benefit.icon}
                    </div>
                  </AnimatedElement>
                  
                  <AnimatedElement animation="fade" delay={index * 150 + 400}>
                    <div className="flex items-baseline justify-center gap-1 mb-4">
                      <span className="text-4xl font-bold text-apple-blue">{benefit.stat}</span>
                      <span className="text-apple-gray-600">{benefit.statLabel}</span>
                    </div>
                  </AnimatedElement>
                  
                  <h3 className="text-xl font-semibold text-apple-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-apple-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
