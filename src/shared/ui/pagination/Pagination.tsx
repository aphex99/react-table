import ButtonIcon from "@/shared/ui/button-icon/ButtonIcon.tsx";
import Button from "@/shared/ui/button/Button.tsx";
import type {PaginationPropsType} from "@/shared/ui/pagination/paginationTypes.ts";
import {usePagination} from "@/shared/ui/pagination/usePagination.ts";
import styles from "./Pagination.module.scss";

const Pagination = ({pagesCount, currentPage, onChange}: PaginationPropsType) => {

  const paginationRange = usePagination({pagesCount, currentPage});
  const showPages = paginationRange.length >= 2;
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= pagesCount;

  const goTo = (page: number) => {
    if (page < 1 || page > pagesCount || page === currentPage) return;
    onChange(page);
  };

  const onPrev = () => goTo(currentPage - 1);
  const onNext = () => goTo(currentPage + 1);

  if (!showPages) return null;

  return (
    <div>
      <nav>
        <ul className={styles.list}>
          <li>
            <ButtonIcon
              disabled={isFirstPage}
              onClick={onPrev}
            >prev</ButtonIcon></li>
          {paginationRange.map((item, i) =>
            typeof item === 'string'
              ? <li key={`dots-${i}`}>
                {item}
              </li>
              : <li key={item}>
                <Button onClick={() => goTo(item)}>{item}</Button>
              </li>)}
          <li>
            <ButtonIcon
              disabled={isLastPage}
              onClick={onNext}
            >next</ButtonIcon></li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;