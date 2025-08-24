"use client";

import { useState, useEffect, useRef } from "react";
import { LoadingScreen } from "./loading-screen";
import { Navigation } from "./navigation";
import { SidebarProvider } from "./sidebar-context";
import { MainContent } from "./main-content";
import { Toaster } from "./ui/sonner";
import { ErrorBoundary } from "./error-boundary";

interface AppWrapperProps {
  children: React.ReactNode;
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("portfolioHasLoaded") !== "true";
    }
    return true;
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (sessionStorage.getItem("portfolioHasLoaded") === "true") {
      setIsLoading(false);
    } else {
      // Fallback: auto-hide loading after 5s in case onLoadingComplete never fires
      const timeout = setTimeout(() => setIsLoading(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem("portfolioHasLoaded", "true");
  };

  if (!isClient) {
    return null;
  }

  return (
    <ErrorBoundary>
      {isLoading && sessionStorage.getItem("portfolioHasLoaded") !== "true" && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
      <div
        className={`flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-800 dark:to-gray-900 relative transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navigation />
        <MainContent>{children}</MainContent>
      </div>
      <Toaster />
    </ErrorBoundary>
  );
}
