import {loginSchema} from "./config/loginSchema.ts";
import {emailToUserNameMap} from "./model/emailToUserNameMap.ts";
import {zodResolver} from "@hookform/resolvers/zod";
// import {useState} from "react";
import {useLogin} from "./model/useLogin.ts";
import {ScaleLoader} from "react-spinners";
import type {AuthFormType} from "./authTypes.ts";
// import EyeIcon from '@/shared/assets/icons/eye.svg?react';

import {useForm, useWatch} from "react-hook-form";

import styles from './Auth.module.scss';

const Auth = () => {

  // const [showPassword, setShowPassword] = useState(false);

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

  const {mutate, isPending} = useLogin({remember, setError});

  const onSubmit = ({username, password}: AuthFormType) => {
    const mappedUserName = emailToUserNameMap[username];
    mutate({username: mappedUserName, password});
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
          <input
            type={"password"}
            // type={showPassword ? "text" : "password"} id={"password"}
            {...register('password')} onChange={() => {
            if (errors.password) clearErrors('password');
          }}/>
          {errors.password && (<span>{errors.password.message}</span>)}
          {/*<button><EyeIcon/></button>*/}
        </div>

        <input type="checkbox" {...register('remember')}/>
        <input type="submit" disabled={isPending}/>
      </form>

      {isPending && (
        <div className={styles.spinner_container}>
          <ScaleLoader
            color={'gray'}
            aria-label={"Loading Spinner"}
          />
        </div>
      )}

    </div>
  );
};

export default Auth;