import { CreateInterviewInput } from "../schemas/interview.schema";
export declare const createInterviewService: (input: CreateInterviewInput) => Promise<{
    interview: {
        level: string;
        userId: string;
        id: string;
        createdAt: Date;
        title: string;
        position: string;
        yearsOfExperience: number | null;
        category: {
            name: string;
            id: string;
            description: string | null;
            slug: string;
        } | null;
        status: import("../prisma/src/generated/prisma/enums").InterviewStatus;
    };
}>;
export declare const endInterviewService: (interviewId: string) => Promise<{
    interview: {
        type: import("../prisma/src/generated/prisma/enums").InterviewType;
        level: string;
        userId: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        position: string;
        yearsOfExperience: number | null;
        language: string;
        targetDuration: number | null;
        questionCount: number | null;
        status: import("../prisma/src/generated/prisma/enums").InterviewStatus;
        categoryId: string | null;
    };
    feedback: {
        id: string;
        createdAt: Date;
        interviewId: string;
        overallScore: number | null;
        strengths: string | null;
        weaknesses: string | null;
        summary: string | null;
    };
}>;
export declare const deleteInterviewService: (interviewId: string) => Promise<{
    success: boolean;
}>;
//# sourceMappingURL=interview.service.d.ts.map