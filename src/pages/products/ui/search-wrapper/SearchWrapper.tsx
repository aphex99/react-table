import Search from "@/features/search/Search.tsx";
import styles from './SearchWrapper.module.scss';

interface SearchWrapperPropsType {
  searchQuery: string;
  onChangeSearchQuery: (searchQuery: string) => void;
}

const SearchWrapper = ({searchQuery, onChangeSearchQuery}: SearchWrapperPropsType) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Товары</h3>
      <Search value={searchQuery} onChangeValue={onChangeSearchQuery} wrapperClassName={styles.search_input}/>
    </div>
  );
};

export default SearchWrapper;