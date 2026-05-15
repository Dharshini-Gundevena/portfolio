const skills = {
  languages: ["Python", "C",  "JavaScript", "HTML", "CSS"],
  tools: ["Git", "GitHub", "VS Code", "canva"],
  learning: ["Data Structures", "Algorithms"],
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">02.</span>
          Skills & Technologies
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-primary font-mono text-sm">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-primary font-mono text-sm">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 md:col-span-2 lg:col-span-2">
            <h3 className="text-primary font-mono text-sm">Currently Learning</h3>
            <div className="flex flex-wrap gap-2">
              {skills.learning.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-primary/20 text-primary border border-primary/50 rounded font-mono text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
