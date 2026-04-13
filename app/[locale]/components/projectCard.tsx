type ProjectItem = {
  name: string;
  description: string;
  techstack: string[];
  img: string;
  src : string;
};

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-12 gap-4 mt-5 py-5 px-6 md:px-20">
      <div className="md:col-span-5 p-4 text-white">
        <div className="relative w-full h-64 md:h-full min-h-56 rounded-2xl overflow-hidden bg-slate-800/70 border border-transparent shadow-xl group-hover:scale-105 group-hover:border-blue-500/50 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.35)] transition-all duration-300 ease-out">
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-blue-500/20 via-sky-300/10 to-violet-400/20" />
          <div className="pointer-events-none absolute -inset-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_25%_20%,rgba(125,211,252,0.28),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(147,197,253,0.24),transparent_40%)]" />
          {project.img ? (
            <a key={index} href={project.src} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </a>
          ) : (
            <a key={index} href={project.src} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
            <div className="w-full h-full flex items-center justify-center text-slate-300 text-sm">
              No project image
            </div>
            </a>
          )}
        </div>
      </div>

      <div className="md:col-span-7 p-4 text-white">
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl text-blue-500">{project.name}</h3>
          <p className="text-l mt-5 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-3 mt-8">
            {project.techstack.map((tech) => (
              <span
                key={`${project.name}-${tech}`}
                className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
