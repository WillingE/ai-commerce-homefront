import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import Person1 from "../../../public/lovable-uploads/person1.avif";
import Person2 from "../../../public/lovable-uploads/person2.avif";
import Person3 from "../../../public/lovable-uploads/person3.avif";
import AnimatedElement from "../AnimatedElement";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Co-Founder & CEO",
    bio: "Previously led global expansion at a major e-commerce marketplace. Expert in cross-border trade and AI applications in commerce.",
    image: Person1,
  },
  {
    name: "Michael Park",
    role: "Co-Founder & CTO",
    bio: "AI researcher with experience at leading tech companies. Passionate about making machine learning accessible for businesses of all sizes.",
    image: Person2,
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Product",
    bio: "Product leader with 10+ years experience building tools for international businesses. Focused on creating intuitive, powerful solutions.",
    image: Person3,
  }
];

const CoreTeam = () => {
  return (
    <section className="py-24 bg-apple-gray-100">
      <div className="container max-w-7xl mx-auto px-4">
        <AnimatedElement animation="fade-down" duration={800}>
          <h2 className="text-3xl md:text-4xl font-medium text-apple-gray-800 text-center mb-4">
            Our Leadership
          </h2>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-up" delay={200} duration={800}>
          <p className="text-lg text-apple-gray-600 text-center max-w-3xl mx-auto mb-16">
            Meet the team behind Homywork's vision to transform cross-border e-commerce with AI.
          </p>
        </AnimatedElement>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <AnimatedElement key={member.name} animation="fade-up" delay={400 + (index * 200)} duration={800}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="pt-6 pb-8 px-8">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-medium text-apple-gray-800">{member.name}</h3>
                      <p className="text-apple-gray-500 mb-3">{member.role}</p>
                    </div>
                    <a href="#" className="text-apple-blue hover:text-opacity-80 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="text-apple-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
