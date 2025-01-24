import HowManyProjectsIWorked from "@/components/about/HowManyProjectsIWorked";
import AnimatedCircle from "@/components/animatedCircle/AnimatedCircle";
import AnimatedScroll from "@/components/animatedCircle/AnimatedScroll";
import Contact from "@/components/contact/Contact";
import HomeSection from "@/components/home/HomeSection";
import OurVisionAndMission from "@/components/services/OurVisionAndMission";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <AnimatedScroll />
      <div className="min-h-screen px-24 max-[768px]:px-16 max-[374px]:px-8">
        <Contact />
        <HowManyProjectsIWorked />
        <OurVisionAndMission/>
        <Services />
        {/* <AnimatedCircle /> */}
      </div>
    </div>
  );
};
