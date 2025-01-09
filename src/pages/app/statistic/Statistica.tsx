import UBreadcrumb from "@/components/ui/UBreadcrumb";
import UCheckbox from "@/components/ui/UCheckbox";
import userService from "@/services/user-service";
import { TDeleted } from "@/types";
import {  itemStatistic } from "@/types/data";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";
import { format } from 'date-fns';
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router";


const Statistic = () => {


    const { data:exams,mutate} = useMutation({
        mutationKey: ["submitted"],
        mutationFn: userService.exams,
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
        mutate();
}, []);

    return (
        <div className="soh">
            <UBreadcrumb items={itemStatistic} />

            <form className="" onSubmit={handleSubmit(onSubmit)} >
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 sm:mt-7">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                           
                            <th scope="col" className="tp">
                                ID
                            </th>
                            <th scope="col" className="tp">
                                Category
                            </th>
                            <th scope="col" className="tp ">
                                Start time
                            </th>

                            <th scope="col" className="tp ">
                                End time
                            </th>
                            <th scope="col" className="tp ">
                                Status
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {exams?.results &&
                            exams?.results.map((exam:any) => (
                                <tr
                                    key={exam.exam_id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                
                                    <th
                                        scope="row"
                                        className="tp font-medium text-gray-900  dark:text-white"
                                    >
                                        <Link  to={`${exam.exam_id}`}>{exam.exam_id}</Link>
                                    </th>
                                    <td className="tp"> <Link  to={`${exam.exam_id}`}>{exam.exam_category}</Link></td>
                                    <td className="tp">
                                    <p className={'block'}>{format(exam.exam_start_time, "dd MMMM yyyy")}</p>
                                    <p className={'block'}> {format(exam.exam_start_time, "hh:mm:ss a")}</p>

                                    </td>
                                    <td className="tp">
                                    <li className={'block'}>{format(exam.exam_end_time, "dd MMMM yyyy")}</li>
                                    <li className={'block'}> {format(exam.exam_end_time, "hh:mm:ss a")}</li>

                                    </td>
                                    
                            
                                    <td className="tp">{exam.status}</td>
                                 

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    );
};

export default Statistic;
