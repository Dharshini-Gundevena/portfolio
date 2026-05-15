import { Github, ExternalLink, Folder } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "Student Task Manager",
    description:
      "A full-stack web application for managing academic tasks, deadlines, and study schedules. Features user authentication, task categorization, and reminder notifications.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application that displays real-time weather data using the OpenWeatherMap API. Includes 5-day forecasts and location-based search.",
    tech: ["JavaScript", "HTML", "CSS", "API Integration"],
    github: "https://github.com",
    live: "https://example.com",
  },
]

const otherProjects = [
  {
    title: "Calculator App",
    description: "A scientific calculator with history feature built using vanilla JavaScript.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website (this one!) built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com",
  },
  {
    title: "Quiz Application",
    description: "An interactive quiz app with multiple categories and score tracking.",
    tech: ["Python", "Tkinter"],
    github: "https://github.com",
  },
  {
    title: "To-Do List CLI",
    description: "A command-line to-do list application with file persistence.",
    tech: ["Python", "JSON"],
    github: "https://github.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">03.</span>
          Projects
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:col-start-6" : ""
                }`}
              >
                <div className="aspect-video bg-secondary rounded-lg overflow-hidden border border-border">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-primary font-mono text-sm">Project Preview</span>
                  </div>
                </div>
              </div>

              <div
                className={`md:col-span-6 md:absolute ${
                  index % 2 === 1 ? "md:left-0" : "md:right-0"
                } space-y-4`}
              >
                <p className="text-primary font-mono text-sm">Featured Project</p>
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                <div className="p-6 bg-card rounded-lg border border-border shadow-lg">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className={`flex flex-wrap gap-3 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-muted-foreground font-mono text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-xl font-bold text-foreground text-center mb-8">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <Link
                  href={project.github}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-5 h-5" />
                </Link>
              </div>
              <h4 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-muted-foreground font-mono text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
