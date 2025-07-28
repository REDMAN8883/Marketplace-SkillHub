// JWT 

import { api } from "./api";

export const login = async (email: string, password: string) => {
    try{
        const res = await api.post("/auth/login", {email, password});
        return res.data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("Ocurrió un error desconocido");
        }
    }
};