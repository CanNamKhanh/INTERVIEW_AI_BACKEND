export declare const sendMessageService: (interviewId: string, userContent: string) => Promise<{
    userMessage: {
        role: import("../prisma/src/generated/prisma/enums").MessageRole;
        id: string;
        createdAt: Date;
        content: string;
        interviewId: string;
    };
    aiMessage: {
        role: import("../prisma/src/generated/prisma/enums").MessageRole;
        id: string;
        createdAt: Date;
        content: string;
        interviewId: string;
    };
}>;
export declare const getAllMessagesService: (interviewId: string) => Promise<{
    role: import("../prisma/src/generated/prisma/enums").MessageRole;
    id: string;
    createdAt: Date;
    content: string;
    interviewId: string;
}[]>;
//# sourceMappingURL=message.service.d.ts.map