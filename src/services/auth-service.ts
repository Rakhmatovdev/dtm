import { LoginData, RegisterData } from "@/types";
import apiClient, { endpoints } from "../lib/axios";



export const AuthService = {

    login: async (data: LoginData): Promise<string> => {
        try {
            const response = await apiClient.post(endpoints.auth.signIn, data);
            const token = response.data.access;
            localStorage.setItem('accessToken', token);
            localStorage.setItem('role', response.data.role);
            return token;
        } catch (error) {
            console.error("Login failed", error);
            throw new Error("Login failed. Please check your credentials and try again.");
        }
    },


    register: async (data: RegisterData): Promise<void> => {
        try {
            const res=await apiClient.post(endpoints.auth.signUp, data);
            const token = res.data.access;
            localStorage.setItem('accessToken', token);
            localStorage.setItem('role', 'user');
            return token;
        } catch (error) {
            console.error("Registration failed", error);
            throw new Error("Registration failed. Please try again later.");
        }
    },


    logout: (): void => {
        localStorage.removeItem('role');
        localStorage.removeItem('accessToken');
    },


    isAuthenticated: (): boolean => {
        return !!localStorage.getItem('accessToken');
    },
};

export default AuthService;
