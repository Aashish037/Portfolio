import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/sidebar-context";
import { AppWrapper } from "@/components/app-wrapper";
import { PerformanceMonitor } from "@/components/performance-monitor";
import { PreloadResources } from "@/components/preload-resources";
import { ServiceWorkerRegister } from "@/components/service-worker-register";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asish Kumar Singh - Full-Stack Developer",
  description:
    "Portfolio of Asish Kumar Singh - Full-Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Mobile Developer",
  ],
  authors: [{ name: "Asish Kumar Singh" }],
  openGraph: {
    title: "Asish Kumar Singh - Full-Stack Developer",
    description:
      "Portfolio showcasing modern web development projects and expertise",
    url: "https://asishkumar.dev",
    siteName: "Asish Kumar Singh Portfolio",
    images: [
      {
        url: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        width: 1200,
        height: 630,
        alt: "Asish Kumar Singh - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asish Kumar Singh - Full-Stack Developer",
    description:
      "Portfolio showcasing modern web development projects and expertise",
    creator: "@asishkumar_dev",
    images: [
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PreloadResources />
      </head>
      <body className={inter.className} style={{ overflowX: "hidden" }}>
        <PerformanceMonitor />
        <ServiceWorkerRegister />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppWrapper>{children}</AppWrapper>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
