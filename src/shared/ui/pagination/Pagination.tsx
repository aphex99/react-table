import ButtonIcon from "@/shared/ui/button-icon/ButtonIcon.tsx";
import Button from "@/shared/ui/button/Button.tsx";
import {usePagination} from "@/shared/ui/pagination/model/usePagination.ts";
import ArrowLeft from '@/shared/assets/icons/arrow-left.svg?react';
import ArrowRight from '@/shared/assets/icons/arrow-right.svg?react';
import clsx from "clsx";
import styles from "./Pagination.module.scss";

export interface PaginationPropsType {
  pagesCount: number;
  currentPage: number;
  onChange: (page: number) => void;
}

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
              className={styles.arrow_button}
            >
              <ArrowLeft/>
            </ButtonIcon></li>
          {paginationRange.map((item, i) =>
            typeof item === 'string'
              ? <li key={`dots-${i}`}>
                {item}
              </li>
              : <li key={item}>
                <Button className={clsx(styles.number_button, currentPage === item && styles.active_number_button)}
                        onClick={() => goTo(item)}>{item}</Button>
              </li>)}
          <li>
            <ButtonIcon
              disabled={isLastPage}
              onClick={onNext}
              className={styles.arrow_button}
            >
              <ArrowRight/>
            </ButtonIcon></li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;