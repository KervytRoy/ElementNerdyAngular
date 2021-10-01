export interface UserI {
    name: string;
    password: string;
    role: string;
}

export interface UserResponseI {
    message: string;
    token: string;
    userId: number;
}