import HowManyProjectsIWorked from "@/components/about/HowManyProjectsIWorked";
import AnimatedCircle from "@/components/animatedCircle/AnimatedCircle";
import AnimatedScroll from "@/components/animatedCircle/AnimatedScroll";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import HomeSection from "@/components/home/HomeSection";
import OurVisionAndMission from "@/components/services/OurVisionAndMission";
import Services from "@/components/services/Services";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <section id="home">
        <HomeSection />
      </section>
      <AnimatedScroll />
      <div className="min-h-screen px-24 max-[768px]:px-16 max-[374px]:px-8">
        <section id="contact">
          <Contact />
        </section>
        <section id="about">
          <HowManyProjectsIWorked />
        </section>
        <OurVisionAndMission />
        <section id="services">
          <Services />
        </section>
        {/* <AnimatedCircle /> */}
      </div>
      <Footer />
    </div>
  );
};
