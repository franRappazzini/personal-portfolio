import { Card, CardContent } from "@/components/ui/card";

import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card
              key={exp.period}
              className="bg-card border-border hover:bg-accent/50 transition-colors"
            >
              <CardContent className="px-8 py-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-foreground">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
