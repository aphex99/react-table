import AddProduct from "@/features/add-product-form/ui/AddProduct.tsx";
import Button from "@/shared/ui/button/Button.tsx";
import PlusIcon from '@/shared/assets/icons/plus.svg?react';
import {useState} from "react";
import styles from './TableHeader.module.scss';

const TableHeader = () => {

  const [showAddForm, setShowAddForm] = useState(false);

  const openAddForm = () => {
    setShowAddForm(true);
  };

  return (
    <div className={styles.container}>
      <h3>Все позиции</h3>
      <Button className={styles.button} onClick={openAddForm}>
        <PlusIcon className={styles.plus_icon}/>Добавить
      </Button>
      {showAddForm && <AddProduct onCloseForm={() => setShowAddForm(false)}/>}
    </div>
  );
};

export default TableHeader;