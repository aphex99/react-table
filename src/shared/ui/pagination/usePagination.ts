import {DOTS} from "@/shared/ui/pagination/consts.ts";
import type {UsePaginationParamsType} from "@/shared/ui/pagination/paginationTypes.ts";

const range = (start: number, end: number) => {
  const length = Math.max(0, end - start + 1);
  return Array.from({length}, (_, i) => i + start);
};

export const usePagination = ({pageCount, currentPage}: UsePaginationParamsType) => {

  const siblings = 1;
  const totalPageNumbers = 2 * siblings + 5;

  if (totalPageNumbers >= pageCount) {
    return range(1, pageCount);
  }

  const leftSibling = Math.max(currentPage - siblings, 1);
  const rightSibling = Math.min(currentPage + siblings, pageCount);

  const showLeftDots = leftSibling > 3;
  const showRightDots = rightSibling < pageCount - 2;

  const firstPage = 1;
  const lastPage = pageCount;
  const sideItemsCount = 2 * siblings + 3;

  if (!showLeftDots && showRightDots) {
    const leftRange = range(1, sideItemsCount);
    return [...leftRange, DOTS, lastPage];
  }

  if (!showRightDots && showLeftDots) {
    const rightRange = range(pageCount - sideItemsCount + 1, pageCount);
    return [firstPage, DOTS, ...rightRange];
  }

  const middleRange = range(leftSibling, rightSibling);
  return [firstPage, DOTS, ...middleRange, DOTS, lastPage];
};