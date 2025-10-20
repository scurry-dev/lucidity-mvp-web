import { z } from "zod";

export const waitlistSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
