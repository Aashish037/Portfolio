"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Mail,
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Download,
  Code,
} from "lucide-react";
import { cn } from "@/lib/utils";
import data from "@/data/data.json";
import { useSidebar } from "@/components/sidebar-context";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/skills", label: "Skills", icon: Code },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navigation() {
  const pathname = usePathname();
  const { isCollapsed, setIsCollapsed } = useSidebar();
  const { contact } = data;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-[9999] h-screen bg-gray-900/95 backdrop-blur-lg border-r border-gray-800 transition-all duration-300 ease-in-out hidden lg:block",
          isCollapsed ? "w-20" : "w-80"
        )}
        style={{
          position: "fixed",
          left: "0px",
          top: "0px",
          height: "100vh",
          zIndex: 9999,
        }}
      >
        <div className="flex flex-col h-full p-3">
          {/* Header with Logo and Toggle */}
          <div className="flex items-center justify-between mb-6">
            {!isCollapsed && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  AP
                </div>
                <div>
                  <h1 className="text-lg font-bold text-blue-400">
                    Asish Kumar Singh
                  </h1>
                  <p className="text-xs text-gray-400">Full-Stack Developer</p>
                </div>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={cn(
                "text-gray-400 hover:text-white hover:bg-gray-800 p-1 h-8 w-8",
                isCollapsed ? "mx-auto" : ""
              )}
            >
              {isCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={cn(
                      " flex items-center gap-3 rounded-lg text-sm font-medium transition-all duration-200 group h-8",
                      isActive
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                      isCollapsed ? "justify-center w-full mx-auto" : "px-3"
                    )}
                  >
                    <item.icon className="h-4 w-4 flex-shrink-0" />
                    {!isCollapsed && (
                      <span className="truncate">{item.label}</span>
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Separator */}
          <div className="border-t border-gray-800 my-2"></div>

          {/* Download Resume Button */}
          <div>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={cn(
                "text-gray-400 hover:text-white hover:bg-gray-800 h-8 p-0",
                isCollapsed
                  ? "w-8 justify-center mx-auto"
                  : "w-full justify-start"
              )}
            >
              <a
                href={data.about.resumeUrl}
                download
                className={cn(
                  "flex items-center w-full h-full",
                  isCollapsed ? "justify-center" : "justify-start px-3"
                )}
              >
                <Download className="h-4 w-4 flex-shrink-0" />
                {!isCollapsed && <span className="ml-3">Download Resume</span>}
              </a>
            </Button>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-800 my-2"></div>

          {/* Social Links - Grid Layout */}
          <div
            className={cn(
              // "mb-4",
              isCollapsed ? "grid grid-cols-1 gap-2" : "grid grid-cols-3 gap-2"
            )}
          >
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={cn(
                "text-gray-400 hover:text-white hover:bg-gray-700/50 p-2 rounded-md border border-gray-700/50 h-8",
                isCollapsed
                  ? "w-8 justify-center mx-auto"
                  : "w-full justify-center"
              )}
            >
              <a
                href={contact.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={cn(
                "text-gray-400 hover:text-white hover:bg-gray-700/50 p-2 rounded-md border border-gray-700/50 h-8",
                isCollapsed
                  ? "w-8 justify-center mx-auto"
                  : "w-full justify-center"
              )}
            >
              <a
                href={contact.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={cn(
                "text-gray-400 hover:text-white hover:bg-gray-700/50 p-2 rounded-md border border-gray-700/50 h-8",
                isCollapsed
                  ? "w-8 justify-center mx-auto"
                  : "w-full justify-center"
              )}
            >
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center justify-center w-full h-full"
              >
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-800 my-2"></div>

          {/* Theme Toggle */}
          <div
            className={cn(
              " w-full",
              isCollapsed ? "mx-auto" : ""
            )}
          >
            <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 z-[9998] bg-background/80 backdrop-blur-lg border-b p-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Asish Kumar Singh
            </h1>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-[9998] bg-background/80 backdrop-blur-lg border-t p-4">
          <div className="flex items-center justify-around">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className="flex-1">
                  <div
                    className={cn(
                      "flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200",
                      isActive
                        ? "text-blue-600"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        {/* Spacer for mobile content */}
        <div className="h-16" /> {/* Top spacer */}
        <div className="pb-24">
          {" "}
          {/* Bottom spacer */}
          {/* Content goes here */}
        </div>
      </div>
    </>
  );
}
