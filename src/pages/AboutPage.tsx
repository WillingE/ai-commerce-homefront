import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHeader from "@/components/about/AboutHeader";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import BrandStory from "@/components/about/BrandStory";
import CoreTeam from "@/components/about/CoreTeam";
import ContactSection from "@/components/about/ContactSection";
import SEO from "@/components/SEO";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About Homywork - Our Story and Mission"
        description="Learn about Homywork's journey to revolutionize cross-border e-commerce with AI technology and meet our team."
        canonical="https://homywork.com/about"
        keywords="homywork about, homywork team, homywork mission, homywork story"
      />
      <Navbar />
      <main className="flex-grow">
        <AboutHeader />
        <MissionVision />
        <CoreValues />
        <BrandStory />
        {/* <CoreTeam /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
