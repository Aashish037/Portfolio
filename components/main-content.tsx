"use client";

import { useSidebar } from "@/components/sidebar-context";
import { cn } from "@/lib/utils";

interface MainContentProps {
  children: React.ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  const { isCollapsed } = useSidebar();

  return (
    <main
      className={cn(
        "flex-1 h-screen overflow-y-auto transition-all duration-300",
        isCollapsed ? "lg:ml-20" : "lg:ml-80"
      )}
    >
      {children}
    </main>
  );
}
