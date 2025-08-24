import React from "react";
import { ContactSection } from "@/components/contact-section";

export const metadata = {
  title: "Contact - Asish Kumar Singh",
  description:
    "Get in touch with me for collaborations, project discussions, or just to say hello. I'm always interested in new opportunities and exciting projects.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ContactSection />
    </div>
  );
}
