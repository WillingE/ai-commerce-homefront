
import { cn } from "@/lib/utils";

// Updated logos to use the uploaded images
const logos = [
  { 
    id: 1, 
    name: "Amazon", 
    url: "/lovable-uploads/f25fc616-1897-4001-a256-e1d769333a09.png" 
  },
  { 
    id: 2, 
    name: "Walmart", 
    url: "/lovable-uploads/6e0b8e5d-7f51-4a93-b271-9e8307c3dfb2.png" 
  },
  { 
    id: 3, 
    name: "Wayfair", 
    url: "/lovable-uploads/7331360f-1c63-4a01-8a26-ca608cba4d57.png" 
  },
  { 
    id: 4, 
    name: "TEMU", 
    url: "/lovable-uploads/954091c7-15ee-4299-a10c-43324a416a36.png" 
  },
  { 
    id: 5, 
    name: "Maisons du Monde", 
    url: "/lovable-uploads/7258290f-386d-4475-b95e-27fc6b88308f.png" 
  },
  { 
    id: 6, 
    name: "Shopify", 
    url: "/lovable-uploads/3f168a33-6e11-49b8-9856-4ad9c16f58bc.png" 
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Heading */}
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
                  className="h-10 md:h-12 object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
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
