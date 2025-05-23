
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-apple-gray-100">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-apple-gray-800 mb-6">
            Get in Touch
          </h2>
          
          <p className="text-lg text-apple-gray-600 mb-14">
            Have questions about how Homywork can help your business go global? We'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-6">
                  <Mail className="h-8 w-8 text-apple-blue" />
                </div>
                <h3 className="text-xl font-medium text-apple-gray-800 mb-3">Contact Us</h3>
                <p className="text-apple-gray-600 mb-8 text-center">
                  Reach out to our team for any questions or inquiries.
                </p>
                <Button className="group">
                  Email Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-6">
                  <MapPin className="h-8 w-8 text-apple-blue" />
                </div>
                <h3 className="text-xl font-medium text-apple-gray-800 mb-3">Join Our Team</h3>
                <p className="text-apple-gray-600 mb-8 text-center">
                  We're always looking for passionate talent to join our mission.
                </p>
                <Button variant="outline" className="border-apple-gray-300 group">
                  See Open Positions
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
