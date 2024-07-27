import React from "react";
import Slider from "../module/Slider";
import Services from "../module/Services";
import HeroSection from "../module/HeroSection";
import Discountcomponent from "../module/Discountcomponent";

function HomePage() {
  return (
    <div>
      <Slider />
      <Services />
      <HeroSection />
      <Discountcomponent />
    </div>
  );
}

export default HomePage;
