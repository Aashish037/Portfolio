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
  Code,
  Cloud,
  GitBranch,
} from "lucide-react";

interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate" | "Beginner";
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Globe className="h-6 w-6" />,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6" />,
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "REST APIs",
      "GraphQL",
      "Socket.io",
    ],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="h-6 w-6" />,
    skills: [
      "React Native",
      "Expo",
      "Native Android",
      "iOS Development",
      "Android Database",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench className="h-6 w-6" />,
    skills: [
      "Git/GitHub",
      "Docker",
      "AWS",
      "Vercel",
      "Figma",
      "VS Code",
      "Android Studio",
      "Postman",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["AWS", "Docker", "CI/CD", "Nginx", "Vercel"],
  },
];

const featuredSkills: Skill[] = [
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Intermediate" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "React Native", level: "Intermediate" },
  { name: "PostgreSQL", level: "Intermediate" },
];

export function SkillsSection() {
  // --- React-compliant: all hooks at top level ---
  const MAX_SKILLS = 8;
  const MAX_CATEGORIES = skillCategories.length;
  const MAX_FEATURED = 12;

  // Precompute hooks for featured skills (up to 12)
  const featuredSkillHooks = [
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
  ];

  // Precompute hooks for each category card
  const categoryCardHooks = [
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
  ];

  // Precompute hooks for each skill badge in each category
  const categorySkillHooks: Array<
    Array<ReturnType<typeof useScrollAnimation>>
  > = [
    [
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
    ],
    [
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
    ],
    [
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
    ],
    [
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
    ],
    [
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
    ],
    [
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
      useScrollAnimation(),
    ],
  ];

  return (
    <section className="p-6 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different
            domains of software development and emerging technologies.
          </p>
        </div>

        {/* Featured Skills */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center text-foreground">
            Technical Expertise
          </h3>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern web and mobile technologies with 4+ years of
            experience building scalable applications.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredSkills.slice(0, MAX_FEATURED).map((skill, index) => {
              const { elementRef, isVisible } = featuredSkillHooks[index];
              return (
                <Card
                  key={skill.name}
                  ref={elementRef}
                  className={`
                    group relative
                    bg-card/50 backdrop-blur-sm
                    border border-border/50
                    transition-all duration-500 ease-out
                    transform hover:scale-110 hover:-translate-y-2
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
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <CardContent className="p-4 text-center space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="font-semibold text-sm">
                        {skill.name}
                      </span>
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-muted/50 hover:bg-blue-500/20 transition-colors"
                    >
                      {skill.level}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => {
            const { elementRef, isVisible } = categoryCardHooks[catIdx];
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
                    catIdx % 2 === 0
                      ? "slide-in-from-left-4"
                      : "slide-in-from-right-4"
                  }
                `}
                style={{
                  transitionDelay: `${catIdx * 150}ms`,
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
                    {category.skills
                      .slice(0, MAX_SKILLS)
                      .map((skill, skillIndex) => {
                        const {
                          elementRef: skillRef,
                          isVisible: skillVisible,
                        } = categorySkillHooks[catIdx][skillIndex];
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
      </div>
    </section>
  );
}
