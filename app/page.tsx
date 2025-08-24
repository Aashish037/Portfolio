import { Hero } from '@/components/hero';
import { AboutPreview } from '@/components/about-preview';
import { ProjectsPreview } from '@/components/projects-preview';
import { SkillsPreview } from '@/components/skills-preview';
import { ContactPreview } from '@/components/contact-preview';

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />
      <AboutPreview />
      <ProjectsPreview />
      <SkillsPreview />
      <ContactPreview />
    </div>
  );
}