"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Download,
  User,
  Target,
  Award,
  Code,
  Coffee,
  Zap,
  Heart,
  ArrowRight,
  Sparkles,
  Globe,
  Smartphone,
} from "lucide-react";
import data from "@/data/data.json";

export function AboutSection() {
  // React-compliant: call hooks explicitly for each animated item
  // Stats (3)
  const statHook0 = useScrollAnimation();
  const statHook1 = useScrollAnimation();
  const statHook2 = useScrollAnimation();
  const statHooks = [statHook0, statHook1, statHook2];

  // Skills (up to 8)
  const skillHook0 = useScrollAnimation();
  const skillHook1 = useScrollAnimation();
  const skillHook2 = useScrollAnimation();
  const skillHook3 = useScrollAnimation();
  const skillHook4 = useScrollAnimation();
  const skillHook5 = useScrollAnimation();
  const skillHook6 = useScrollAnimation();
  const skillHook7 = useScrollAnimation();
  const skillHooks = [
    skillHook0,
    skillHook1,
    skillHook2,
    skillHook3,
    skillHook4,
    skillHook5,
    skillHook6,
    skillHook7,
  ];

  // Fun Facts (4)
  const funFactHook0 = useScrollAnimation();
  const funFactHook1 = useScrollAnimation();
  const funFactHook2 = useScrollAnimation();
  const funFactHook3 = useScrollAnimation();
  const funFactHooks = [funFactHook0, funFactHook1, funFactHook2, funFactHook3];
  const { about } = data;
  const [activeTab, setActiveTab] = useState("journey");

  const stats = [
    {
      icon: <User className="h-8 w-8" />,
      title: "Experience",
      value: "Junior Developer",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Projects",
      value: "10+ Completed",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Clients",
      value: "Happy & Satisfied",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
  ];

  const funFacts = [
    {
      icon: <Code className="h-6 w-6" />,
      value: "150+",
      label: "Commits This Year",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      value: "Always",
      label: "Eager to Learn",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      value: "Passionate",
      label: "About Coding",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      value: "☕",
      label: "Coffee Enthusiast",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];

  const tabs = [
    { id: "journey", label: "My Journey", icon: <Globe className="h-4 w-4" /> },
    { id: "passion", label: "My Passion", icon: <Heart className="h-4 w-4" /> },
    {
      id: "approach",
      label: "My Approach",
      icon: <Target className="h-4 w-4" />,
    },
  ];

  const tabContent = {
    journey:
      "My journey in software development started with a fascination for creating things that live on the internet. As a beginner developer, I'm constantly learning and growing, taking on new challenges with enthusiasm. Every project is an opportunity to improve my skills and understand new technologies better.",
    passion:
      "I'm passionate about learning and building digital experiences that make a difference. Whether it's a simple website or a mobile app, I love the process of turning ideas into working code. The excitement of seeing something I built work for the first time never gets old.",
    approach:
      "I believe in learning by doing and taking one step at a time. Every project starts with understanding the basics, then gradually adding more features. I focus on writing clean, readable code and learning from each experience to become a better developer.",
  };

  return (
    <section className="p-6 lg:p-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header with Floating Animation */}
        <div className="text-center space-y-6">
          <div className="relative">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
              About Me
            </h1>
            <div className="absolute -top-4 -right-4 opacity-20">
              <Sparkles className="h-8 w-8 text-blue-500 animate-bounce" />
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover my journey, passion, and approach to creating exceptional
            digital experiences.
          </p>
        </div>

        {/* Stats Cards with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const { elementRef, isVisible } = statHooks[index];
            return (
              <Card
                key={stat.title}
                ref={elementRef}
                className={`
                  group relative overflow-hidden
                  bg-card/50 backdrop-blur-sm border border-border/50
                  transition-all duration-500 ease-out
                  transform hover:scale-105 hover:-translate-y-2
                  hover:shadow-xl hover:shadow-blue-500/20
                  scroll-trigger
                  ${isVisible ? "animate" : ""}
                  slide-in-from-bottom-8
                `}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Animated Background */}
                <div
                  className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <CardContent className="relative p-6 text-center space-y-4">
                  <div
                    className={`${stat.color} ${stat.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {stat.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    {stat.value}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content with Tabs */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Interactive Tabs */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Hello, I&apos;m {about.name}
              </h2>
              <h3 className="text-xl text-blue-600 font-semibold mb-6">
                {about.tagline}
              </h3>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-muted/50 rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300
                    ${
                      activeTab === tab.id
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content with Animation */}
            <div className="min-h-[120px]">
              <div
                key={activeTab}
                className="text-muted-foreground leading-relaxed text-lg animate-in slide-in-from-left-4 duration-500"
              >
                {tabContent[activeTab as keyof typeof tabContent]}
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right Column - Skills with Floating Animation */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code className="h-6 w-6 text-blue-500" />
                Technical Arsenal
              </h3>
              <p className="text-muted-foreground mb-6">
                Technologies and tools I wield to bring ideas to life
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {about.skills.slice(0, 8).map((skill, index) => {
                const { elementRef, isVisible } = skillHooks[index];
                return (
                  <div
                    key={skill}
                    ref={elementRef}
                    className={`
                      badge-scroll-trigger
                      ${isVisible ? "animate" : ""}
                    `}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    <Badge
                      variant="outline"
                      className="
                        text-sm py-2 px-4 
                        bg-muted/30 hover:bg-blue-500/20
                        text-muted-foreground hover:text-blue-300
                        border-border hover:border-blue-500/50
                        transition-all duration-300 
                        hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20
                        transform hover:-translate-y-1
                        cursor-pointer
                      "
                    >
                      {skill}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Fun Facts with Hover Effects */}
        <Card className="p-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 border border-border/50 backdrop-blur-sm">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fun Facts About Me
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {funFacts.map((fact, index) => {
                const { elementRef, isVisible } = funFactHooks[index];
                return (
                  <div
                    key={fact.label}
                    ref={elementRef}
                    className={`
                      group text-center p-4 rounded-lg
                      bg-card/50 backdrop-blur-sm border border-border/50
                      transition-all duration-500 ease-out
                      transform hover:scale-105 hover:-translate-y-2
                      hover:shadow-lg hover:shadow-blue-500/20
                      scroll-trigger
                      ${isVisible ? "animate" : ""}
                      slide-in-from-bottom-8
                    `}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <div
                      className={`${fact.color} ${fact.bgColor} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {fact.icon}
                    </div>
                    <div className={`text-2xl font-bold ${fact.color} mb-1`}>
                      {fact.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {fact.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
