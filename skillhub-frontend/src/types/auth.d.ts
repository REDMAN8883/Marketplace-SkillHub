export interface LoginResponse{
    token: string;
    user: {
        id: string;
        email: string;
        password;
    };
} 