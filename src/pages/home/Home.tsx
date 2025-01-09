import UBreadcrumb from "@/components/ui/UBreadcrumb";
import UChart from "@/components/ui/UChart";
import examService from "@/services/exam-service";
import { itemHome } from "@/types/data";
import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { useEffect } from "react";

const Home = () => {
  const { data: allexams, mutate: gmutate } = useMutation({
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

  const categories = allexams?.results.map((item: any) => item.start_time.split(" ")[0]);
  const categories2 = allexams?.results.map((item: any) => item.end_time.split(" ")[0]);
  const categories3 = allexams?.results.map((item: any) => item.time_limit.split(" ")[0]);

  const series = [
    {
      name: "Savollar soni",
      data: allexams?.results.map((item: any) => item.total_questions),
    },
  ];

  const options = {
    chart: {
      id: "questions-chart",
      toolbar: {
        show: true,
      },
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
    responsive: [
      {
        breakpoint: 1920, // For very large screens
        options: {
          chart: {
            height: 500,
            width: "100%",
          },
        },
      },
      {
        breakpoint: 1280, // For xl screens
        options: {
          chart: {
            height: 450,
            width: "100%",
          },
        },
      },
      {
        breakpoint: 1024, // For tablet screens
        options: {
          chart: {
            height: 400,
            width: "100%",
          },
        },
      },
      {
        breakpoint: 768, // For mobile screens
        options: {
          chart: {
            height: 300,
            width: "100%",
          },
          xaxis: {
            labels: {
              rotate: -45,
              style: {
                fontSize: "10px",
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                fontSize: "10px",
              },
            },
          },
        },
      },
    ],
  };

  const options2 = {
    ...options,
    xaxis: {
      categories: categories2,
      title: {
        text: "Yakuniy vaqti",
      },
    },
  };

  const options3 = {
    ...options,
    xaxis: {
      categories: categories3,
      title: {
        text: "Oraliq vaqti",
      },
    },
  };

  return (
    <div className="soh">
      <UBreadcrumb items={itemHome} />
      <h1 className="text-xl font-bold mt-8">Savollar Statistikasi</h1>
      <div className="flex flex-col xl:flex-row xl:justify-between gap-6">
        <div className="w-full xl:w-1/3">
          <UChart
            type="bar"
            options={options}
            series={series}
            height="100%"
            width="100%"
          />
        </div>
        <div className="w-full xl:w-1/3">
          <UChart
            type="area"
            options={options2}
            series={series}
            height="100%"
            width="100%"
          />
        </div>
        <div className="w-full xl:w-1/3">
          <UChart
            type="line"
            options={options3}
            series={series}
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
