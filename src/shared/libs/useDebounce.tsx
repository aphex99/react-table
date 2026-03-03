import {useEffect, useState} from "react";

interface UseDebounceParametersType {
  value: string;
  delay: number;
}

export const useDebounce = ({value, delay}: UseDebounceParametersType) => {

  const [debounceValue, setDebounceValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
};