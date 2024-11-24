import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center pt-20">
      <div className="animate-fade-in space-y-6">
        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
          <img
            src="/lovable-uploads/dc0ca304-55ea-4731-8501-17a4c9b90570.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-5xl font-bold mb-4">
          Rafael Amaral<span className="text-primary">.</span>
        </h1>
        <p className="text-2xl text-white/80 mb-6">
          FULLSTACK DEVELOPER
        </p>
        <div className="flex items-center justify-center gap-2 text-white/60 mb-8">
          <span className="flex items-center gap-2">
            <img src="https://flagcdn.com/pt.svg" alt="Portugal" className="w-5 h-4" />
            Based in Portugal
          </span>
        </div>
        <div className="flex justify-center gap-4 mb-8">
          <Button variant="outline" size="icon" className="rounded-full">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Twitter className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Mail className="w-5 h-5" />
          </Button>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          Contact me
        </Button>
      </div>
    </div>
  );
};

export default Hero;