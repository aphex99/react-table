import type {AddProductFormPropsType} from "@/pages/products/ui/table-header/add-product-form/addProductFormTypes.ts";
import {
  addProductSchema,
  type AddProductSchemaType
} from "@/pages/products/ui/table-header/add-product-form/config/addProductSchema.ts";
import ButtonIcon from "@/shared/ui/button-icon/ButtonIcon.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import CloseIcon from '@/shared/assets/icons/close.svg?react';
import styles from './AddProductForm.module.scss';

const AddProductForm = ({onCloseForm}: AddProductFormPropsType) => {

  const {
    reset,
    register,
    clearErrors,
    handleSubmit,
    formState: {errors}
  } = useForm<AddProductSchemaType>({
    resolver: zodResolver(addProductSchema),
    mode: "onBlur",
    reValidateMode: 'onBlur'
  });

  const onSubmit = () => {
    onCloseForm();
    toast('The product was added successfully');
  };

  const onCloseButton = () => {
    reset();
    onCloseForm();
  };

  return (
    <div className={styles.container}>
      <ButtonIcon className={styles.close_button} onClick={() => onCloseButton()}><CloseIcon
        className={styles.close_icon}/></ButtonIcon>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input_container}>
          <label htmlFor="title">Наименование</label>
          <input
            type="text"
            id={"title"}
            {...register("title")}
            onChange={() => {
              if (errors.title) clearErrors('title');
            }}
          />
          {errors.title && <span className={styles.error_description}>{errors?.title.message}</span>}
        </div>
        <div className={styles.input_container}>
          <label htmlFor="brand">Вендор</label>
          <input
            type="text"
            id={"brand"}
            {...register("brand")}
            onChange={() => {
              if (errors.brand) clearErrors('brand');
            }}/>
          {errors.brand && <span className={styles.error_description}>{errors?.brand.message}</span>}
        </div>
        <div className={styles.input_container}>
          <label htmlFor="sku">Артикул</label>
          <input
            type="text"
            id={"sku"}
            {...register("sku")}
            onChange={() => {
              if (errors.sku) clearErrors('sku');
            }}/>
          {errors.sku && <span className={styles.error_description}>{errors?.sku.message}</span>}
        </div>
        <div className={styles.input_container}>
          <label htmlFor="price">Цена, ₽</label>
          <input
            type="number"
            id={"price"}
            {...register("price")}
            onChange={() => {
              if (errors.price) clearErrors('price');
            }}/>
          {errors.price && <span className={styles.error_description}>{errors?.price.message}</span>}
        </div>
        <div>
          <input type="submit" value={'Добавить'}/>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;