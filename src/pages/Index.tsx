import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import myIcon from "../Images/PA_logo.jpeg";

const Index = () => {
  return (
    
    <div className="min-h-screen bg-gradient-dark">
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <TechStack />
    </div>
  );
};

export default Index;