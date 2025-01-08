import UBreadcrumb from "@/components/ui/UBreadcrumb";
import { cn } from "@/lib/utils";
import userService from "@/services/user-service";
import {  TDeleted } from "@/types";
import { itemsExam} from "@/types/data";
import { useMutation } from "@tanstack/react-query";
import { Collapse, CollapseProps, notification } from "antd";
import { useEffect } from "react";
import {  SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router";

const UserExam= () => {

    

    const { id:userId } = useParams<{ id: string }>();
    console.log(userId);
    
    const { data:exams,mutate} = useMutation({
        mutationKey: ["submitted"],
        mutationFn: userService.profile,
        onSuccess: () => {
            // notification.success({message: 'Your exams'});
        },
        onError: (error) => {
            notification.error({message: error?.message});
        },
    });

    
    const {
        handleSubmit
    } = useForm({defaultValues:{
            is_deleted:'',
            delete_id:null
        }})

    const onSubmit: SubmitHandler<TDeleted> = (data) => console.log(data)



useEffect(() => {
        mutate(userId);
}, []);
console.log(
    exams?.attempts[1]?.answers
);


const items: CollapseProps['items'] = [
    {
      key: '1',
      label: `Urunish 1 ${exams?.attempts[0]?.answers.length===undefined?0:exams?.attempts[0]?.answers.length}/${exams?.attempts[0]?.score===undefined?0:exams?.attempts[0]?.score}`,
      children: <div>{exams?.attempts[0]? exams?.attempts[0].answers.map((item:any) => {
        return <div key={item.id} className="border">
           <p className="font-semibold tp">{item.question}</p>
            <p className="tp text-xs">
                <span className={cn('px-1 py-[2px] rounded-3xl text-white mr-1',item?.is_correct? "bg-green-500":"bg-red-500")}>Your</span>
                {item.selected_answer?item.selected_answer:"Siz javob bermagansiz :("}
             <br /></p>
                  <p className="tp text-xs">  <span className={('px-1 mt-2 py-[2px] mr-1 rounded-3xl  text-white bg-green-500')}>Correct answer</span>
                    {item.correct_answer}
                </p>
               
              
            </div>
  }):<p className="tp text-xs">Yana urinib ko'ring</p>}</div>
    },
    {
      key: '2',
      label: `Urunish 2  ${exams?.attempts[1]?.answers.length===undefined?0:exams?.attempts[1]?.answers.length}/${exams?.attempts[1]?.score===undefined?0:exams?.attempts[1]?.score}`,
      children: <div>{exams?.attempts[1]? exams?.attempts[1].answers.map((item:any) => {
        return <div key={item.id} className="border">
           <p className="font-semibold tp">{item.question}</p>
            <p className="tp text-xs">
                <span className={cn('px-1 py-[2px] rounded-3xl text-white mr-1',item?.is_correct? "bg-green-500":"bg-red-500")}>Your</span>
                {item.selected_answer?item.selected_answer:"Siz javob bermagansiz :("}
             <br /></p>
                  <p className="tp text-xs">  <span className={('px-1 mt-2 py-[2px] mr-1 rounded-3xl  text-white bg-green-500')}>Correct answer</span>
                    {item.correct_answer}
                </p>
               
              
            </div>
  }):<p className="tp text-xs">Yana urinib ko'ring</p>}</div>
    
    },
    {
      key: '3',
      label: `Urunish 3 ${exams?.attempts[2]?.answers.length===undefined?0:exams?.attempts[2]?.answers.length}/${exams?.attempts[2]?.score===undefined?0:exams?.attempts[2]?.score}`,
      children: <div>{exams?.attempts[2]? exams?.attempts[2]?.answers.map((item:any) => {
        return <div key={item.id} className="border">
           <p className="font-semibold tp">{item.question}</p>
            <p className="tp text-xs">
                <span className={cn('px-1 py-[2px] rounded-3xl text-white mr-1',item?.is_correct? "bg-green-500":"bg-red-500")}>Your</span>
                {item.selected_answer?item.selected_answer:"Siz javob bermagansiz :("}
             <br /></p>
                  <p className="tp text-xs">  <span className={('px-1 mt-2 py-[2px] mr-1 rounded-3xl  text-white bg-green-500')}>Correct answer</span>
                    {item.correct_answer}
                </p>
               
              
            </div>
  }):<p className="tp text-xs">Yana urinib ko'ring</p>}</div>
    }
  ];


    return (
        <div className="soh">


            <UBreadcrumb items={itemsExam} />

            <form className="" onSubmit={handleSubmit(onSubmit)} >
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 sm:mt-7">
                   <p className="tp font-bold">{exams?.exam} </p>
                    


                   <Collapse
      items={items} 
        className="bg-blue-100 font-bold"
    />

                </div>
            </form>
        </div>
    );
};

export default UserExam;
