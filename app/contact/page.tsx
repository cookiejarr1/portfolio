"use client";

import React, { useState } from "react";
import NavigationBar from "../components/sections/NavigationBar";
import Footer from "../components/sections/Footer";
import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  Image,
} from "@nextui-org/react";
import Contacts from "../components/icons/ContactsIcon";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="text-foreground bg-background min-h-screen">
      <NavigationBar />
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-foreground/70">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-background/60 dark:bg-default-100/50">
            <CardBody className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  variant="bordered"
                  isRequired
                  isDisabled={status === "loading"}
                />
                <Input
                  type="email"
                  label="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  variant="bordered"
                  isRequired
                  isDisabled={status === "loading"}
                />
                <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  variant="bordered"
                  minRows={6}
                  isRequired
                  isDisabled={status === "loading"}
                />

                {status === "success" && (
                  <div className="p-3 bg-success/20 text-success rounded-lg">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3 bg-danger/20 text-danger rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  className="w-full"
                  isLoading={status === "loading"}
                  isDisabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardBody>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-background/60 dark:bg-default-100/50">
              <CardBody className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    alt="Profile"
                    className="object-cover rounded-full"
                    height={100}
                    width={100}
                    src="/profile.jpg"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">Cyrus Jarod Layugan</h3>
                    <p className="text-foreground/70">Aspiring Software Engineer</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Let&apos;s Connect</h4>
                    <p className="text-foreground/70 text-sm">
                      I&apos;m always open to discussing new projects, creative ideas,
                      or opportunities to be part of your visions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Find me on</h4>
                    <div className="flex flex-wrap gap-2">
                      {Contacts.map((contact) => (
                        <Button
                          key={contact.name}
                          variant="bordered"
                          size="sm"
                          startContent={contact.image}
                          className="text-foreground"
                        >
                          {contact.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-background/60 dark:bg-default-100/50">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold mb-4">What I Can Help With</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Web Development (Frontend & Backend)</li>
                  <li>• Mobile App Development</li>
                  <li>• UI/UX Design</li>
                  <li>• Technical Consulting</li>
                  <li>• Code Reviews & Mentoring</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
