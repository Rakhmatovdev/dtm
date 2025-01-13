import {endpoints} from "@/lib/axios";
import authApi from "@/lib/axios/authApi.ts";


export const myServices = {

    categorys: async ()=> {
        try {
            const response = await authApi.get(endpoints.categories);
            return response.data;
        } catch (error) {
            console.error(" Categorys failed", error);
            throw new Error(" Categorys failed. Please check your credentials and try again.");
        }
    },
    topics: async ()=> {
        try {
            const response = await authApi.get(endpoints.topics);
            return response.data;
        } catch (error) {
            console.error(" topics failed", error);
            throw new Error(" topics failed. Please check your credentials and try again.");
        }
    },


};

export default myServices ;
