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
import SobhaProjectsSector106 from "@/components/SobhaProjectsSector106";
// import SobhaAltusSection from "@/components/SobhaProjectsSector106";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <div id="highlights">
        <Highlights />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="floor-plan">
        <PlansSection />
      </div>
      <div id="amenities">
        <Amenities />
      </div>
      <div id="gallery">
        <ProjectGallery />
      </div>
      <div id="location">
        <LocationSection />
      </div>
      <ConnectivitySection />
      <SobhaProjectsSector106 />
      <AboutDeveloper />
      <SiteVisitSection />
      <Footer />
    </div>
  );
}
