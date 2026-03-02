export interface UsePaginationParamsType {
  pagesCount: number;
  currentPage: number;
}

export const DOTS = '…';

const range = (start: number, end: number) => {
  const length = Math.max(0, end - start + 1);
  return Array.from({length}, (_, i) => i + start);
};

export const usePagination = ({pagesCount, currentPage}: UsePaginationParamsType) => {

  const siblings = 1;
  const totalPageNumbers = 2 * siblings + 5;

  if (totalPageNumbers >= pagesCount) {
    return range(1, pagesCount);
  }

  const leftSibling = Math.max(currentPage - siblings, 1);
  const rightSibling = Math.min(currentPage + siblings, pagesCount);

  const showLeftDots = leftSibling > 3;
  const showRightDots = rightSibling < pagesCount - 2;

  const firstPage = 1;
  const lastPage = pagesCount;
  const sideItemsCount = 2 * siblings + 3;

  if (!showLeftDots && showRightDots) {
    const leftRange = range(1, sideItemsCount);
    return [...leftRange, DOTS, lastPage];
  }

  if (!showRightDots && showLeftDots) {
    const rightRange = range(pagesCount - sideItemsCount + 1, pagesCount);
    return [firstPage, DOTS, ...rightRange];
  }

  const middleRange = range(leftSibling, rightSibling);
  return [firstPage, DOTS, ...middleRange, DOTS, lastPage];
};