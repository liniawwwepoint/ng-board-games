export interface Roles {
    admin?: boolean;
    user?: boolean;
}

export interface User {
    email: string;
    roles: Roles;
    firstName?: string;
    lastName?: string;
}