"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Globe,
  Server,
  Database,
  Wrench,
  Smartphone,
  Cloud,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Globe className="h-5 w-5" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: ["Node.js", "Express.js", "Python", "REST APIs"],
  },
  {
    title: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="h-5 w-5" />,
    skills: ["React Native", "Expo", "Native Android", "iOS"],
  },
  {
    title: "Tools & Tech",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["Git/GitHub", "Docker", "AWS", "Vercel"],
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="h-5 w-5" />,
    skills: ["AWS", "Docker", "CI/CD", "Nginx"],
  },
];

export function SkillsPreview() {
  return (
    <section className="p-6 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different
            domains of software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const { elementRef, isVisible } = useScrollAnimation();

            return (
              <Card
                key={category.title}
                ref={elementRef}
                className={`
                  group relative
                  bg-card/50 backdrop-blur-sm
                  border border-border/50
                  transition-all duration-500 ease-out
                  transform hover:scale-105 hover:-translate-y-1
                  hover:shadow-lg hover:shadow-blue-500/20
                  overflow-hidden
                  rounded-xl
                  scroll-trigger
                  ${isVisible ? "animate" : ""}
                  ${
                    index % 2 === 0
                      ? "slide-in-from-left-4"
                      : "slide-in-from-right-4"
                  }
                `}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => {
                      const { elementRef: skillRef, isVisible: skillVisible } =
                        useScrollAnimation();

                      return (
                        <div
                          key={skill}
                          ref={skillRef}
                          className={`
                            badge-scroll-trigger
                            ${skillVisible ? "animate" : ""}
                          `}
                          style={{
                            transitionDelay: `${skillIndex * 50}ms`,
                          }}
                        >
                          <Badge
                            variant="outline"
                            className="
                              text-xs font-medium
                              bg-muted/30 hover:bg-blue-500/20
                              text-muted-foreground hover:text-blue-300
                              border-border hover:border-blue-500/50
                              transition-all duration-300 
                              hover:scale-105 hover:shadow-md
                              transform hover:-translate-y-0.5
                            "
                          >
                            {skill}
                          </Badge>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="/skills"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Skills
          </a>
        </div>
      </div>
    </section>
  );
}
