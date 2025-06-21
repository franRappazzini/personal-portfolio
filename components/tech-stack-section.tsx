import Link from "next/link";
import { technologies } from "@/lib/data";

export function TechStackSection() {
  return (
    <section className="h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16">Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <Link
              key={tech.name}
              className="px-4 py-3 bg-secondary/50 rounded-md hover:bg-secondary transition-colors text-center cursor-pointer"
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              title={`Learn more about ${tech.name}`}
            >
              <span className="text-foreground font-medium">{tech.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
