import { Code2, BookOpen, Rocket } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">01.</span>
          About Me
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hello! I&apos;m Dharshini, a first-year BTech student in Computer Science Engineering at 
              <span className="text-primary"> MLR Institute of Technology</span>. My journey into 
              programming began in high school when I wrote my first Python script, and I&apos;ve been 
              hooked ever since.
            </p>
            <p>
              Currently, I&apos;m diving deep into data structures and algorithms while building 
              projects that solve real-world problems. I believe in learning by doing, which is why 
              I spend my free time working on personal projects and participating in hackathons.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
              open-source projects, or watching tech videos. I&apos;m always eager to collaborate on 
              interesting projects and learn from experienced developers.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <Code2 className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-foreground font-semibold mb-2">Coding Enthusiast</h3>
              <p className="text-muted-foreground text-sm">
                Passionate about writing clean, efficient code and constantly learning new programming paradigms.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <BookOpen className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-foreground font-semibold mb-2">Continuous Learner</h3>
              <p className="text-muted-foreground text-sm">
                Always exploring new technologies, frameworks, and best practices in software development.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <Rocket className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-foreground font-semibold mb-2">Future Innovator</h3>
              <p className="text-muted-foreground text-sm">
                Dreaming of building products that make a positive impact on people&apos;s lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
