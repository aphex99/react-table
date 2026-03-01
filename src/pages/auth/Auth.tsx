import {SpinnerLoader} from "@/shared/ui/spinner-loader/SpinnerLoader.tsx";
import {useNavigate} from "react-router-dom";
import {loginSchema} from "./config/loginSchema.ts";
import {emailToUserNameMap} from "./model/emailToUserNameMap.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {useLogin} from "./api/useLogin.ts";
import type {AuthFormType} from "./authTypes.ts";

import EyeCrossedIcon from '@/shared/assets/icons/eye-crossed.svg?react';
import EyeIcon from '@/shared/assets/icons/eye.svg?react';

import {useForm, useWatch} from "react-hook-form";

import styles from './Auth.module.scss';

const Auth = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    control,
    register,
    setError,
    clearErrors,
    handleSubmit,
    formState: {errors}
  } = useForm<AuthFormType>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    reValidateMode: 'onBlur'
  });

  const remember = useWatch({control, name: 'remember', defaultValue: false});

  const {mutate, isPending} = useLogin({remember, setError, setShowLoader});

  const onSubmit = ({username, password}: AuthFormType) => {
    const mappedUserName = emailToUserNameMap[username];
    mutate({username: mappedUserName, password}, {onSuccess: () => navigate('/items')});
  };

  const EyeIcons = showPassword ? EyeIcon : EyeCrossedIcon;

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className={styles.container}>
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
            <EyeIcons className={styles.eye_icons} onClick={handleShowPassword}/>
          </div>
          {errors.password && (<span>{errors.password.message}</span>)}
        </div>

        <input type="checkbox" {...register('remember')}/>
        <input type="submit" disabled={isPending}/>
      </form>

      {showLoader && <SpinnerLoader/>}

    </div>
  );
};

export default Auth;