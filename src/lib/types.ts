import { z } from 'zod';

export const MemberSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  isLeader: z.boolean().default(false),
});

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const RegistrationSchema = z.object({
  teamName: z.string().min(3, 'Team name must be at least 3 characters.'),
  college: z.string().min(3, 'College name must be at least 3 characters.'),
  teamSize: z.coerce.number().min(4).max(5),
  members: z.array(MemberSchema).min(4).max(5),
  skills: z.string().min(10, "Please describe your team's skills in at least 10 characters."),
  paymentScreenshot: z.any()
    .refine((file) => file, "Payment screenshot is required.")
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ).optional(),
});

export type RegistrationInput = z.infer<typeof RegistrationSchema>;
