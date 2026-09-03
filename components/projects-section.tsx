"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GitFork, Github, Star } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PinnedRepo {
  author: string;
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<PinnedRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pinned.berrysauce.dev/get/franRappazzini")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching pinned repos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16">Projects</h2>

        {loading ? (
          <div className="text-center text-muted-foreground mb-12">Loading projects...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {projects.map((project) => (
              <ProjectCard {...project} key={project.name} />
            ))}
          </div>
        )}

        <div className="text-center">
          <Button
            variant="outline"
            className="border-border text-muted-foreground hover:bg-accent hover:text-foreground"
            asChild
          >
            <Link
              href="https://github.com/franRappazzini?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              View All Repositories
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard(project: PinnedRepo) {
  return (
    <Link
      href={`https://github.com/${project.author}/${project.name}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card className="bg-card border-border hover:bg-accent/50 hover:shadow-lg hover:scale-[1.01] hover:border-primary/20 transition-all duration-200 cursor-pointer h-full py-0">
        <CardContent className="p-4 flex flex-col gap-3 h-full justify-between">
          <h3 className="text-sm font-semibold text-primary">{project.name}</h3>
          {project.description && (
            <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
          )}
          <div className="flex items-center gap-3 pt-1">
            <div className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: project.languageColor }}
              />
              <span className="text-xs text-muted-foreground">{project.language}</span>
            </div>
            {project.stars > 0 && (
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{project.stars}</span>
              </div>
            )}
            {project.forks > 0 && (
              <div className="flex items-center gap-1">
                <GitFork className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{project.forks}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
