import z from "zod";
export declare const interviewSchema: z.ZodObject<{
    title: z.ZodString;
    position: z.ZodString;
    level: z.ZodString;
    type: z.ZodEnum<{
        [x: string]: string;
    }>;
    yearsOfExperience: z.ZodNumber;
    category: z.ZodEnum<{
        "Information Technology & Software": "Information Technology & Software";
        "Business & Entrepreneurship": "Business & Entrepreneurship";
        "Electrical & Electronics Engineering": "Electrical & Electronics Engineering";
        "Marketing & Communications": "Marketing & Communications";
        "Finance & Accounting": "Finance & Accounting";
        "Human Resource Management": "Human Resource Management";
        "Graphic Design & UI/UX": "Graphic Design & UI/UX";
        "Logistics & Supply Chain Management": "Logistics & Supply Chain Management";
        "Healthcare & Medical Services": "Healthcare & Medical Services";
        "Languages & Translation": "Languages & Translation";
    }>;
}, z.core.$strip>;
export type InterviewInput = z.infer<typeof interviewSchema>;
export type CreateInterviewInput = InterviewInput & {
    userId: string;
};
//# sourceMappingURL=interview.schema.d.ts.map