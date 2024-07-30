//component-module
import Slider from "../module/Slider";
import Services from "../module/Services";
import HeroSection from "../module/HeroSection";
import Discountcomponent from "../module/Discountcomponent";
import MultiServicesComponent from "../module/MultiServicesComponent";

function HomePage() {
  return (
    <div className="dark:bg-slate-800 dark:text-white transition-all duration-300 ease-in">
      <Slider />
      <Services />
      <HeroSection />
      <Discountcomponent />
      <MultiServicesComponent />
    </div>
  );
}

export default HomePage;
