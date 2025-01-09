import UBreadcrumb from "@/components/ui/UBreadcrumb";
import { cn } from "@/lib/utils";
import examService from "@/services/exam-service.ts";
import { usePaginationStore } from "@/store/usePagination";
import { itemsExam } from "@/types/data";
import { useMutation } from "@tanstack/react-query";
import { Button, Card, message, notification, Radio, Spin, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import CountdownTimer from "./CountDown";
const { Text } = Typography;

interface FormValues {
  id: string;
  answers: { [key: string]: string };
}

const QuestionList = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [myId, setMyId] = useState<string>(localStorage.getItem('examId') || '');
  const { setValue, watch } = useForm<FormValues>({
    defaultValues: {
      id: "",
      answers: JSON.parse(localStorage.getItem('answers') || '{}'),
    },
  });

  const { mutate, data: exams, isPending, error } = useMutation({
    mutationKey: ["start"],
    mutationFn: examService.start,
    onSuccess: (data) => {
      setMyId(data?.id);
      localStorage.setItem('examId', data?.id);
    },
    onError: (error) => {
      navigate('/start/exam');
      notification.error({ message: error?.message });
    },
  });

  const { mutate: amutate } = useMutation({
    mutationKey: ["answers"],
    mutationFn: examService.submit,
    onSuccess: (data) => {
      notification.success({ message: data?.message });
    },
    onError: (error) => {
      navigate('/start/exam');
      notification.error({ message: error?.message });
    },
  });

  const { mutate: smutate } = useMutation({
    mutationKey: ["submitted"],
    mutationFn: examService.complited,
    onSuccess: () => {
      navigate('/start/exam');
      message.success('Exam completed');
      localStorage.removeItem('examId');
      localStorage.removeItem('answers');
      localStorage.removeItem('currentPage');
      localStorage.removeItem('deadline');
    },
    onError: () => {
      message.error('Exam not completed');
    },
  });

  const { currentPage, examsPerPage, setCurrentPage } = usePaginationStore();
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const savedPage = Number(localStorage.getItem('currentPage')) || 1;
    setCurrentPage(savedPage);
  }, [setCurrentPage]);

  useEffect(() => {
    mutate(examId);
  }, [mutate, examId]);

  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem('answers', JSON.stringify(value.answers));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage.toString());
  }, [currentPage]);

  const handleAnswerSubmit = (questionId: string) => {
    const selectedAnswer = watch(`answers.${questionId}`);
    if (myId) {
      amutate({ test_id: questionId, selected_answer_id: selectedAnswer, id: myId });
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleComplate = () => {
    if (myId) { smutate(myId); }
  };

  const paginatedExams = exams?.tests.slice(
    (currentPage - 1) * examsPerPage,
    currentPage * examsPerPage
  );

  if (isPending) {
    return <div className="mt-6 flex justify-center"><Spin tip="PeisPending exams..." size="large" /></div>;
  }

  if (error) {
    return <div className="mt-6 flex justify-center"><Spin tip="Error PeisPending exams..." size="large" /></div>;
  }

  return (
    <section className="soh p-6 bg-gray-50">
      <UBreadcrumb items={itemsExam} />
      {exams?.tests && (
        <>
          <div className="flex justify-end">
            <CountdownTimer />
          </div>
          <div className="flex gap-2 my-8">
            {exams.tests.map((_:any, index: number) => (
              <button
                key={index}
                className={cn(
                  "rounded-full border-none px-2 py-1",
                  currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                )}
                onClick={() => handlePageChange(index + 1)}
              >
                Question {index + 1}
              </button>
            ))}
          </div>
        </>
      )}

      {paginatedExams?.map((exam: any, index: number) => (
        <Card
          key={exam.id}
          className="mt-6 shadow-lg"
          title={<Text strong>{exam.question}</Text>}
          ref={(el) => (questionRefs.current[(currentPage - 1) * examsPerPage + index] = el)}
        >
          <Radio.Group
            value={watch(`answers.${exam.id}`)}
            onChange={(e) => {
              setValue(`answers.${exam.id}`, e.target.value);
              handleAnswerSubmit(exam.id);
            }}
          >
            {exam.answers.map((answer: any) => (
              <div key={answer.id} className="flex items-center gap-4 mb-2">
                <Radio required value={answer.id}>{answer.text}</Radio>
              </div>
            ))}
          </Radio.Group>
        </Card>
      ))}

      {exams?.tests && (
        <div className="flex justify-end mt-6">
          <Button type="primary" onClick={handleComplate}>
            Submit Exam
          </Button>
        </div>
      )}
    </section>
  );
};

export default QuestionList;
