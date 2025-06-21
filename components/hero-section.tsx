import { FileText, Github, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

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
          <Link
            href="https://github.com/franRappazzini"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <Button variant="ghost" size="icon" className="h-14 w-14 p-3" asChild>
              <Github strokeWidth={1} />
            </Button>
          </Link>

          <Link
            href="https://linkedin.com/in/francisco-rappazzini"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Button variant="ghost" size="icon" className="h-14 w-14 p-3" asChild>
              <Linkedin strokeWidth={1} />
            </Button>
          </Link>

          <Link
            href="https://drive.google.com/file/d/1oRL5EreKrt5P25ouy1d6TCQ4BMGBcOoX/view"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CV"
            title="CV"
          >
            <Button variant="ghost" size="icon" className="h-14 w-14 p-3" asChild>
              <FileText strokeWidth={1} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
