import { useState } from "react";
import { Button } from "./ui/button";

type ExperienceType = "work" | "studies";

const workExperiences = [
  {
    company: "Digital Perspective",
    role: "Frontend Web Developer",
    period: "Jan 2023 - Present",
    description: "Web Design; Web Development; Wordpress + Elementor.",
    logo: "/placeholder.svg"
  },
  {
    company: "Bitcliq",
    role: "Software Developer - Internship",
    period: "Jan 2020 - Mar 2020",
    description: "Mobile Development (Parque D.Carlos I App - Course Final Project [Grade:20/20]); Web Development; Functional testing some company's apps (Lota Digital, Caldas da Rainha - City Guide).",
    logo: "/placeholder.svg"
  },
  {
    company: "Bitcliq",
    role: "Software Developer - Internship",
    period: "Apr 2019 - Jul 2019",
    description: "Web Development; Functional testing some company's apps (Lota Digital, Caldas da Rainha - City Guide).",
    logo: "/placeholder.svg"
  }
];

const studyExperiences = [
  {
    company: "Polytechnic of Leiria",
    role: "B.Sc. in Computer Science",
    period: "Sep 2020 - Jul 2025",
    description: "Computer Science Degree",
    logo: "/placeholder.svg"
  },
  {
    company: "Zagreb University of Applied Sciences",
    role: "B.Sc. in Computer Science",
    period: "Mar 2022 - Jul 2022",
    description: "Computer Science Exchange Program",
    logo: "/placeholder.svg"
  },
  {
    company: "Escola Secundária Raul Proença",
    role: "Technical Professional of Management and Programming of Computer Systems",
    period: "Sep 2017 - Jul 2020",
    description: "Technical Professional Course",
    logo: "/placeholder.svg"
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<ExperienceType>("work");

  const experiences = activeTab === "work" ? workExperiences : studyExperiences;

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white">Experience</h2>
        
        <div className="flex gap-4 mb-8 justify-center">
          <Button
            variant={activeTab === "work" ? "default" : "outline"}
            onClick={() => setActiveTab("work")}
            className="min-w-[100px]"
          >
            Work
          </Button>
          <Button
            variant={activeTab === "studies" ? "default" : "outline"}
            onClick={() => setActiveTab("studies")}
            className="min-w-[100px]"
          >
            Studies
          </Button>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="timeline-line" />
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-16 pb-12 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                <img src={exp.logo} alt={exp.company} className="w-6 h-6" />
              </div>
              <div className="card-gradient rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-1">{exp.company}</h3>
                <p className="text-white/60 mb-2">{exp.role}</p>
                <p className="text-sm text-white/40 mb-4">{exp.period}</p>
                <p className="text-white/80">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;