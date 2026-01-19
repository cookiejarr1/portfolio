"use client";

import React, { useState } from "react";
import { Card, CardBody, Input, Textarea, Button, Image } from "@nextui-org/react";
import { footerLinks } from "@/app/data/socials";
import Socials from "../components/navigation/Socials";
import { contactFormSchema, ContactFormSchema } from "../types/schema/contact";
import { emailForm } from "../data/email";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    setStatus("loading");
    setErrors({});

    const result = await emailForm(formData);

    if (result.success) {
      setFormData({
        name: "",
        email: "",
        message: undefined,
      });
      setStatus("idle");
      setErrors({});
      toast.success(
        "Thank you. Your form has been submitted, and a confirmation email has been sent to you.",
      );
    } else {
      setStatus("error");
      setErrors(result.error);
      toast.error(result.error.message || result.error);
    }
  };

  const validateData = ({ value, field }: ContactFormSchema) => {
    const form = contactFormSchema.safeParse({
      ...formData,
      [field]: value,
    });
    setFormData({
      ...formData,
      [field]: value,
    });

    if (!form.success) {
      const error = form.error.flatten().fieldErrors[field];
      if (error && error.length > 0) {
        setErrors((prev) => ({ ...prev, [field]: error }));
      } else {
        setErrors((prev) => ({ ...prev, unknown: "An error occurred. Please try again later." }));
      }
    } else {
      setFormData((prev) => ({ ...prev, ...form.data }));
    }
    setStatus("error");
    return;
  };

  return (
    <div className="text-foreground bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium mb-4">Get In Touch</h1>
          <p className="text-lg text-foreground/70">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-background/60 dark:bg-slate-700/20 rounded-md">
            <CardBody className="h-full p-8">
              <h2 className="text-2xl font-medium mb-6">{"Let's Talk"}</h2>
              <div className="space-y-6 h-full grow flex flex-col justify-between">
                <div className="flex flex-col space-y-4 h-full justify-start">
                  <div
                    className={`flex flex-col gap-3 h-fit ${status === "loading" ? "cursor-wait" : "cursor-auto"}`}
                  >
                    <span className="text-sm text-white after:content-['*'] after:ml-1.5 after:text-red-500">
                      Name
                    </span>
                    <Input
                      isRequired={true}
                      value={formData.name}
                      onValueChange={(value) => {
                        validateData({ value: value, field: "name" });
                      }}
                      placeholder="John Doe"
                      variant="bordered"
                      isDisabled={status === "loading"}
                      classNames={{
                        input: "p-2 border-2 border-white/40 rounded-md text-sm",
                        inputWrapper: "px-0",
                        errorMessage: "text-sm text-white",
                      }}
                      isInvalid={Boolean(errors["name"])}
                      errorMessage={errors["name"]}
                    />
                  </div>
                  <div
                    className={`flex flex-col gap-3 h-fit ${status === "loading" ? "cursor-wait" : "cursor-auto"}`}
                  >
                    <span className="text-sm text-white after:content-['*'] after:ml-1.5 after:text-red-500">
                      Email
                    </span>
                    <Input
                      isRequired={true}
                      type="email"
                      value={formData.email}
                      onValueChange={(value) => {
                        validateData({ value: value, field: "email" });
                      }}
                      placeholder="johndoe@email.com"
                      variant="bordered"
                      isDisabled={status === "loading"}
                      classNames={{
                        input: "p-2 border-2 border-white/40 rounded-md text-sm",
                        inputWrapper: "px-0",
                      }}
                      errorMessage={() => (
                        <ul>
                          {errors["email"]?.map((error, i) => (
                            <li key={i}>{error}</li>
                          ))}
                        </ul>
                      )}
                      isInvalid={true}
                    />
                  </div>
                  <div
                    className={`flex flex-col gap-2 h-fit ${status === "loading" ? "cursor-wait" : "cursor-auto"}`}
                  >
                    <span className="text-sm text-white">Message</span>
                    <Textarea
                      value={formData.message}
                      onValueChange={(value) => {
                        validateData({ value: value, field: "message" });
                      }}
                      placeholder="Hi, I'm interested in working with you on a project. Tell me about your project or inquiry."
                      variant="bordered"
                      minRows={6}
                      isDisabled={status === "loading"}
                      classNames={{
                        input: "p-2 border-2 border-white/40 rounded-md text-sm",
                        inputWrapper: "px-0",
                      }}
                      isInvalid={Boolean(errors["message"])}
                      errorMessage={errors["message"]}
                    />
                  </div>

                  {status === "success" && (
                    <div className="p-3 bg-success/20 text-success rounded-lg">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </div>
                  )}
                </div>

                <Button
                  onPress={handleSubmit}
                  variant="flat"
                  isLoading={status === "loading"}
                  isDisabled={status === "loading"}
                  className={
                    "w-full dark:bg-slate-300/10 dark:hover:bg-slate-300/30 dark:text-white text-black p-2 rounded-md data-[loading=true]:cursor-wait cursor-auto"
                  }
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </CardBody>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-background/60 dark:bg-slate-700/20 rounded-md">
              <CardBody className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    alt="Profile"
                    className="object-cover rounded-full"
                    height={100}
                    width={100}
                    src="/profile.png"
                  />
                  <div>
                    <h3 className="text-2xl font-medium">Cyrus Jarod Layugan</h3>
                    <p className="text-foreground/70">Software Engineer</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-medium mb-2">Let&apos;s Connect</h4>
                    <p className="text-foreground/70 text-sm">
                      I&apos;m always open to discussing new projects, creative ideas, or
                      opportunities to be part of your visions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Find me on</h4>
                    <div className="flex flex-wrap gap-4">
                      <Socials socialsLinks={footerLinks} isWithLabel={true} />
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-background/60 dark:bg-slate-700/20 rounded-md">
              <CardBody className="p-8">
                <h3 className="text-xl font-medium mb-4">What I Can Help With</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Fullstack Web Development</li>
                  <li>• Mobile App Development</li>
                  <li>• Application Development</li>
                  <li>• UI/UX Design</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
