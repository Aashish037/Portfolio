import React from "react";
import { AboutSection } from "@/components/about-section";

export const metadata = {
  title: "About - Asish Kumar Singh",
  description:
    "Learn more about Asish Kumar Singh's background, skills, and experience in full-stack development.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AboutSection />
    </div>
  );
}
