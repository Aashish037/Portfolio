"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import data from "@/data/data.json";

export function ContactPreview() {
  // React-compliant: call hooks explicitly for each contact info item (3)
  const contactInfoHook0 = useScrollAnimation();
  const contactInfoHook1 = useScrollAnimation();
  const contactInfoHook2 = useScrollAnimation();
  const contactInfoHooks = [
    contactInfoHook0,
    contactInfoHook1,
    contactInfoHook2,
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { contact } = data;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TEMPORARY: Using mailto for testing until EmailJS is set up
    // TODO: Replace with EmailJS implementation

    // Create email content
    const emailSubject = encodeURIComponent(
      formData.subject || "Contact from Portfolio"
    );
    const emailBody = encodeURIComponent(`
Hello Asish,

You have received a new contact message from your portfolio:

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent from your portfolio contact form.
    `);

    // Create mailto link
    const mailtoLink = `mailto:${contact.email}?subject=${emailSubject}&body=${emailBody}`;

    // Open email client
    window.open(mailtoLink, "_blank");

    // Reset form and show success message
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_email: contact.email,
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Contact from Portfolio",
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // Reset form and show success message
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

      console.log("Email sent successfully:", result);
    } catch (error) {
      console.error("Failed to send email:", error);
      setIsSubmitting(false);
      // You can add error handling here (show error message to user)
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: contact.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(
        contact.location
      )}`,
    },
  ];

  return (
    <section className="p-6 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Let&apos;s Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring innovative ideas to life? Whether you want to discuss
            new opportunities, partner on a project, or just want to say hello,
            I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a project in mind, want to discuss new
                opportunities, partner on something exciting, or just want to
                say hello, I&apos;m always interested in hearing about what
                you&apos;re working on.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const { elementRef, isVisible } = contactInfoHooks[index];
                return (
                  <div
                    key={info.label}
                    ref={elementRef}
                    className={`
                        flex items-center space-x-4 p-4 rounded-lg
                        bg-card/50 backdrop-blur-sm border border-border/50
                        transition-all duration-500 ease-out
                        transform hover:scale-105 hover:-translate-y-1
                        hover:shadow-lg hover:shadow-blue-500/20
                        scroll-trigger
                        ${isVisible ? "animate" : ""}
                        ${
                          index % 2 === 0
                            ? "slide-in-from-left-4"
                            : "slide-in-from-right-4"
                        }
                      `}
                    style={{
                      transitionDelay: `${index * 150}ms`,
                    }}
                  >
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {info.label}
                      </p>
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-blue-500 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello!"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-blue-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Message Sent!</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
