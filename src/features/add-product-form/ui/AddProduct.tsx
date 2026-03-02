import AddProductForm from "@/features/add-product-form/ui/add-product-form/AddProductForm.tsx";
import ButtonIcon from "@/shared/ui/button-icon/ButtonIcon.tsx";
import CloseIcon from '@/shared/assets/icons/close.svg?react';
import styles from './AddProduct.module.scss';

export interface AddProductPropsType {
  onCloseForm: () => void;
}

const AddProduct = ({onCloseForm}: AddProductPropsType) => {

  const onCloseButton = () => {
    onCloseForm();
  };

  return (
    <div className={styles.container}>
      <ButtonIcon className={styles.close_button} onClick={() => onCloseButton()}><CloseIcon
        className={styles.close_icon}/></ButtonIcon>
      <AddProductForm onCloseForm={onCloseForm}/>
    </div>
  );
};

export default AddProduct;