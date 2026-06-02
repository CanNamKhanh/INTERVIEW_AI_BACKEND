import z from "zod";

const CATEGORIES = [
  "Information Technology & Software",
  "Business & Entrepreneurship",
  "Electrical & Electronics Engineering",
  "Marketing & Communications",
  "Finance & Accounting",
  "Human Resource Management",
  "Graphic Design & UI/UX",
  "Logistics & Supply Chain Management",
  "Healthcare & Medical Services",
  "Languages & Translation",
] as const;

const TYPES = ["TECHNICAL", "BEHAVIORAL", "SYSTEM_DESIGN", "HR", "MIXED"];

export const interviewSchema = z.object({
  title: z.string().min(1, { message: "Title can not be a blank" }),
  position: z.string().min(1, { message: "Position can not be a blank" }),
  level: z.string().min(1, { message: "Level can not be a blank" }),
  type: z.enum(TYPES, {
    message: "Please select a valid interview type",
  }),
  yearsOfExperience: z.number().int().min(0).max(6),
  category: z.enum(CATEGORIES, {
    message: "Please select a valid industry category",
  }),
});

export type InterviewInput = z.infer<typeof interviewSchema>;

export type CreateInterviewInput = InterviewInput & {
  userId: string;
};
