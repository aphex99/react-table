import {TABLE_HEADERS} from "@/pages/products/config/tableHeaders.ts";
import type {TablePropsType} from "@/pages/products/ui/table/tableTypes.ts";
import ButtonIcon from "@/shared/ui/button-icon/ButtonIcon.tsx";
import SortIcon from "@/shared/assets/icons/sort1.svg?react";
import styles from './Table.module.scss';

const Table = ({products, handleSort}: TablePropsType) => {
  return (
    <table>
      <thead>
      <tr>
        <th><input type="checkbox"/></th>
        {TABLE_HEADERS.map((header => (
          <th key={header}>
            <span>{header}</span>
            {header === 'Оценка' || header === 'Цена, ₽' ?
              <ButtonIcon className={styles.buttonIcon}
                          onClick={() => handleSort({field: header})}><SortIcon
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