
import UBreadcrumb from "@/components/ui/UBreadcrumb"
import UChart from "@/components/ui/UChart"
import examService from "@/services/exam-service";
import { itemHome } from "@/types/data"
import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { useEffect } from "react";

const Home = () => {

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


const categories = allexams?.results.map((item:any) => item.start_time.split(" ")[0]);
const categories2 = allexams?.results.map((item:any) => item.end_time.split(" ")[0]);
const categories3 = allexams?.results.map((item:any) => item.time_limit.split(" ")[0]);

const series = [
  {
    name: "Savollar soni",
    data: allexams?.results.map((item:any) => item.total_questions),
  },
];
const options = {
  chart: {
    id: "questions-chart",
  },
  xaxis: {
    categories: categories,
    title: {
      text: "Boshlanish vaqti",
    },
  },
  yaxis: {
    title: {
      text: "Savollar soni",
    },
  },
};
const options2 = {
  chart: {
    id: "questions-chart",
  },
  xaxis: {
    categories: categories2,
    title: {
      text: "Yakuniy vaqti",
    },
  },
  yaxis: {
    title: {
      text: "Savollar soni",
    },
  },
};
const options3 = {
  chart: {
    id: "questions-chart",
  },
  xaxis: {
    categories: categories3,
    title: {
      text: "Oraliq vaqti",
    },
  },
  yaxis: {
    title: {
      text: "Savollar soni",
    },
  },
};

  return (
    <div className="soh" >
   <UBreadcrumb items={itemHome}/>
     <h1 className="text-xl font-bold mt-8">Savollar Statistikasi</h1>
     <div className="flex flex-col">
      <UChart
        type="bar"
        options={options}
        series={series}
        height="400"
        width="600"
      />

      <UChart
        type='area'
        options={options2}
        series={series}
        height="400"
        width="600"
      />
      <UChart
        type='line'
        options={options3}
        series={series}
        height="400"
        width="600"
      />
      </div>
      </div>
  )
  
}

export default Home