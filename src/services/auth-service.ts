import apiClient, {endpoints} from "../lib/axios";
import {LoginData, RegisterData} from "@/types";



export const AuthService = {

    login: async (data: LoginData): Promise<string> => {
        try {
            const response = await apiClient.post(endpoints.auth.signIn, data);
            const token = response.data.access;
            sessionStorage.setItem('accessToken', token);
            sessionStorage.setItem('role', response.data.role);
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
            sessionStorage.setItem('accessToken', token);
            sessionStorage.setItem('role', 'user');
            return token;
        } catch (error) {
            console.error("Registration failed", error);
            throw new Error("Registration failed. Please try again later.");
        }
    },


    logout: (): void => {
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('accessToken');
    },


    isAuthenticated: (): boolean => {
        return !!sessionStorage.getItem('accessToken');
    },
};

export default AuthService;
