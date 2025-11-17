"use client";

import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Building2, Calendar, Sparkles } from "lucide-react";
import data from "@/data/data.json";

export function ExperienceSection() {
  // React-compliant: call hooks explicitly for each experience (cap at 8)
  const expHooks = [
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
  ];

  // For each experience, precompute up to 8 project hooks (2D array)
  const projHooksArr = [
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
  const { experience } = data;

  return (
    <section className="p-6 lg:p-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through the world of software development, building
            innovative solutions and growing with each challenge.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((exp, index) => {
            const { elementRef, isVisible } = expHooks[index];
            const projHooks = projHooksArr[index];
            return (
              <div
                key={index}
                ref={elementRef}
                className={`
                  group relative
                  scroll-trigger
                  ${isVisible ? "animate" : ""}
                  slide-in-from-bottom-8
                `}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                <Card className="relative bg-card/80 backdrop-blur-sm border border-border/50 overflow-hidden group-hover:border-blue-500/30 transition-all duration-500">
                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                  {/* Content */}
                  <div className="relative p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      {/* Left Side - Role & Company */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                            <Building2 className="h-6 w-6 text-blue-500" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-blue-500 transition-colors duration-300">
                              {exp.role}
                            </h3>
                            <p className="text-lg text-muted-foreground font-medium">
                              {exp.company}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                {exp.duration}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Work Section */}
                        <div className="space-y-3 mt-4">
                          {exp.Work &&
                            exp.Work.map((workItem, wIdx) => {
                              const {
                                elementRef: workRef,
                                isVisible: workVisible,
                              } = projHooks[wIdx];
                              return (
                                <div
                                  key={wIdx}
                                  ref={workRef}
                                  className={`badge-scroll-trigger ${
                                    workVisible ? "animate" : ""
                                  }`}
                                  style={{ transitionDelay: `${wIdx * 100}ms` }}
                                >
                                  <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30 hover:bg-background/80 hover:border-blue-400/40 transition-all duration-300">
                                    <Sparkles className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <p className="text-muted-foreground text-base leading-relaxed">
                                      {workItem}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <Card className="p-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 border border-border/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let&apos;s collaborate on your next project. Whether it&apos;s a
              web app, mobile app, or something entirely new, I&apos;m excited
              to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Let&apos;s Talk
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-border bg-card/50 hover:bg-card text-foreground font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
