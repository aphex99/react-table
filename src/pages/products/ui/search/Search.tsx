import {useDebounce} from "@/pages/products/ui/search/model/useDebounce.tsx";
import type {SearchPropsType} from "@/pages/products/ui/search/searchTypes.ts";
import {type ChangeEvent, useEffect, useState} from "react";

const Search = ({value, onChangeValue}: SearchPropsType) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(value);
  }, [value]);

  const debouncedQuery = useDebounce(query, 1000);

  useEffect(() => {
    onChangeValue(debouncedQuery);
  }, [debouncedQuery, onChangeValue]);

  return (
    <div>
      <input value={query} onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} type="text"/>
    </div>
  );
};

export default Search;