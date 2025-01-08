
import UBreadcrumb from "@/components/ui/UBreadcrumb";
import examService from "@/services/exam-service.ts";
import { itemsExam } from "@/types/data";
import { useMutation } from "@tanstack/react-query";
import {  Button, Card,  message,  notification, Radio,  Spin, Typography } from 'antd';
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
const {  Text } = Typography;

interface FormValues {
   id: string;
    answers: { [key: string]: string }; // Keyed by question ID with selected answer ID
}

const StartExam = () => {

    const navigate=useNavigate()

    const [myId, setMyId] = useState('')
    const {  handleSubmit, setValue, watch } = useForm<FormValues>({
        defaultValues: {
            id: "",
            answers: {},
        },
    });

    const { mutate, data: exams, isError, isPending, error } = useMutation({
        mutationKey: ["start"],
        mutationFn: examService.start,
        onSuccess: (data) => {
            notification.success({message: 'Exam started'});
            setMyId(data?.id);
        },
        onError: (error) => {
            notification.error({message: error?.message});
        },
    });



    const { mutate:amutate,} = useMutation({
        mutationKey: ["ansvers"],
        mutationFn: examService.submit,
        onSuccess: (data) => {
            notification.success({message: data?.message});
        },
        onError: (error) => {
            notification.error({message: error?.message});
        },
    });

    const { mutate:smutate} = useMutation({
        mutationKey: ["submitted"],
        mutationFn: examService.complited,
        onSuccess: () => {
            navigate('/start/exam')
            message.success('Exam completed');
            
        },
        onError: () => {
            message.error('Exam not completed');
        },
    });


    const onSubmit: SubmitHandler<FormValues> = (data) => {
        if(myId) {smutate(myId);}  
        mutate(data.id); // Sending exam_id to the API
        // You can send `data.answers` to the server as well if needed
    };

    const handleAnswerSubmit = (questionId: string) => {
        const selectedAnswer = watch(`answers.${questionId}`);
        console.log(`Answer for question ${questionId}:`, selectedAnswer);
        if(myId){
       amutate({test_id:questionId, selected_answer_id:selectedAnswer,id:myId});
        }

    };

    const handleId = (data: any) => {
        mutate(data.id);
    }

      const { data:allexams,mutate:gmutate} = useMutation({
            mutationKey: ["submitted"],
            mutationFn: examService.exams,
            onSuccess: () => {
                // message.success({message: 'Your exams'});
            },
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
            {!exams?.tests && (
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
                                Questions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {allexams?.results &&
                            allexams?.results.map((exam:any) => (
                                <tr
                                    key={exam.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                   
                                    <th
                                        scope="row"
                                        className="tp font-medium text-gray-900  dark:text-white"
                                    >
                                        <div className="cursor-pointer " onClick={()=>handleId(exam)}>{exam.id}</div>
                                    </th>
                                    <td className="tp"> <div className="cursor-pointer "  onClick={()=>handleId(exam)}>{exam.category_name}</div></td>
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
            )}

            {isPending && (
                <div className="mt-6 flex justify-center">
                    <Spin tip="Loading exams..." size="large" />
                </div>
            )}

            {exams?.tests?.map((exam: any) => (
                <Card
                    key={exam.id}
                    className="mt-6 shadow-lg"
                    title={<Text strong>{exam.question}</Text>}
                >
                    <Radio.Group

                        value={watch(`answers.${exam.id}`)} // Controlled value from form
                        onChange={(e) => setValue(`answers.${exam.id}`, e.target.value)} // Update selected answer
                    >
                        {exam.answers.map((answer: any) => (
                            <div key={answer.id} className="flex items-center gap-4 mb-2">
                                <Radio required value={answer.id}>{answer.text}</Radio>
                            </div>
                        ))}
                    </Radio.Group>
                    <Button
                        type="primary"
                        className="mt-4 block"
                        onClick={() => handleAnswerSubmit(exam.id)} // Submit the answer for this question
                    >
                        Submit Answer
                    </Button>
                </Card>
            ))}

            {exams?.tests && (
                <div className="flex justify-end mt-6">
                    <Button type="primary" onClick={handleSubmit(onSubmit)}>
                        Submit Exam
                    </Button>
                </div>
            )}
        </section>
    );
};

export default StartExam;
