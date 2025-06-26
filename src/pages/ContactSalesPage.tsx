"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import axios from "axios";
import { Toaster,toast } from "sonner";

export default function ContactSalesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      const res = await axios.post("/ai/contactSales/submitContactSales", data);
      if (res.data.flag) {
        toast.success("success", {
          position: "top-center",
          style: {
            background: '#ecfdf3',
            color: '#008a2e',
            border: 'none'
          }
        });
      } else {
        toast.error(res.data.msg || "error", {
          position: "top-center",
          style: {
            background: '#fef2f2',
            color: '#dc2626',
            border: 'none'
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Contact Kekari - Reach Out to Our Team"
        description="Send us a message to learn how Kekari can help your business grow globally using AI."
        canonical="https://kekari.com/contact-sales"
        keywords="contact kekari, kekari support, kekari sales"
      />
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4 bg-gray-50">
        {/* Your animated form */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className={`min-h-screen bg-gray-50 flex items-center justify-center p-4 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Card
              className={`w-full max-w-2xl shadow-sm border-0 bg-white/80 backdrop-blur-sm transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              }`}
            >
              <CardHeader
                className={`text-center space-y-4 pb-8 transition-all duration-800 ease-out delay-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <CardTitle className="text-3xl font-light text-gray-900">
                  Get in Touch
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 font-light">
                  We'd love to hear from you. Send us a message and we'll
                  respond as soon as possible.
                </CardDescription>
              </CardHeader>

              <CardContent
                className={`space-y-6 transition-all duration-800 ease-out delay-600 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700"
                      >
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="profession"
                        className="text-sm font-medium text-gray-700"
                      >
                        Profession
                      </Label>
                      <Input
                        id="profession"
                        name="profession"
                        type="text"
                        className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg"
                        placeholder="Your profession"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700"
                    >
                      How can we help you?
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg resize-none"
                      placeholder="Tell us about your project, questions, or how we can assist you..."
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                    >
                      Send Message
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and
                    terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
