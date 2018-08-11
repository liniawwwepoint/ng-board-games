export interface Roles {
    admin?: boolean;
    user?: boolean;
}

export interface User {
    uid: string;
    email: string;
    roles: Roles;
    firstName?: string;
    lastName?: string;
    fcmTokens?: { [token: string]: true };
}