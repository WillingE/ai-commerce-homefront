
import { cn } from "@/lib/utils";

// Updated logos to match the major marketplaces shown in the image
const logos = [
  { id: 1, name: "Amazon", url: "https://via.placeholder.com/150x50" },
  { id: 2, name: "Walmart", url: "https://via.placeholder.com/150x50" },
  { id: 3, name: "Wayfair", url: "https://via.placeholder.com/150x50" },
  { id: 4, name: "TEMU", url: "https://via.placeholder.com/150x50" },
  { id: 5, name: "Maisons du Monde", url: "https://via.placeholder.com/150x50" },
  { id: 6, name: "Shopify", url: "https://via.placeholder.com/150x50" },
];

const SocialProofSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Updated heading to match the image */}
          <h2 className="text-2xl md:text-3xl text-apple-gray-600 mb-12 text-center font-light">
            Trusted by Sellers Across Major Marketplaces
          </h2>
          
          {/* Client logos in a clean horizontal layout */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 bg-white p-10 rounded-lg">
            {logos.map((logo) => (
              <div key={logo.id} className="flex items-center">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-8 md:h-10 object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
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
