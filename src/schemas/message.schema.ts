import z from "zod";

export const sendMessageSchema = z.object({
  interviewId: z.string().uuid({ message: "Invalid interview ID format" }),
  content: z.string().min(1, { message: "Message cannot be empty" }),
});

export type SendMessageInput = z.infer<typeof sendMessageSchema>;
