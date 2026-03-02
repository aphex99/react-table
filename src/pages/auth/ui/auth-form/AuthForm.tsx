import {useLogin} from "@/pages/auth/api/useLogin.ts";
import {type LoginFormSchemaType, loginSchema} from "@/pages/auth/config/loginSchema.ts";
import {emailToUserNameMap} from "@/pages/auth/model/emailToUserNameMap.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {useForm, useWatch} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import EyeIcon from '@/shared/assets/icons/eye.svg?react';
import EyeCrossedIcon from '@/shared/assets/icons/eye-crossed.svg?react';

interface AuthFormPropsType {
  handleLoader: (value: boolean) => void;
}

import styles from "./AuthForm.module.scss";

const AuthForm = ({handleLoader}: AuthFormPropsType) => {

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    control,
    register,
    setError,
    clearErrors,
    handleSubmit,
    formState: {errors}
  } = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    reValidateMode: 'onBlur'
  });

  const remember = useWatch({control, name: 'remember', defaultValue: false});

  const {mutate, isPending} = useLogin({remember, setError, handleLoader});

  const onSubmit = ({username, password}: LoginFormSchemaType) => {
    const mappedUserName = emailToUserNameMap[username];
    mutate({username: mappedUserName, password}, {onSuccess: () => navigate('/items')});
  };

  const EyeIcons = showPassword ? EyeIcon : EyeCrossedIcon;

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input_container}>
          <label htmlFor="username">emily.johnson@x.dummyjson.com</label>
          <input type="text" id={"username"} {...register('username')} onChange={() => {
            if (errors.username) clearErrors('username');
          }}/>
          {errors.username && (<span>{errors.username.message}</span>)}
        </div>

        <div className={styles.input_container}>
          <label htmlFor="password">emilyspass</label>
          <div className={styles.input_password_container}>
            <input
              type={showPassword ? "text" : "password"} id={"password"}
              {...register('password')} onChange={() => {
              if (errors.password) clearErrors('password');
            }}/>
            <EyeIcons
              className={styles.eye_icons}
              onClick={() => setShowPassword(prev => !prev)}
            />
          </div>
          {errors.password && (<span>{errors.password.message}</span>)}
        </div>

        <input type="checkbox" {...register('remember')}/>
        <input type="submit" disabled={isPending} value={'Log In'}/>
      </form>
    </div>
  );
};

export default AuthForm;