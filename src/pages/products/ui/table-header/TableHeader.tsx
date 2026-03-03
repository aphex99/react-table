import AddProduct from "@/features/add-product-form/ui/AddProduct.tsx";
import ButtonIcon from "@/shared/ui/button-icon/ButtonIcon.tsx";
import Button from "@/shared/ui/button/Button.tsx";
import PlusIcon from '@/shared/assets/icons/plus.svg?react';
import ArrowsIcon from '@/shared/assets/icons/arrows.svg?react';
import {useState} from "react";
import styles from './TableHeader.module.scss';

const TableHeader = () => {

  const [showAddForm, setShowAddForm] = useState(false);

  const openAddForm = () => {
    setShowAddForm(true);
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Все позиции</h3>
      <div className={styles.buttons_container}>
        <Button className={styles.button_arrows} onClick={openAddForm}>
          <ArrowsIcon className={styles.arrows_icon}/>
        </Button>
        <ButtonIcon className={styles.button} onClick={openAddForm}>
          <PlusIcon className={styles.plus_icon}/>Добавить
        </ButtonIcon>
      </div>
      {showAddForm && <AddProduct onCloseForm={() => setShowAddForm(false)}/>}
    </div>
  );
};

export default TableHeader;