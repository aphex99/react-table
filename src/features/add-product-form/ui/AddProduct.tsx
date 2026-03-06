import ButtonIcon from "@/shared/ui/button-icon/ButtonIcon.tsx";
import CloseIcon from '@/shared/assets/icons/close.svg?react';
import Card from "@/shared/ui/card/Card.tsx";

import AddProductForm from "./add-product-form/AddProductForm.tsx";

import styles from './AddProduct.module.scss';

export interface AddProductPropsType {
  onCloseForm: () => void;
}

const AddProduct = ({onCloseForm}: AddProductPropsType) => {

  const onCloseButton = () => {
    onCloseForm();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ButtonIcon className={styles.close_button} type={'button'} onClick={() => onCloseButton()}><CloseIcon
          className={styles.close_icon}/></ButtonIcon>
        <Card>
          <h3 className={styles.heading}>Добавление товара</h3>
          <AddProductForm onCloseForm={onCloseForm}/>
        </Card>
      </div>
    </div>
  );
};

export default AddProduct;