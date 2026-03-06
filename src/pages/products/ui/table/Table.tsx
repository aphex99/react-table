import clsx from "clsx";

import type {ProductType} from "@/entities/product/model/types.ts";
import ButtonIcon from "@/shared/ui/button-icon/ButtonIcon.tsx";
import SortIconEmpty from "@/shared/assets/icons/sort1.svg?react";
import SortIconAcs from "@/shared/assets/icons/sort3.svg?react";
import SortIconDesc from "@/shared/assets/icons/sort2.svg?react";
import PlusPropertyIcon from "@/shared/assets/icons/plus-property.svg?react";
import DotsIcon from "@/shared/assets/icons/dots.svg?react";

import type {HandleSortParametersType, SortStateType} from "../../model/types.ts";
import {TABLE_HEADERS} from "../../config/tableHeaders.ts";

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
        <th className={styles.checkbox_wrapper}>
          <input type="checkbox" className={styles.checkbox}/>
        </th>
        {TABLE_HEADERS.map((header => {
            const isActive = sortState.field === header.sortKey;
            const SortIcon =
              isActive ?
                sortState.order === 'asc' ? SortIconAcs : SortIconDesc
                : SortIconEmpty;
            return (
              <th key={header.sortKey} className={styles.th}>
                <div className={styles.th_container}>
                  <span>{header.label}</span>
                  <ButtonIcon className={styles.buttonSortIcon}
                              type={'button'}
                              onClick={() => handleSort({field: header.sortKey})}>
                    <SortIcon className={styles.icon}/>
                  </ButtonIcon>
                </div>
              </th>
            );
          }

        ))}
      </tr>
      </thead>
      <tbody>
      {products.map(product => {
        const [integer = '0', decimal = '00'] = String(product.price).split('.');

        return (
          <tr key={product.id} className={styles.row}>

            <td className={styles.checkbox_wrapper}>
              <input type="checkbox" className={styles.checkbox}/>
            </td>

            <td className={styles.td}>
              <div className={styles.product_title_wrapper}>
                <div className={styles.image_square}></div>
                <div className={styles.product_title_container}>
                  <span className={styles.product_title}>{product.title}</span>
                  <span className={styles.product_category}>{product.category}</span>
                </div>
              </div>
            </td>

            <td className={styles.td}>
              <span className={styles.product_brand}>{product.brand}</span>
            </td>
            <td className={styles.td}>
              <span className={styles.product_sku}>{product.sku}</span>
            </td>

            <td className={styles.td}>
              <span
                className={clsx(styles.product_rating, product.rating >= 3 && styles.rating_highlight)}>{product.rating.toFixed(1)}</span>/5
            </td>

            <td className={styles.td}>
              <span className={styles.product_price}>
                {integer}<span className={styles.product_price_decimal}>,{decimal}</span>
              </span>
            </td>
            <td>
              <div className={styles.product_buttons}>
                <ButtonIcon className={styles.add_property_button} type={'button'}>
                  <PlusPropertyIcon className={styles.plus_property_icon}/>
                </ButtonIcon>
                <ButtonIcon className={styles.settings_button} type={'button'}>
                  <DotsIcon className={styles.dots_icon}/>
                </ButtonIcon>
              </div>
            </td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};

export default Table;