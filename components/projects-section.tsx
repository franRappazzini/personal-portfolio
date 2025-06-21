import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    name: "DeFi Liquidity Protocol",
    description:
      "Automated market maker with advanced liquidity management and yield farming capabilities built on Solana.",
    stack: "Rust, Anchor, TypeScript",
  },
  {
    name: "NFT Marketplace",
    description:
      "Full-featured NFT marketplace with royalties, auctions, and cross-chain compatibility.",
    stack: "Solana, React, Next.js",
  },
  {
    name: "Cross-Chain Bridge",
    description:
      "Secure bridge protocol enabling asset transfers between Ethereum and Solana networks.",
    stack: "Rust, Solidity, Web3.js",
  },
  {
    name: "DAO Governance Platform",
    description:
      "Decentralized governance system with proposal creation, voting mechanisms, and treasury management.",
    stack: "Anchor, TypeScript, React",
  },
];

export function ProjectsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16">Projects</h2>

        {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:bg-accent/50 transition-colors"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-foreground mb-3">{project.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{project.stack}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        <div className="text-center">
          <Button
            variant="outline"
            className="border-border text-muted-foreground hover:bg-accent hover:text-foreground"
            asChild
          >
            <a
              href="https://github.com/franRappazzini?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              View All Repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
