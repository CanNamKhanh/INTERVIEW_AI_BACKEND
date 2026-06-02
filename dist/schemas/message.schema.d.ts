import z from "zod";
export declare const sendMessageSchema: z.ZodObject<{
    interviewId: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
export type SendMessageInput = z.infer<typeof sendMessageSchema>;
//# sourceMappingURL=message.schema.d.ts.map