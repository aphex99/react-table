import {useDebounce} from "@/shared/libs/useDebounce.tsx";
import {type ChangeEvent, useEffect} from "react";

export interface SearchPropsType {
  value: string;
  onChangeValue: (value: string) => void;
}

const Search = ({value, onChangeValue}: SearchPropsType) => {

  const debouncedQuery = useDebounce({value, delay: 1000});

  useEffect(() => {
    onChangeValue(debouncedQuery);
  }, [debouncedQuery, onChangeValue]);

  return (
    <div>
      <input value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeValue(e.target.value)} type="text"/>
    </div>
  );
};

export default Search;