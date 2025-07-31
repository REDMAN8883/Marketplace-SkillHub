// JWT 

import  axios  from "./api";
import type { LoginResponse } from "../types/auth";

export const login = async (
    email: string,
    password: string
): Promise<LoginResponse> => {
    try{
        const res = await axios.post<LoginResponse>("/auth/login", {email, password});
        return res.data;
    } catch (error: unknown){
        if(error instanceof Error){
            console.error("Error de login:", error.message);
        } else {
            console.log ("Error desconocido durante el login");
        }
        throw error;
    }
}