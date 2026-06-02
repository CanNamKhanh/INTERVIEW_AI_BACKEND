import { LoginInput, RegisterInput } from "../schemas/auth.schema";
export declare const registerService: (input: RegisterInput) => Promise<{
    user: {
        name: string;
        email: string;
        id: string;
        createdAt: Date;
    };
}>;
export declare const loginService: (input: LoginInput) => Promise<{
    accessToken: string;
    refreshToken: string;
}>;
export declare const logoutService: (token: string) => Promise<{
    token: string;
}>;
//# sourceMappingURL=auth.service.d.ts.map