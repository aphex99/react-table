import clsx from "clsx";

import ButtonIcon from "../button-icon/ButtonIcon.tsx";
import Button from "../button/Button.tsx";
import {getPaginationRange} from "./model/getPaginationRange.ts";

import ArrowLeft from '../../assets/icons/arrow-left.svg?react';
import ArrowRight from '../../assets/icons/arrow-right.svg?react';

import styles from "./Pagination.module.scss";

export interface PaginationPropsType {
  currentPage: number;
  totalCount: number;
  itemsPerPage: number;
  onChange: (page: number) => void;
}

const Pagination = ({totalCount, itemsPerPage, currentPage, onChange}: PaginationPropsType) => {

  const pagesCount = Math.ceil(totalCount / itemsPerPage);

  const paginationRange = getPaginationRange({pagesCount, currentPage});
  const showPages = paginationRange.length >= 2;
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= pagesCount;
  const currentItems = Math.min(itemsPerPage * currentPage, totalCount);

  const goTo = (page: number) => {
    if (page < 1 || page > pagesCount || page === currentPage) return;
    onChange(page);
  };

  const onPrev = () => goTo(currentPage - 1);
  const onNext = () => goTo(currentPage + 1);

  if (!showPages) return null;

  return (
    <div className={styles.wrapper}>
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
      <div className={styles.description}>
        Показано
        <span className={styles.description_number}> {currentItems}</span> из
        <span className={styles.description_number}> {totalCount}</span>
      </div>
    </div>
  );
};

export default Pagination;