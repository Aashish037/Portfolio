import React from "react";
import { SkillsSection } from "@/components/skills-section";

export const metadata = {
  title: "Skills & Technologies - Asish Kumar Singh",
  description:
    "A comprehensive overview of my technical expertise across different domains of software development and emerging technologies.",
};

export default function Skills() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkillsSection />
    </div>
  );
}
