import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import img from '../Images/img.jpg'; // Correct relative path
import Resume from '../Images/Pauliaus CV.pdf'
const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center pt-20 bg-[#021022] text-white">
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 163, 255, 0.2), rgba(0, 0, 0, 0) 35%)",
          zIndex: 1,
        }}
      ></div>

      <div className="relative z-10 w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
        <img
          src={img}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="relative z-10 text-5xl font-bold mb-4">
        Paulius Abromavičius<span className="text-[#00A3FF]">.</span>
      </h1>
      <p className="relative z-10 text-2xl text-white/80 mb-6">
        FRONTEND DEVELOPER
      </p>
      <div className="relative z-10 flex items-center justify-center gap-2 text-white/60 mb-8">
        <span className="flex items-center gap-2">
          <img src="https://flagcdn.com/lt.svg" alt="Lithuania" className="w-5 h-4" />
          Lithuania, Vilnius
        </span>
      </div>
      <div className="relative z-10 flex justify-center gap-4 mb-8">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-white/10 hover:bg-white/20"
          onClick={() => window.open('https://github.com/PaulAbromavicius', '_blank')}
        >
          <Github className="w-5 h-5 text-white" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-white/10 hover:bg-white/20"
          onClick={() => window.open('https://www.linkedin.com/in/paulius-abromavi%C4%8Dius-5bb44b20a/', '_blank')}
        >
          <Linkedin className="w-5 h-5 text-white" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-white/10 hover:bg-white/20"
          onClick={() => window.open(Resume, '_blank')}
        >
          <FileText className="w-5 h-5 text-white" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-white/10 hover:bg-white/20"
          onClick={() => window.open('mailto:pauliusabr@gmail.com')}
        >
          <Mail className="w-5 h-5 text-white" />
        </Button>
      </div>
      
    </div>
  );
};

export default Hero;
