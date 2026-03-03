import type {HandleSortParametersType, SortStateType} from "@/pages/products/model/types.ts";
import {useState} from "react";

export const useTableSort = () => {

  const [sort, setSort] = useState<SortStateType>({field: null, order: null});

  const handleSort = ({field}: HandleSortParametersType) => {
    setSort(prev => {
      if (prev.field !== field) {
        return {field, order: 'asc'};
      }
      if (prev.order === 'asc') return {field, order: 'desc'};
      return {field: null, order: null};
    });
  };

  return {sort, handleSort};

};