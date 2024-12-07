import HowManyProjectsIWorked from "@/components/about/HowManyProjectsIWorked";
import AnimatedCircle from "@/components/animatedCircle/AnimatedCircle";
import Contact from "@/components/contact/Contact";
import HomeSection from "@/components/home/HomeSection";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeSection />
      <Contact />
      <Services />
      <HowManyProjectsIWorked/>
      <AnimatedCircle />
    </div>
  );
};
