import React from 'react';
import Navigation from "@/components/Navigation";

const technologies = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Svelte" , icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", style: "filter: invert(1);" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];
const About = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center text-center pt-20 bg-gradient-to-b from-[#021022] to-[#0d1721] text-white overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-radial from-[#0d6ad4] to-[#0d1721] opacity-60 blur-[100px]"
      ></div>

      {/* Radiant Gradients Around Text */}
      <div className="absolute top-10 left-1/4 w-[300px] h-[300px] rounded-full opacity-50 blur-[150px]" 
        style={{
          background: `linear-gradient(217deg, #00b4d8, rgba(0, 180, 216, 0) 70.71%), 
                       linear-gradient(127deg, #00b4d8, rgba(0, 180, 216, 0) 70.71%), 
                       linear-gradient(336deg, #00b4d8, rgba(0, 180, 216, 0) 70.71%)`
        }}
      ></div>
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-full opacity-50 blur-[150px]"
        style={{
          background: `linear-gradient(217deg, #00d49f, rgba(0, 255, 128, 0) 70.71%), 
                       linear-gradient(127deg, #00d49f, rgba(0, 255, 128, 0) 70.71%), 
                       linear-gradient(336deg, #00d49f, rgba(0, 255, 128, 0) 70.71%)`
        }}
      ></div>
      <div className="absolute top-10 right-1/4 w-[300px] h-[300px] rounded-full opacity-50 blur-[150px]"
        style={{
          background: `linear-gradient(217deg, #00b4d8, rgba(0, 180, 216, 0) 70.71%), 
                       linear-gradient(127deg, #00b4d8, rgba(0, 180, 216, 0) 70.71%), 
                       linear-gradient(336deg, #00b4d8, rgba(0, 180, 216, 0) 70.71%)`
        }}
      ></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full opacity-50 blur-[150px]"
        style={{
          background: `linear-gradient(217deg, #9b4dca, rgba(155, 77, 202, 0) 70.71%), 
                       linear-gradient(127deg, #9b4dca, rgba(155, 77, 202, 0) 70.71%), 
                       linear-gradient(336deg, #9b4dca, rgba(155, 77, 202, 0) 70.71%)`
        }}
      ></div>
      
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full opacity-50 blur-[150px]"
        style={{
          background: `linear-gradient(217deg, #ff4b8b, rgba(255, 75, 139, 0) 70.71%), 
          linear-gradient(127deg, #ff4b8b, rgba(255, 75, 139, 0) 70.71%), 
          linear-gradient(336deg, #ff4b8b, rgba(255, 75, 139, 0) 70.71%)`
        }}
      ></div>
      

      <div className="relative z-10 max-w-xl px-4">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#07d400] to-[#00b4d8]">Hi, I'm Paulius Abromavičius.</h1>
        <p className="text-lg">
          A Frontend developer with experience in web and mobile development. I enjoy working across all stages of a project, from concept to delivery, and I'm always looking for ways to improve both my technical skills and the user experience.
        </p>
      </div>
      <section className='pt-10'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-lg card-gradient p-3 mb-2">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm text-white/60">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
      <Navigation />

    </div>
  );
};

export default About;