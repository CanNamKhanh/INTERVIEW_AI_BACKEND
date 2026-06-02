import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly IndustryCategory: "IndustryCategory";
    readonly Feedback: "Feedback";
    readonly Interview: "Interview";
    readonly Message: "Message";
    readonly User: "User";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const IndustryCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
};
export type IndustryCategoryScalarFieldEnum = (typeof IndustryCategoryScalarFieldEnum)[keyof typeof IndustryCategoryScalarFieldEnum];
export declare const FeedbackScalarFieldEnum: {
    readonly id: "id";
    readonly interviewId: "interviewId";
    readonly overallScore: "overallScore";
    readonly strengths: "strengths";
    readonly weaknesses: "weaknesses";
    readonly summary: "summary";
    readonly createdAt: "createdAt";
};
export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum];
export declare const InterviewScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly categoryId: "categoryId";
    readonly title: "title";
    readonly position: "position";
    readonly level: "level";
    readonly yearsOfExperience: "yearsOfExperience";
    readonly type: "type";
    readonly language: "language";
    readonly targetDuration: "targetDuration";
    readonly questionCount: "questionCount";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type InterviewScalarFieldEnum = (typeof InterviewScalarFieldEnum)[keyof typeof InterviewScalarFieldEnum];
export declare const MessageScalarFieldEnum: {
    readonly id: "id";
    readonly interviewId: "interviewId";
    readonly role: "role";
    readonly content: "content";
    readonly createdAt: "createdAt";
};
export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const IndustryCategoryOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
};
export type IndustryCategoryOrderByRelevanceFieldEnum = (typeof IndustryCategoryOrderByRelevanceFieldEnum)[keyof typeof IndustryCategoryOrderByRelevanceFieldEnum];
export declare const FeedbackOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly interviewId: "interviewId";
    readonly strengths: "strengths";
    readonly weaknesses: "weaknesses";
    readonly summary: "summary";
};
export type FeedbackOrderByRelevanceFieldEnum = (typeof FeedbackOrderByRelevanceFieldEnum)[keyof typeof FeedbackOrderByRelevanceFieldEnum];
export declare const InterviewOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly categoryId: "categoryId";
    readonly title: "title";
    readonly position: "position";
    readonly level: "level";
    readonly language: "language";
};
export type InterviewOrderByRelevanceFieldEnum = (typeof InterviewOrderByRelevanceFieldEnum)[keyof typeof InterviewOrderByRelevanceFieldEnum];
export declare const MessageOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly interviewId: "interviewId";
    readonly content: "content";
};
export type MessageOrderByRelevanceFieldEnum = (typeof MessageOrderByRelevanceFieldEnum)[keyof typeof MessageOrderByRelevanceFieldEnum];
export declare const UserOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
};
export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map