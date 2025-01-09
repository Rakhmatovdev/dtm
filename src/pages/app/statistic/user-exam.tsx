import UBreadcrumb from "@/components/ui/UBreadcrumb";
import { cn } from "@/lib/utils";
import userService from "@/services/user-service";
import {  itemStatisticD} from "@/types/data";
import { useMutation } from "@tanstack/react-query";
import { Collapse, CollapseProps, notification, Spin } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router";

const UserExam= () => {

    

    const { id:userId } = useParams<{ id: string }>();
    
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

    

useEffect(() => {
        mutate(userId);
}, []);


const items: CollapseProps['items'] = exams?.attempts
  ?.filter((attempt: any) => attempt && attempt?.answers?.length > 0)
  ?.map((attempt: any, index: number) => ({
    key: (index + 1).toString(),
    label: `Urunish ${index + 1} ${attempt.answers.length || 0}/${attempt.score || 0}`,
    children: (
      <div>
        {attempt.answers.map((item: any) => (
  <div
    key={item.id}
    className="border p-4 rounded-md shadow-md mb-4 bg-white hover:shadow-lg transition-shadow"
  >
    <p className="font-bold text-lg text-gray-800">{item.question}</p>
    <div className="mt-2">
      <span
        className={cn(
          "inline-block px-3 py-1 rounded-full text-sm font-semibold text-white mr-2",
          item?.is_correct ? "bg-green-500" : "bg-red-500"
        )}
      >
        Your Answer
      </span>
      <span className="text-gray-700">
        {item.selected_answer
          ? item.selected_answer
          : "You did not answer this question :("}
      </span>
    </div>
    <div className="mt-2">
      <span
        className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-white bg-blue-500 mr-2"
      >
        Correct Answer
      </span>
      <span className="text-gray-700">{item.correct_answer}</span>
    </div>
  </div>
))}
      </div>
    ),
  }));

  return (
    <div className="soh">
      <UBreadcrumb items={itemStatisticD} />
      <form className="">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 sm:mt-7">
          <p className="tp font-bold">{exams?.exam}</p>
          {/* @ts-ignore */}
          {items?.length > 0 ? ( 
            <Collapse items={items} className="bg-blue-100 font-bold" />
          ) : (
            <Spin className="flex justify-center items-center text-center"/>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserExam;
