import { Card, CardContent } from "@/components/ui/card";

import Link from "next/link";
import { contributions } from "@/lib/data";

interface ContributionCardProps {
  repo: string;
  prNumber: number;
  status: string;
  title: string;
  additions: number;
  deletions: number;
  filesSummary: string;
  href: string;
}

export function ContributionSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16">Contributions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {contributions.map((contribution) => (
            <ContributionCard {...contribution} key={contribution.prNumber} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContributionCard({
  repo = "anza-xyz/sbpf",
  prNumber = 212,
  status = "merged",
  title = "elf: keep debug labels from failing the load",
  additions = 236,
  deletions = 75,
  filesSummary = "src/elf.rs +8 more",
  href = "https://github.com/coral-xyz/anchor",
}: ContributionCardProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
      <Card className="h-full bg-card border-border hover:bg-accent/50 hover:shadow-lg hover:scale-[1.01] hover:border-primary/20 transition-all duration-200 cursor-pointer py-0">
        <CardContent className="p-4 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            <span className="font-semibold text-primary">{repo}</span>
            <span className="text-muted-foreground">#{prNumber}</span>

            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ml-2 ${
                status === "merged"
                  ? "bg-violet-500/15 text-violet-600 dark:bg-violet-400/15 dark:text-violet-400"
                  : status === "open"
                    ? "bg-emerald-500/15 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-400"
                    : "bg-muted text-muted-foreground"
              }`}
            >
              {status}
            </span>
          </div>

          <h3 className="text-base font-semibold leading-snug text-primary">{title}</h3>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <div>
              <span className="text-emerald-500 dark:text-emerald-400 mr-2">+{additions}</span>
              <span className="text-red-500 dark:text-red-400">-{deletions}</span>
            </div>
            <span className="text-muted-foreground">{filesSummary}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
