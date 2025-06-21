import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16">Experience</h2>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                <div className="absolute left-2 md:left-4 w-4 h-4 bg-background border-2 border-foreground rounded-full z-10"></div>

                <div className="ml-12 md:ml-16 space-y-2">
                  <h3 className="text-xl font-medium text-foreground">{exp.role}</h3>
                  <p className="text-muted-foreground font-medium">
                    {exp.company} | {exp.period}
                  </p>
                  <p className="text-muted-foreground leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
