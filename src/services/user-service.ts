import authApi from "@/lib/axios/authApi.ts";
import  {endpoints} from "@/lib/axios";

export const userService = {

    exams: async ()=> {
        try {
            const response = await authApi.get(endpoints.exam.user);
            return response.data;
        } catch (error) {
            console.error("Create failed", error);
            throw new Error("Create failed. Please check your credentials and try again.");
        }
    },
    profile: async (id:any)=> {
        try {
            const response = await authApi.get(`${endpoints.profile}${id}/`);
            return response.data;
        } catch (error) {
            console.error("Create failed", error);
            throw new Error("Create failed. Please check your credentials and try again.");
        }
    }
};

export default userService;
