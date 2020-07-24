declare function main(): Promise<void>;
declare function getUserId(): string;
declare function fetchUserInfo(userId: string): Promise<any>;
declare function pullUserInfo(userId: string): Promise<Response>;
declare function displayView(view: string): void;
interface IUserInfo {
    name: string;
    login: string;
    avatar_url: string;
    location: string;
    public_repos: string;
    [key: string]: unknown;
}
declare function createView(userInfo: IUserInfo): string;
declare function escapeSpecialChars(str: string): string;
declare function escapeHTML(strings: TemplateStringsArray, ...values: any[]): string;
//# sourceMappingURL=index.d.ts.map