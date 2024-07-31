import Slider from "../module/Slider";
import Services from "../module/Services";
import HeroSection from "../module/HeroSection";
import Discountcomponent from "../module/Discountcomponent";
import MultiServicesComponent from "../module/MultiServicesComponent";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { usetitle } from "@/helpers/changetitlename";

function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedOpening");

    if (!hasVisited) {
      localStorage.setItem("hasVisitedOpening", "true");
      router.push("/opening");
    }
  }, [router]);

  useEffect(() => {
    usetitle("کانکت");
  }, []);

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
