import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(3, { message: "Name is required" }),
  email: z.email({ message: "Invalid email address" }),
  message: z.string().optional().default("Hi, I'm interested in working with you on a project."),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;