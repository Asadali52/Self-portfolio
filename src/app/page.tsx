import HowManyProjectsIWorked from "@/components/about/HowManyProjectsIWorked";
import AnimatedScroll from "@/components/animatedCircle/AnimatedScroll";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import HomeSection from "@/components/home/HomeSection";
import OurVisionAndMission from "@/components/services/OurVisionAndMission";
import Projects from "@/components/projects/Projects";
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
      
      <div className="min-h-screen px-24 max-[768px]:px-8 max-[480px]:px-4">
        
        <section id="about" className="py-16 max-[768px]:py-12">
          <HowManyProjectsIWorked />
        </section>
        
        <section className="py-16 max-[768px]:py-12">
          <OurVisionAndMission />
        </section>
        
        <section id="services" className="pb-16 max-[768px]:pb-12">
          <Services />
        </section>
        
        <section id="projects" className="pb-16 max-[768px]:pb-12">
          <Projects />
        </section>
        
        <section id="contact" className="pb-16 max-[768px]:pb-12">
          <Contact />
        </section>
        
      </div>
      
      <Footer />
    </div>
  );
};
