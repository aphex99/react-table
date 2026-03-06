import {useState} from "react";

import type {HandleSortParametersType, SortStateType} from "../../../model/types.ts";

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