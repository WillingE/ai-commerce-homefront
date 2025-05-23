
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-apple-gray-800 mb-6">
            Get in Touch
          </h2>
          
          <p className="text-lg text-apple-gray-600 mb-12">
            Have questions about how Homywork can help your business go global? We'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-apple-gray-100 p-8 rounded-2xl">
              <div className="flex flex-col items-center">
                <Mail className="h-10 w-10 text-apple-blue mb-4" />
                <h3 className="text-xl font-medium text-apple-gray-800 mb-2">Contact Us</h3>
                <p className="text-apple-gray-600 mb-6 text-center">
                  Reach out to our team for any questions or inquiries.
                </p>
                <Button>
                  Email Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="bg-apple-gray-100 p-8 rounded-2xl">
              <div className="flex flex-col items-center">
                <MapPin className="h-10 w-10 text-apple-blue mb-4" />
                <h3 className="text-xl font-medium text-apple-gray-800 mb-2">Join Our Team</h3>
                <p className="text-apple-gray-600 mb-6 text-center">
                  We're always looking for passionate talent to join our mission.
                </p>
                <Button variant="outline">
                  See Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
