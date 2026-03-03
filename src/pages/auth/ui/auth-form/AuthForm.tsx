import {useLogin} from "@/pages/auth/api/useLogin.ts";
import {type LoginFormSchemaType, loginSchema} from "@/pages/auth/config/loginSchema.ts";
import ButtonIcon from "@/shared/ui/button-icon/ButtonIcon.tsx";
import Button from "@/shared/ui/button/Button.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import clsx from "clsx";
import {useState} from "react";
import {useForm, useWatch} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import EyeIcon from '@/shared/assets/icons/eye.svg?react';
import EyeCrossedIcon from '@/shared/assets/icons/eye-crossed.svg?react';
import UserIcon from '@/shared/assets/icons/user.svg?react';
import LockIcon from '@/shared/assets/icons/lock.svg?react';
import CrossIcon from '@/shared/assets/icons/cross.svg?react';
import styles from "./AuthForm.module.scss";

interface AuthFormPropsType {
  handleLoader: (value: boolean) => void;
}

const AuthForm = ({handleLoader}: AuthFormPropsType) => {

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    resetField,
    control,
    register,
    setError,
    clearErrors,
    handleSubmit,
    formState: {errors}
  } = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    reValidateMode: 'onBlur',
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const remember = useWatch({control, name: 'remember', defaultValue: false});

  const {mutate, isPending} = useLogin({remember, setError, handleLoader});

  const onSubmit = ({username, password}: LoginFormSchemaType) => {
    mutate({username, password}, {onSuccess: () => navigate('/items')});
  };


  const EyeIcons = showPassword ? EyeIcon : EyeCrossedIcon;

  // emilys
  // emilyspass

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.input_wrapper}>
        <label htmlFor="username" className={styles.label}>Логин</label>
        <div className={styles.input_container}>
          <UserIcon className={styles.left_icon}/>
          <input
            type="text" id={"username"}
            placeholder={"Ваш логин"}
            className={clsx(styles.input, errors.username && styles.input_error)}
            {...register('username', {
              onChange: () => {
                if (errors.username) clearErrors('username');
              }
            })} />
          <ButtonIcon type={"button"}
            className={styles.icon_button}
                      onClick={() => resetField('username', {keepError: false})}
          >
            <CrossIcon/>
          </ButtonIcon>
        </div>
        {errors.username && (<span className={styles.field_error}>{errors.username.message}</span>)}
      </div>

      <div className={styles.input_wrapper}>
        <label htmlFor="password" className={styles.label}>Пароль</label>
        <div className={styles.input_container}>
          <LockIcon className={styles.left_icon}/>
          <input
            type={showPassword ? "text" : "password"} id={"password"}
            placeholder={"Ваш пароль"}
            className={clsx(styles.input, errors.password && styles.input_error)}
            {...register('password', {
              onChange: () => {
                if (errors.username) clearErrors('username');
              }
            })}/>
          <ButtonIcon type={"button"}
            className={styles.icon_button}
                      onClick={() => setShowPassword(prev => !prev)}
          >
            <EyeIcons
            />
          </ButtonIcon>
        </div>
        {errors.password && (<span className={styles.field_error}>{errors.password.message}</span>)}
      </div>

      <div className={styles.checkbox_container}>
        <input type="checkbox" id={"checkbox"} {...register('remember')}/>
        <label htmlFor="checkbox" className={styles.checkbox_label}>Запомнить меня</label>
      </div>
      <Button type={"submit"} disabled={isPending} className={styles.button}>Войти</Button>
    </form>
  );
};

export default AuthForm;