import AboutDeveloper from "@/components/AboutDeveloper";
import AboutSection from "@/components/AboutSection";
import Amenities from "@/components/Amenities";
import ConnectivitySection from "@/components/ConnectivitySection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Highlights from "@/components/Highlights";
import LocationSection from "@/components/LocationSection";
import PlansSection from "@/components/PlansSection";
import PricingSection from "@/components/PricingSection";
import ProjectGallery from "@/components/ProjectGallery";
import SiteVisitSection from "@/components/SiteVisitSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <Highlights />
      <PricingSection />
      <PlansSection />
      <Amenities />
      <ProjectGallery />
      <LocationSection />
      <ConnectivitySection />
      <AboutDeveloper />
      <SiteVisitSection />
      <Footer />
    </div>
  );
}
