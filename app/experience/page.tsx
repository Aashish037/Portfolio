import React from "react";
import { ExperienceSection } from "@/components/experience-section";

export const metadata = {
  title: "Experience - Asish Kumar Singh",
  description:
    "Professional experience and career journey of Asish Kumar Singh in full-stack development.",
};

export default function Experience() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ExperienceSection />
    </div>
  );
}
