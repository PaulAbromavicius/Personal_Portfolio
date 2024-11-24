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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Projects</h2>
          <button className="text-white/60 hover:text-white transition-colors">
            View More
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-gradient rounded-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/60 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-white/80 hover:text-white transition-colors"
                >
                  Discover
                  <svg
                    className="w-4 h-4 ml-2"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;