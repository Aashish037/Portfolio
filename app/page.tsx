import { HeroOptimized } from "@/components/hero-optimized";
import { AboutPreview } from "@/components/about-preview";
import { ProjectsPreview } from "@/components/projects-preview";
import { SkillsPreview } from "@/components/skills-preview";
import { ContactPreview } from "@/components/contact-preview";
import { LazySection } from "@/components/lazy-section";

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <HeroOptimized />
      <LazySection delay={0.2}>
        <AboutPreview />
      </LazySection>
      <LazySection delay={0.3}>
        <ProjectsPreview />
      </LazySection>
      <LazySection delay={0.4}>
        <SkillsPreview />
      </LazySection>
      <LazySection delay={0.5}>
        <ContactPreview />
      </LazySection>
    </div>
  );
}
