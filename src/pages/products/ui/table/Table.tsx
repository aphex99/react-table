import type {ProductType} from "@/entities/product/model/types.ts";
import {TABLE_HEADERS} from "@/pages/products/config/tableHeaders.ts";
import type {HandleSortParametersType} from "@/pages/products/model/types.ts";
import ButtonIcon from "@/shared/ui/button-icon/ButtonIcon.tsx";
import SortIcon from "@/shared/assets/icons/sort1.svg?react";
import styles from './Table.module.scss';

export interface TablePropsType {
  products: ProductType[];
  handleSort: (field: HandleSortParametersType) => void;
}

const Table = ({products, handleSort}: TablePropsType) => {
  return (
    <table>
      <thead>
      <tr>
        <th><input type="checkbox"/></th>
        {TABLE_HEADERS.map((header => (
          <th key={header.sortKey}>
            <span>{header.label}</span>
            {header.sortKey === 'rating' || header.sortKey === 'price' ?
              <ButtonIcon className={styles.buttonIcon}
                          onClick={() => handleSort({field: header.sortKey})}><SortIcon
                className={styles.icon}/></ButtonIcon> : null}
          </th>
        )))}
      </tr>
      </thead>
      <tbody>
      {products.map(product => (
        <tr key={product.id}>
          <td><input type="checkbox"/></td>
          <td>{product.title}</td>
          <td>{product.brand}</td>
          <td>{product.sku}</td>
          <td>{product.rating}</td>
          <td>{product.price}</td>
          <td>
            <button>PLUS</button>
          </td>
          <td>
            <button>DOTS</button>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default Table;