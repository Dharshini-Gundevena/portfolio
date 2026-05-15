import { GraduationCap, Award, Calendar } from "lucide-react"

const education = [
  {
    degree: "BTech in Computer Science Engineering",
    institution: "MLR Institute of Technology",
    duration: "2025 - 2029 (Expected)",
    description: "First-year student with focus on programming fundamentals, data structures, and web development.",
    highlights: ["CGPA: 8.75/10", "Active member of Coding Club", "Participated in College Hackathon"],
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Sri Chaitanya Junior College",
    duration: "2023 - 2025",
    description: "Completed with Science stream (Physics, Chemistry, Mathematics, Computer Science).",
    highlights: ["Percentage: 96%", "School Topper "],
  },
]

const certifications = [
  "Python for Everybody - Coursera"
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">04.</span>
          Education
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {education.map((edu, index) => (
              <div key={edu.degree} className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 text-primary-foreground" />
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-primary font-mono text-sm">{edu.duration}</span>
                  </div>
                  <h3 className="text-foreground font-bold text-lg mb-1">{edu.degree}</h3>
                  <p className="text-muted-foreground mb-3">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <p className="text-foreground text-sm">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
