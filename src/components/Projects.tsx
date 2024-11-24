const projects = [
  {
    title: "Zen Vouch",
    description: "Zen Vouch is a platform that allows users manage their business vouchers.",
    image: "/lovable-uploads/e0706aa7-9630-4ea0-8bb8-3eedd39196cd.png",
    link: "https://rafaelamaral.dev/projects/zen-vouch",
    tags: ["Next.JS", "React", "Tailwindcss", "shadcn/ui", "Clerk", "Supabase"]
  },
  {
    title: "Personal Portfolio",
    description: "This is my personal portfolio, where I showcase my projects and skills.",
    image: "/lovable-uploads/dc0ca304-55ea-4731-8501-17a4c9b90570.png",
    link: "https://rafaelamaral.dev",
    tags: ["Next.JS", "React", "Tailwindcss", "shadcn/ui"]
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-black/95 to-black/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">PROJECTS</h2>
          <p className="text-gray-400 text-lg">
            Explore a list of projects showcasing various skills and technologies.
          </p>
        </div>
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
  );
};

export default Projects;