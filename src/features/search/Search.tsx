import {useDebounce} from "@/shared/libs/useDebounce.tsx";
import clsx from "clsx";
import {type ChangeEvent, useEffect} from "react";
import SearchIcon from '@/shared/assets/icons/search.svg?react';
import styles from "./Search.module.scss";

export interface SearchPropsType {
  value: string;
  onChangeValue: (value: string) => void;
  wrapperClassName?: string;
}

const Search = ({value, onChangeValue, wrapperClassName}: SearchPropsType) => {

  const debouncedQuery = useDebounce({value, delay: 1000});

  useEffect(() => {
    onChangeValue(debouncedQuery);
  }, [debouncedQuery, onChangeValue]);

  return (
    <div className={clsx(styles.wrapper, wrapperClassName)}>
      <SearchIcon className={styles.search_icon}/>
      <input
        className={styles.input}
        placeholder={'Найти'}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeValue(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default Search;