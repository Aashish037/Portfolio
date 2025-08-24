"use client";

import { useEffect } from "react";

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== "development") return;

    // Track page load performance
    const trackPerformance = () => {
      if (typeof window !== "undefined" && "performance" in window) {
        const navigation = performance.getEntriesByType(
          "navigation"
        )[0] as PerformanceNavigationTiming;

        if (navigation) {
          console.log("🚀 Performance Metrics:");
          console.log(
            `- DOM Content Loaded: ${
              navigation.domContentLoadedEventEnd -
              navigation.domContentLoadedEventStart
            }ms`
          );
          console.log(
            `- Load Complete: ${
              navigation.loadEventEnd - navigation.loadEventStart
            }ms`
          );
          console.log(
            `- Total Load Time: ${
              navigation.loadEventEnd - navigation.fetchStart
            }ms`
          );
          console.log(
            `- First Paint: ${
              performance.getEntriesByName("first-paint")[0]?.startTime || "N/A"
            }ms`
          );
          console.log(
            `- First Contentful Paint: ${
              performance.getEntriesByName("first-contentful-paint")[0]
                ?.startTime || "N/A"
            }ms`
          );
        }
      }
    };

    // Track Core Web Vitals
    const trackCoreWebVitals = () => {
      if (typeof window !== "undefined" && "PerformanceObserver" in window) {
        // Track Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log("🎯 LCP:", lastEntry.startTime, "ms");
        });
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

        // Track First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            // Only log if entry has processingStart (PerformanceEventTiming)
            if ("processingStart" in entry) {
              const eventEntry = entry as PerformanceEventTiming;
              console.log(
                "⚡ FID:",
                eventEntry.processingStart - eventEntry.startTime,
                "ms"
              );
            }
          });
        });
        fidObserver.observe({ entryTypes: ["first-input"] });

        // Track Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          console.log("📐 CLS:", clsValue);
        });
        clsObserver.observe({ entryTypes: ["layout-shift"] });
      }
    };

    // Track resource loading
    const trackResourceLoading = () => {
      if (typeof window !== "undefined" && "PerformanceObserver" in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.duration > 1000) {
              // Log slow resources (>1s)
              console.log(
                "🐌 Slow Resource:",
                entry.name,
                entry.duration,
                "ms"
              );
            }
          });
        });
        resourceObserver.observe({ entryTypes: ["resource"] });
      }
    };

    // Initialize tracking
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", trackPerformance);
    } else {
      trackPerformance();
    }

    window.addEventListener("load", trackPerformance);
    trackCoreWebVitals();
    trackResourceLoading();

    // Cleanup
    return () => {
      document.removeEventListener("DOMContentLoaded", trackPerformance);
      window.removeEventListener("load", trackPerformance);
    };
  }, []);

  return null; // This component doesn't render anything
}
