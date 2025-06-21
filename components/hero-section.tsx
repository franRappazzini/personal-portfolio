import { FileText, Github, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight">Francisco Rappazzini</h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Blockchain Developer
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <Button
            variant="ghost"
            size="lg"
            className="p-3 hover:bg-accent transition-colors"
            asChild
          >
            <a
              href="https://github.com/franRappazzini"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="p-3 hover:bg-accent transition-colors"
            asChild
          >
            <a
              href="https://linkedin.com/in/francisco-rappazzini"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="p-3 hover:bg-accent transition-colors"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/1oRL5EreKrt5P25ouy1d6TCQ4BMGBcOoX/view"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CV"
              title="CV"
            >
              <FileText className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
