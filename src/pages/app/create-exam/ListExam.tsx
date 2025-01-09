import UBreadcrumb from "@/components/ui/UBreadcrumb";
import examService from "@/services/exam-service.ts";
import { TDeleted } from "@/types";
import { itemsExam } from "@/types/data";
import { useMutation } from "@tanstack/react-query";
import { format } from "date-fns";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const CreateExam = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  
  useEffect(() => {
    if (role !== "admin") {
      navigate("/"); 
    }
  }, [role, navigate]);

  const { handleSubmit } = useForm({
    defaultValues: {
      is_deleted: "",
      delete_id: null,
    },
  });

  const { mutate, data: exams } = useMutation({
    mutationKey: ["category"],
    mutationFn: examService.exams,
    onSuccess: (data) => {
      // Mutation muvaffaqiyatli bo'lsa
      console.log("Mutation successful:", data);
    },
    onError: (error) => {
      // Mutation xatolik bo'lsa
      console.error("Mutation failed:", error);
    },
  });

  useEffect(() => {
    mutate();
  }, [mutate]);

  console.log(exams);

  const onSubmit: SubmitHandler<TDeleted> = (data) => console.log(data);

  return (
    <div className="soh">
      <UBreadcrumb items={itemsExam} btn={{ title: "Add", link: "add" }} />

      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 sm:mt-7">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="tp">
                  ID
                </th>
                <th scope="col" className="tp">
                  Categories
                </th>
                <th scope="col" className="tp ">
                  Start Time
                </th>
                <th scope="col" className="tp ">
                  End Time
                </th>
                <th scope="col" className="tp ">
                  Time Limit
                </th>
                <th scope="col" className="tp ">
                  Total questions
                </th>
                <th scope="col" className="tp ">
                  Topics
                </th>
              </tr>
            </thead>
            <tbody>
              {exams &&
                exams.results.map((product: any) => (
                  <tr
                    key={product.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="tp font-medium text-gray-900  dark:text-white"
                    >
                      <div>{product.id}</div>
                    </th>
                    <td className="tp">{product.category_name}</td>
                    <td className="tp ">
                      <li className="block">
                        {format(new Date(product.start_time), "dd MMMM yyyy")}
                      </li>
                      <li className="block">
                        {format(new Date(product.start_time), "hh:mm:ss a")}
                      </li>
                    </td>
                    <td className="tp ">
                      <p className="block">
                        {format(new Date(product.end_time), "dd MMMM yyyy")}
                      </p>
                      <p className="block">
                        {format(new Date(product.end_time), "hh:mm:ss a")}
                      </p>
                    </td>
                    <td className="tp">{product.time_limit}</td>
                    <td className="tp">{product.total_questions}</td>
                    <td className="tp ">
                      <p className="border py-2 pl-4 rounded">
                        {product.topics.map((el: any) => (
                          <span key={el} className="block">
                            {el}
                          </span>
                        ))}
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default CreateExam;
