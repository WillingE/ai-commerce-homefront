
import { cn } from "@/lib/utils";

const logos = [
  { id: 1, name: "Acme Corp", url: "https://via.placeholder.com/150x50" },
  { id: 2, name: "TechGiant", url: "https://via.placeholder.com/150x50" },
  { id: 3, name: "MegaStore", url: "https://via.placeholder.com/150x50" },
  { id: 4, name: "GlobalShop", url: "https://via.placeholder.com/150x50" },
  { id: 5, name: "PrimeRetail", url: "https://via.placeholder.com/150x50" },
];

const SocialProofSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Featured testimonial */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <svg
              className="h-12 w-12 text-gray-300 mx-auto mb-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
            </svg>
            <blockquote>
              <p className="text-2xl md:text-3xl font-light italic text-apple-gray-800 mb-8">
                "AI Commerce's platform revolutionized our approach to international e-commerce. 
                We've expanded to 12 new markets while reducing our workload by half."
              </p>
            </blockquote>
            <div className="flex items-center justify-center">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1579102813635-18c0233e674f?auto=format&fit=crop&q=80"
                alt="Testimonial author"
              />
              <div className="ml-3 text-left">
                <p className="text-sm font-medium text-apple-gray-800">Sarah Johnson</p>
                <p className="text-sm text-apple-gray-500">E-Commerce Director, Global Retail Inc.</p>
              </div>
            </div>
          </div>
          
          {/* Client logos */}
          <p className="text-sm uppercase tracking-wider text-apple-gray-500 mb-6">
            Trusted by leading e-commerce brands
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {logos.map((logo) => (
              <div key={logo.id} className="flex items-center">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-10 md:h-12 object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
