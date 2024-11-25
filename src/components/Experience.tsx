import { useState } from "react";
import { Button } from "./ui/button";
import northumbria from '../Images/northumbria.png'; 
import nkkm from '../Images/nkkm.png';
import emojibly from '../Images/emojibly.png';

type ExperienceType = "work" | "studies";

const workExperiences = [
  {
    company: "Working on projects",
    role: "Frontend Web Developer",
    period: "Sept 2024 - Present",
    description: "Web Design, Web Development",
    logo: emojibly,
  },
];

const studyExperiences = [
  {
    company: "Northumbría University",
    role: "B.Sc. in Computer Science",
    period: "Sep 2020 - Jul 2024",
    description: "Computer Science Degree with game development",
    logo: northumbria,
  },
  {
    company: "Nikalojos Kazakovos computer science school",
    role: "Certificate of finishing the course",
    period: "Sept 2017 - Jul 2020",
    description: "Computer Science school",
    logo: nkkm,
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<ExperienceType>("studies");

  const experiences = activeTab === "work" ? workExperiences : studyExperiences;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center pt-20 pb-20 bg-[#021022] text-white relative">
      {/* First Left Gradient */}
      <div
        className="absolute -left-64 top-0 w-[570px] h-[264px] rounded-full"
        style={{
          background: `linear-gradient(217deg, #6a0dad, rgba(255, 0, 255, 0) 70.71%), 
                       linear-gradient(127deg, #9b59b6, rgba(128, 0, 128, 0) 70.71%), 
                       linear-gradient(336deg, #4b0082, rgba(75, 0, 130, 0) 70.71%)`,
          filter: "blur(130px)",
        }}
      ></div>

      {/* Second Left Gradient */}
      <div
        className="absolute -left-72 bottom-0 w-[570px] h-[264px] rounded-full"
        style={{
          background: `linear-gradient(217deg, #ff6347, rgba(255, 0, 255, 0) 70.71%), 
                       linear-gradient(127deg, #ff1493, rgba(128, 0, 128, 0) 70.71%), 
                       linear-gradient(336deg, #8a2be2, rgba(75, 0, 130, 0) 70.71%)`,
          filter: "blur(130px)",
        }}
      ></div>

      {/* Right Gradient */}
      <div
        className="absolute -right-64 top-20 w-[570px] h-[264px] rounded-full"
        style={{
          background: `linear-gradient(217deg, #6a0dad, rgba(255, 0, 255, 0) 70.71%), 
                       linear-gradient(127deg, #9b59b6, rgba(128, 0, 128, 0) 70.71%), 
                       linear-gradient(336deg, #4b0082, rgba(75, 0, 130, 0) 70.71%)`,
          filter: "blur(130px)",
        }}
      >
 </div>

      <div
  className="absolute -right-64 bottom-20 w-[570px] h-[264px] rounded-full"
  style={{
    background: `linear-gradient(217deg, #ff6347, rgba(255, 99, 71, 0) 70.71%), 
                 linear-gradient(127deg, #ff4500, rgba(255, 69, 0, 0) 70.71%), 
                 linear-gradient(336deg, #ff1493, rgba(255, 20, 147, 0) 70.71%)`,
    filter: "blur(130px)",
  }}
></div>


      <section className="relative w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>

          {/* Toggle Button */}
          <div className="flex justify-center mb-8 w-[600px] mx-auto">
            <div className="flex rounded-full w-full bg-white/10 border border-white/20 overflow-hidden">
              <button
                onClick={() => setActiveTab("work")}
                className={`flex-1 px-6 py-2 text-sm font-medium rounded-l-full ${
                  activeTab === "work"
                    ? "bg-white text-black"
                    : "bg-white/10 text-white"
                } hover:bg-white/20`}
              >
                Work
              </button>
              <button
                onClick={() => setActiveTab("studies")}
                className={`flex-1 px-6 py-2 text-sm font-medium rounded-r-full ${
                  activeTab === "studies"
                    ? "bg-white text-black"
                    : "bg-white/10 text-white"
                } hover:bg-white/20`}
              >
                Studies
              </button>
            </div>
          </div>

          {/* Timeline with Border */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 h-full w-[2px] bg-white/20 z-0"></div>
            <div
              className={`border border-white/40 rounded-lg p-6 ${
                activeTab === "work" ? "bg-black/40" : "bg-black/40"
              }`}
            >
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-16 pb-12 flex items-start z-10">
                  {/* Timeline Icon */}
                  <div className="absolute -left-6 top-4 flex items-center justify-center rounded-full bg-white">
                    <img
                      src={exp.logo}
                      alt="Northumbria"
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
                    />
                  </div>

                  {/* Fixed-Size Card */}
                  <div className="bg-black/60 border border-white/10 rounded-lg p-6 shadow-md w-[650px] h-[200px]">
                    <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
                    <p className="text-white/70 mb-2">{exp.role}</p>
                    <p className="text-sm text-white/50 mb-4">{exp.period}</p>
                    <p className="text-white/80 text-sm">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
