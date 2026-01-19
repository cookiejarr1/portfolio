import { ContactFormSchema, contactFormSchema } from "../types/schema/contact";
import emailjs from "@emailjs/browser";

export async function emailForm(formData: ContactFormSchema) {
  try {
    const form = contactFormSchema.safeParse(formData);

    if (!form.success) {
      console.error("The form could not be submitted because some fields are invalid.");
      throw new Error("One or more fields are invalid. Please review the form and try again.");
    }
    if (
      !process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
    ) {
      console.error("Missing service environment variable");
      throw new Error("Email system failed. Contact the site owner");
    }

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
      formData,
      process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
    );

    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error || "Something went wrong!" };
  }
}
