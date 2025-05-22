
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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

// Duplicate logos to create a continuous scrolling effect
const extendedLogos = [...logos, ...logos];

const SocialProofSection = () => {
  const autoplayOptions = useRef({
    delay: 9000, // Increased to 9000ms (9 seconds) to slow down the scrolling
    stopOnInteraction: false,
    rootNode: (emblaRoot: any) => emblaRoot.parentElement,
  });
  
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      dragFree: true,
      containScroll: "trimSnaps",
      slidesToScroll: 1,
      duration: 50, // Control animation duration (higher = slower transition)
    },
    [Autoplay(autoplayOptions.current)]
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl text-apple-gray-600 mb-12 text-center font-light">
            Trusted by Sellers Across Major Marketplaces
          </h2>
          
          {/* Client logos in a scrolling carousel */}
          <div className="w-full overflow-hidden bg-white p-6 rounded-lg">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex items-center">
                {extendedLogos.map((logo, index) => (
                  <div 
                    key={`${logo.id}-${index}`} 
                    className="flex-shrink-0 flex items-center justify-center min-w-[180px] px-6"
                  >
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="h-10 md:h-12 object-contain transition-all duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
