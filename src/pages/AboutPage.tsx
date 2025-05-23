
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandStory from "@/components/about/BrandStory";
import CoreTeam from "@/components/about/CoreTeam";
import ContactSection from "@/components/about/ContactSection";
import AboutHeader from "@/components/about/AboutHeader";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHeader />
        <MissionVision />
        <CoreValues />
        <BrandStory />
        <CoreTeam />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
