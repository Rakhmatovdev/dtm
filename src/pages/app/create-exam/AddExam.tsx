import UBreadcrumb from "@/components/ui/UBreadcrumb";
import UInput from "@/components/ui/UInput.tsx";
import myServices from "@/services";
import examService from "@/services/exam-service";
import { TExamA } from "@/types";
import { itemCreateD, } from "@/types/data";
import { useMutation } from "@tanstack/react-query";
import { DatePicker, message, Select, TimePicker } from "antd";
import { Option } from "antd/es/mentions";
import { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router";


const AddExam = () => {
    const [startDate, setStartDate] = useState<string >('');
    const [startTime, setStartTime] = useState<string >('');
    const [endDate, setEndDate] = useState<string >('');
    const [endTime, setEndTime] = useState<string >('');
    const [limitTime, setLimitTime] = useState<string >('');
    const [topicss, setTopics] = useState<string[]>([]);
    const [category, setCategory] = useState<string>('');
    
    const navigate=useNavigate()
    
    const handleChange = (value: string[]) => {
        setTopics(value);
    };

      const handleSelect = (value: string) => {
        setCategory(value)
      };

    const {
        control,
        handleSubmit
    } = useForm({
        defaultValues: {
            category: null,
            topics:[],
            start_time:"",
            end_time: "",
            total_questions: null,
            time_limit:"",
        }
    })

    const {mutate,data:catData}=useMutation({
        mutationKey:['category'],
        mutationFn: myServices.categorys,
        onSuccess: (data) => {
       
            console.log('Mutation successful:', data);
        },
        onError: (error) => {
            // @ts-ignore
            message.error('Mutation failed:', error.message);
        },
    })
    const {mutate:mutateCreate}=useMutation({
        mutationKey:['create'],
        mutationFn: examService.create,
        onSuccess: () => {
 navigate('/app/exam')
 message.success("Exam created successfully ");
        },
        onError: (error) => {
            
            console.error('Mutation failed:', error);
        },
    })

    const {mutate:mutatep,data:topics}=useMutation({
        mutationKey:['topics'],
        mutationFn: myServices.topics,
        onSuccess: (data) => {
            console.log('Mutation successful:', data);
        },
        onError: (error) => {
            
            console.error('Mutation failed:', error);
        },
    })



    useEffect(() => {
       mutate()
       mutatep()
    }, []);

    const onSubmit: SubmitHandler<TExamA> = (data) =>{
        if(category===''){
            message.error("Please select category")
            return
        }
        if(topicss.length===0){
            message.error("Please select topics")
            return
        }
            const newaData={...data,start_time:`${startDate} ${startTime}`,end_time:`${endDate} ${endTime}`,time_limit:`${limitTime}`,topics:topicss,category};
        mutateCreate(newaData)
        
    }


    const { fields,remove } = useFieldArray({
        control,
// @ts-ignore
        name: "topics",
    });
    return (
        <div className="soh">
            <UBreadcrumb items={itemCreateD}/>

            <div className="mt-7">
                <form className="flex gap-4 flex-col sm:flex-row" onSubmit={handleSubmit(onSubmit)}>
                    <div className="border p-4 w-full rounded space-y-2">
                        <div className="flex sm:flex-row flex-col sm:items-center justify-start sm:gap-28">
                            <span className="utext  ">Category <span className="text-rose-500">*</span></span>
                            
                            <Select style={{ width: 200 }} onChange={handleSelect} placeholder="Category">
      {catData && catData.results.map((category:any)=><Option key={category.id} value={category.id}>{category.name}</Option>)}
    </Select>

                        </div>
                        <div className="flex sm:flex-row flex-col sm:items-center justify-start sm:gap-28">
                            <span className="utext pr-[23px] ">Topics <span className="text-rose-500">*</span></span>

                            <div className="flex sm:flex-row flex-col sm:gap-10 gap-2">
                                <div className="w-48 ">
                                
                                    <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="Topics"
      value={topicss}
      
      onChange={handleChange}
    >
      {topics?.results.map((topic:any)=><Option  key={topic.id} value={topic.id}>{topic.name}</Option>)}
    </Select>

                                    <div className="space-y-2">
                                        {fields.map((field, index) => (
                                            <div key={field.id} className="flex gap-2 items-center">
                                                <UInput
                                                    required
                                                    className="sm:h-9 mt-1 sm:w-[200px]"
                                                    control={control}
                                                    name={`topics.${index}`}
                                                />
                                                <button
                                                    type="button"
                                                    className="btn-remove"
                                                    onClick={() => remove(index)} // Inputni o‘chirish
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={'flex items-center gap-24'}>
                            <p className={'utext pr-[6px]'}>Start time: <span className="text-rose-500">*</span></p>
                            <div className={'flex gap-2'}>
                                <div className="flex items-center ">
                                    {/*@ts-ignore*/}
                                    <DatePicker required onChange={(date, dateString) => setStartDate(dateString)}
                                                className={'sm:h-9 mt-1 sm:w-[200px]'}/>

                                </div>
                                <div className="flex items-center">
                                    {/*@ts-ignore*/}
                                    <TimePicker required onChange={(date, dateString) => setStartTime(dateString)}
                                                className="sm:h-9 mt-1 sm:w-[200px]"/>
                                </div>
                            </div>
                        </div>
                        <div className={'flex items-center gap-24'}>
                            <p className={'utext pr-[16px]'}>End time: <span className="text-rose-500">*</span></p>
                            <div className={'flex gap-2'}>
                                <div className="flex items-center ">
                                    {/*@ts-ignore*/}
                                    <DatePicker required onChange={(date, dateString)=>setEndDate(dateString)} className={'sm:h-9 mt-1 sm:w-[200px]'}/>

                                </div>
                                <div className="flex items-center">
                                    {/*@ts-ignore*/}
                                    <TimePicker required onChange={(date, dateString)=>setEndTime(dateString)} className="sm:h-9 mt-1 sm:w-[200px]"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col sm:items-center justify-start sm:gap-10">
                            <span className="utext pr-[23px] ">Total questions <span className="text-rose-500">*</span></span>
                            <div className="flex sm:flex-row flex-col sm:gap-10 gap-2">
                                <div className="w-48 ">

                                    <UInput required type={'number'} className="sm:h-9 mt-1 sm:w-[200px]" control={control}
                                            name="total_questions"/>
                                </div>
                            </div>

                        </div>
                        <div className="flex sm:flex-row flex-col sm:items-center justify-start sm:gap-24">
                            <span className="utext pr-[11px] ">Time limit <span
                                className="text-rose-500">*</span></span>
                            <div className="flex sm:flex-row flex-col sm:gap-10 gap-2">
                                <div className="w-48 ">
                                    {/*@ts-ignore*/}
                                    <TimePicker required onChange={(date, dateString)=>setLimitTime(dateString)}  className="sm:h-9 mt-1 sm:w-[200px]"/>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="space-y-4  flex flex-col  ">
                        <button className="btn-save">Save</button>

                    </div>

                </form>

            </div>


        </div>
    )
}

export default AddExam