import HowManyProjectsIWorked from "@/components/about/HowManyProjectsIWorked";
import AnimatedCircle from "@/components/animatedCircle/AnimatedCircle";
import Contact from "@/components/contact/Contact";
import HomeSection from "@/components/home/HomeSection";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <div className="min-h-screen px-24 max-[768px]:px-16 max-[374px]:px-8">
        <Contact />
        <Services />
        <HowManyProjectsIWorked />
        {/* <AnimatedCircle /> */}
      </div>
    </div>
  );
};
