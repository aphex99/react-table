import type {TablePropsType} from "@/pages/products/productsTypes.ts";

const Table = (products: TablePropsType) => {
  console.log(products);
  return (
    <table>
      <thead>
      <tr>
        <th><input type="checkbox"/></th>
        <th>Наименование</th>
        <th>Вендор</th>
        <th>Артикул</th>
        <th>Оценка</th>
        <th>Цена</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><input type="checkbox"/></td>
        <td>Утюг</td>
        <td>TextStyle</td>
        <td>TldkjJJ</td>
        <td>4.9/5</td>
        <td>56 000,58</td>
        <td>
          <button>PLUS</button>
        </td>
        <td>
          <button>DOTS</button>
        </td>
      </tr>
      </tbody>
    </table>
  );
};

export default Table;