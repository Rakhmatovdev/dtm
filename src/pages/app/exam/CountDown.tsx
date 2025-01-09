import examService from '@/services/exam-service';
import { useMutation } from '@tanstack/react-query';
import { Statistic, message } from 'antd';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router';

const { Countdown } = Statistic;

const CountdownTimer = () => {

  const [deadline, setDeadline] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  const { mutate: smutate } = useMutation({
    mutationKey: ["submitted"],
    mutationFn: examService.complited,
    onSuccess: () => {
      navigate('/start/exam');
      message.success('Exam completed');
      localStorage.removeItem('examId');
      localStorage.removeItem('answers');
      localStorage.removeItem('currentPage');
    },
    onError: () => {
      message.error('Exam not completed');
    },
  });

  useEffect(() => {
    const savedTime = localStorage.getItem('deadline');
    const loctime = savedTime?.split(':').map(Number);
console.log(deadline);

    if (loctime) {
        const [hours, minutes, seconds] = loctime as [number, number, number];
        const timeInMs = (hours * 3600 + minutes * 60 + seconds) * 1000 + Date.now();
       
      if (timeInMs && timeInMs > Date.now()) {
        setDeadline(timeInMs);
        localStorage.setItem('deadline', timeInMs.toString()); 
      } else if(loctime[0] && loctime[0] > Date.now()) {
        setDeadline(loctime[0]); 
        
      }
      else{
        localStorage.removeItem('deadline');
      }
    }
    
    

    const startTimer = () => {
      intervalRef.current = setInterval(() => {
        const remainingTime = deadline - Date.now();
        if (remainingTime <= 0) {
          clearInterval(intervalRef.current as NodeJS.Timeout);
          message.success('Your time is up!');
          localStorage.removeItem('deadline');
          const examId = localStorage.getItem('examId');
          if (examId) {
            smutate(examId);
          }
          navigate('/start/exam');
        } else {
          localStorage.setItem('deadline', deadline.toString()); 
        }
      }, 1000);
    };

    if (deadline > 0) {
      startTimer();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [deadline, smutate, navigate, setDeadline]);

  return (
    <Countdown
      value={deadline}
      format="mm:ss"
      onFinish={() => {
        message.success('Countdown finished!');
        localStorage.removeItem('deadline');
      }}
    />
  );
};

export default CountdownTimer;
