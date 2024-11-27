// src/pages/Projects.tsx
import React from 'react';
import Navigation from "@/components/Navigation";
import portfolio from "../Images/portfolio.png";
import emojiblyLandingPage from "../Images/emojiblyLandingPage.png";
const projects = [
    {
      title: "Emojibly(coming soon)",
      description: "This website creates an embedded feedback widget that clients can integrate into their websites. The widget allows users to provide feedback on the website's content using emojis.",
      image: emojiblyLandingPage,
      link: "https://emojibly.com",
      tags: ["Node.JS", "Svelte", "Tailwindcss", "TypseScript"]
    },
    {
      title: "Personal Portfolio",
      description: "This is my personal portfolio, where I showcase my projects and skills.",
      image: portfolio,
      link: "https://abromavicius.dev",
      tags: ["Node.JS", "React", "Tailwindcss"]
    }
  ];
const Projects = () => {
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
      <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#07d400] to-[#00b4d8]">Projects</h1>
      <p className="text-lg">
      Explore a list of projects showcasing various skills and technologies.      </p>
    </div>
    <section className=" pt-20 pb-20">
      <div className="container mx-auto px-4">
        
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-gradient rounded-xl overflow-hidden animate-fade-in group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors px-4 py-2 rounded-full border border-white/20 hover:border-white/40"
                  >
                    Discover
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-sm border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Navigation />

  </div>
  );
};

export default Projects;
