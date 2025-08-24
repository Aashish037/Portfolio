import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import data from "@/data/data.json";
import { ProjectsGrid } from "@/components/projects-grid";

export const metadata = {
  title: "Projects - Asish Kumar Singh",
  description:
    "Showcase of projects and applications built by Me using modern web and mobile technologies.",
};

export default function Projects() {
  const { projects } = data;

  return (
    <div className="min-h-screen p-6 lg:p-12 bg-background text-foreground font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            creating innovative solutions.
          </p>
        </div>

        {/* Projects Grid with Modern Cards */}
        <ProjectsGrid projects={projects} />

        {/* Call to Action */}
        <Card className="p-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 border-none text-center rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Have a Project in Mind?
          </h3>
          <p className="text-muted-foreground mb-6">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <a href="/contact">Start a Conversation</a>
          </Button>
        </Card>
      </div>
    </div>
  );
}
