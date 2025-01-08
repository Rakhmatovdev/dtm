import authApi from "@/lib/axios/authApi.ts";
import  {endpoints} from "@/lib/axios";

export const examService = {

    create: async (data:any)=> {
        try {
            const response = await authApi.post(endpoints.exam.create,data);
            return response.data;
        } catch (error) {
            console.error("Create failed", error);
            throw new Error("Create failed. Please check your credentials and try again.");
        }
    },
 exams: async ()=> {
        try {
            const response = await authApi.get(endpoints.exam.exams);
            return response.data;
        } catch (error) {
            console.error("Exams failed", error);
            throw new Error("Exams failed. Please check your credentials and try again.");
        }
    },
 start: async (id:any)=> {
        try {
            const response = await authApi.post(`${endpoints.exam.start}${id}/`);
            return response.data;
        } catch (error) {
            console.error("Exams failed", error);
            throw new Error("Your exam has reached the limit of 3 attempts.");
        }
    },
submit: async (props:any)=> {
        const {id,test_id,selected_answer_id}=props
        try {
            console.log(props);
            const response =await authApi.post(`${endpoints.submit}${id}/`,{test_id,selected_answer_id});
            return response.data;
        }catch(error) {
            console.error("Submit failed", error);
        }
},
complited: async (id:any)=> {
        try {
            const response = await authApi.post(`${endpoints.exam.complited}${id}/`);
            return response.data;
        } catch (error) {
            console.error("Exams failed", error);
            throw new Error("Exams failed. Please check your credentials and try again.");
        }
    
},
upload: async (data:any)=> { 

    const file=data.file[0].originFileObj
    try {
        const response =await authApi.post(endpoints.upload,{...data,file},{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }catch(error) {
        console.error('Fayl yuklashda xato:', error);
        throw error;
    }
}
}
export default examService;
