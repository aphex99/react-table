import type {ProductType} from "@/entities/product/model/types.ts";
import {TABLE_HEADERS} from "@/pages/products/config/tableHeaders.ts";
import type {HandleSortParametersType, SortStateType} from "@/pages/products/model/types.ts";
import ButtonIcon from "@/shared/ui/button-icon/ButtonIcon.tsx";
import SortIconEmpty from "@/shared/assets/icons/sort1.svg?react";
import SortIconAcs from "@/shared/assets/icons/sort3.svg?react";
import SortIconDesc from "@/shared/assets/icons/sort2.svg?react";
import PlusPropertyIcon from "@/shared/assets/icons/plus-property.svg?react";
import DotsIcon from "@/shared/assets/icons/dots.svg?react";
import styles from './Table.module.scss';

export interface TablePropsType {
  products: ProductType[];
  handleSort: (field: HandleSortParametersType) => void;
  sortState: SortStateType;
}

const Table = ({products, handleSort, sortState}: TablePropsType) => {

  return (
    <table className={styles.table}>

      <thead>
      <tr className={styles.row}>
        <th className={styles.th_checkbox}><input type="checkbox" className={styles.checkbox}/></th>
        {TABLE_HEADERS.map((header => {
            const isActive = sortState.field === header.sortKey;
            const SortIcon =
              isActive ?
                sortState.order === 'asc' ? SortIconAcs : SortIconDesc
                : SortIconEmpty;
            return (
              <th key={header.sortKey} className={styles.th}>
                <span>{header.label}</span>
                {(header.sortKey === 'rating' || header.sortKey === 'price') &&
                  (<ButtonIcon className={styles.buttonSortIcon}
                               onClick={() => handleSort({field: header.sortKey})}>
                    <SortIcon className={styles.icon}/>
                  </ButtonIcon>)}
              </th>
            );
          }

        ))}
      </tr>
      </thead>
      <tbody>
      {products.map(product => (
        <tr key={product.id} className={styles.row}>

          <th className={styles.th_checkbox}><input type="checkbox" className={styles.checkbox}/></th>

          <td className={styles.td}>
            <div className={styles.product_title_wrapper}>
              <div className={styles.image_square}></div>
              <div className={styles.product_title_container}>
                <p>{product.title}</p>
                <p>{product.category}</p>
              </div>
            </div>
          </td>

          <td className={styles.td}>{product.brand}</td>
          <td className={styles.td}>{product.sku}</td>
          <td className={styles.td}>{product.rating}</td>
          <td className={styles.td}>{product.price}</td>
          <td>
            <div className={styles.product_buttons}>
              <ButtonIcon className={styles.add_property_button}>
                <PlusPropertyIcon className={styles.plus_property_icon}/>
              </ButtonIcon>
              <ButtonIcon className={styles.settings_button}>
                <DotsIcon className={styles.dots_icon}/>
              </ButtonIcon>
            </div>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default Table;