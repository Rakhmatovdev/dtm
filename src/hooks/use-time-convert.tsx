import { useCallback } from 'react';

function useTimeConverter() {
  const convertToMilliseconds = useCallback((timeString: string): number => {
    if (!timeString) {
      console.error('Time string is empty');
      return NaN; 
    }

    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    

    const totalMilliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000;
    return totalMilliseconds;
  }, []);

  return { convertToMilliseconds };
}

export default useTimeConverter;
