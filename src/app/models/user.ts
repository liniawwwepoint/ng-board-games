export interface Roles {
    admin?: boolean;
    user?: boolean;
}

export interface User {
    id: string;
    firstName: string;
    roles: Roles;
    lastName?: string;
    email?: string;
}