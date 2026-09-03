import { ContactSection } from "@/components/contact-section";
import { ContributionSection } from "@/components/contribution-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { TechStackSection } from "@/components/tech-stack-section";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <ExperienceSection />
      <ContributionSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
