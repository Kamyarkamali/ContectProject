//component-module
import Slider from "../module/Slider";
import Services from "../module/Services";
import HeroSection from "../module/HeroSection";
import Discountcomponent from "../module/Discountcomponent";
import MultiServicesComponent from "../module/MultiServicesComponent";

function HomePage() {
  return (
    <div>
      <Slider />
      <Services />
      <HeroSection />
      <Discountcomponent />
      <MultiServicesComponent />
    </div>
  );
}

export default HomePage;
