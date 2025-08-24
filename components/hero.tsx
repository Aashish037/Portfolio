import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import data from "@/data/data.json";

export function Hero() {
  const { about, contact } = data;

  return (
    <section className="relative min-h-screen flex items-center justify-center p-6 lg:p-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient-x"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                👋 Welcome to my portfolio
              </Badge>
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  {about.name}
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                {about.tagline}
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {about.bio}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={about.resumeUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button size="sm" variant="ghost" asChild>
                <a
                  href={contact.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" asChild>
                <a
                  href={contact.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" asChild>
                <a href={`mailto:${contact.email}`}>
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 p-1">
                  <div className="w-full h-full rounded-full bg-background"></div>
                </div>
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <Image
                    src={about.profileImage}
                    alt={about.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                👨‍💻
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                ⚡
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
