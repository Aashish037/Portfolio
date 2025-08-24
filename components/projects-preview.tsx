"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import data from "@/data/data.json";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function ProjectsPreview() {
  const { projects } = data;
  const featuredProjects = projects.slice(0, 3);

  // Precompute hooks for up to 3 featured projects
  const projectHooks = [
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
  ];
  // Precompute hooks for up to 8 tag badges per project
  const tagHooksArr = [
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
  // Precompute hooks for up to 8 tech badges per project
  const techHooksArr = [
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
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I&apos;m
            passionate about
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => {
            const { elementRef, isVisible } = projectHooks[index];

            return (
              <Card
                key={project.id}
                ref={elementRef}
                className={`
                  group relative
                  bg-gradient-to-br from-card/80 to-card/90 backdrop-blur-xl
                  hover:from-card/90 hover:to-card/95
                  border border-border/50 hover:border-blue-500/30
                  transition-all duration-500 ease-out
                  transform hover:-translate-y-3 hover:scale-[1.03]
                  hover:shadow-2xl hover:shadow-blue-600/30
                  overflow-hidden
                  rounded-2xl
                  scroll-trigger
                  ${isVisible ? "animate" : ""}
                `}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Image & Hover Overlay */}
                <div className="aspect-video relative overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-4 z-20">
                    {project.github && (
                      <Button
                        size="sm"
                        variant="secondary"
                        asChild
                        className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        variant="secondary"
                        asChild
                        className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <CardHeader className="relative z-10">
                  {/* Badges with modern hover effect */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 8).map((tag, tagIndex) => {
                      const { elementRef: badgeRef, isVisible: badgeVisible } =
                        tagHooksArr[index][tagIndex];
                      return (
                        <div
                          key={tag}
                          ref={badgeRef}
                          className={`badge-scroll-trigger ${
                            badgeVisible ? "animate" : ""
                          }`}
                          style={{ transitionDelay: `${tagIndex * 50}ms` }}
                        >
                          <Badge
                            variant="secondary"
                            className="
                            text-xs font-medium
                            bg-gradient-to-r from-blue-600/20 to-purple-600/20
                            hover:from-blue-600 hover:to-purple-600
                            text-blue-300 hover:text-white
                            border border-blue-500/30 hover:border-blue-400
                            transition-all duration-300 
                            hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25
                            transform hover:-translate-y-1
                          "
                          >
                            {tag}
                          </Badge>
                        </div>
                      );
                    })}
                  </div>
                  <CardTitle
                    className="
                    text-xl font-bold
                    bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent
                    group-hover:from-blue-400 group-hover:to-purple-400
                    transition-all duration-500
                    transform group-hover:scale-105
                  "
                  >
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 relative z-10">
                  <p
                    className="
                    text-muted-foreground text-sm leading-relaxed
                    group-hover:text-foreground
                    transition-colors duration-300
                  "
                  >
                    {project.description}
                  </p>

                  {/* Tech Badges with modern hover effect */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 8).map((tech, techIndex) => {
                      const {
                        elementRef: techBadgeRef,
                        isVisible: techBadgeVisible,
                      } = techHooksArr[index][techIndex];
                      return (
                        <div
                          key={tech}
                          ref={techBadgeRef}
                          className={`badge-scroll-trigger ${
                            techBadgeVisible ? "animate" : ""
                          }`}
                          style={{ transitionDelay: `${techIndex * 30}ms` }}
                        >
                          <Badge
                            variant="outline"
                            className="
                            text-xs font-medium
                            bg-muted/50 hover:bg-blue-600/20
                            text-muted-foreground hover:text-blue-300
                            border-border hover:border-blue-500/50
                            transition-all duration-300 
                            hover:scale-105 hover:shadow-md hover:shadow-blue-500/20
                            transform hover:-translate-y-0.5
                          "
                          >
                            {tech}
                          </Badge>
                        </div>
                      );
                    })}
                    {project.tech.length > 4 && (
                      <div
                        className={`
                        badge-scroll-trigger
                        ${isVisible ? "animate" : ""}
                      `}
                        style={{
                          transitionDelay: `${200}ms`,
                        }}
                      >
                        <Badge
                          variant="outline"
                          className="
                          text-xs font-medium
                          bg-muted/50 hover:bg-blue-600/20
                          text-muted-foreground hover:text-blue-300
                          border-border hover:border-blue-500/50
                          transition-all duration-300 
                          hover:scale-105 hover:shadow-md hover:shadow-blue-500/20
                          transform hover:-translate-y-0.5
                        "
                        >
                          +{project.tech.length - 4} more
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* View Details Button with modern hover effect */}
                  <Button
                    asChild
                    variant="ghost"
                    className="
                    w-full group/button mt-6
                    bg-gradient-to-r from-blue-600/10 to-purple-600/10
                    hover:from-blue-600/20 hover:to-purple-600/20
                    border border-blue-500/20 hover:border-blue-400/40
                    transition-all duration-300
                    transform hover:scale-105
                  "
                  >
                    <Link href={`/projects/${project.id}`}>
                      <span
                        className="
                        group-hover/button:text-blue-400 
                        transition-colors duration-300
                        font-medium
                      "
                      >
                        View Project
                      </span>
                      <ArrowRight
                        className="
                        ml-2 h-4 w-4 
                        transition-all duration-300 
                        group-hover/button:translate-x-2 
                        group-hover/button:text-blue-400
                        group-hover/button:scale-110
                      "
                      />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="
              bg-gradient-to-r from-blue-600 to-purple-600
              hover:from-blue-700 hover:to-purple-700
              text-white font-medium
              transition-all duration-300
              transform hover:scale-105
            "
          >
            <Link href="/projects">
              <span className="font-medium">View All Projects</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
