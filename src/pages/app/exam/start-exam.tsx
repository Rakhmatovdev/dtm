
import UBreadcrumb from "@/components/ui/UBreadcrumb";
import examService from "@/services/exam-service.ts";
import { itemsExam } from "@/types/data";
import { useMutation } from "@tanstack/react-query";
import { message } from 'antd';
import { format } from "date-fns";
import { useEffect } from "react";
import { Link, } from "react-router";



const StartExam = () => {



    const { data:allexams,mutate:gmutate} = useMutation({
            mutationKey: ["submitted"],
            mutationFn: examService.exams,
            onError: () => {
                message.error('Your exams not found');
            },
        });
        useEffect(() => {
                gmutate();
        }, []);
    return (
        <section className="soh p-6 bg-gray-50 ">
            <UBreadcrumb items={itemsExam} />
                <form className="" >
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
                                Questions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {allexams?.results &&
                            allexams?.results.map((exam:any) => (
                                <tr
                                    key={exam.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="tp font-medium text-gray-900  dark:text-white">
                                        <Link to={`${exam.id}/change`} className="cursor-pointer " >{exam.id}</Link>
                                    </th>
                                    <td className="tp"> <Link to={`${exam.id}/change`} onClick={()=>localStorage.setItem('deadline',exam.time_limit)} className="cursor-pointer ">{exam.category_name}</Link></td>
                                    <td className="tp">
                                    <p className={'block'}>{format(exam.start_time, "dd MMMM yyyy")}</p>
                                    <p className={'block'}> {format(exam.start_time, "hh:mm:ss a")}</p>
                                    </td>
                                    <td className="tp">
                                    <li className={'block'}>{format(exam.end_time, "dd MMMM yyyy")}</li>
                                    <li className={'block'}> {format(exam.end_time, "hh:mm:ss a")}</li>
                                    </td>
                                    <td className="tp">{exam.total_questions}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </form>
        </section>
    );
};

export default StartExam;
