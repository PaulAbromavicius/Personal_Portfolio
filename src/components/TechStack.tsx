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

const TechStack = () => {
  return (
    <section className="relative  flex flex-col justify-center items-center text-center pt-20 pb-20 bg-[#021022] text-white">
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
  );
};

export default TechStack;