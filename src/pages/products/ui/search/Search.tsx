import {useDebounce} from "@/pages/products/ui/search/model/useDebounce.tsx";
import type {SearchPropsType} from "@/pages/products/ui/search/searchTypes.ts";
import {type ChangeEvent, useEffect} from "react";

const Search = ({value, onChangeValue}: SearchPropsType) => {

  const debouncedQuery = useDebounce(value, 1000);

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