import {loginApi} from "@/pages/auth/api/login.api.ts";
import type {ErrorResponseType, UseLoginType} from "@/pages/auth/authTypes.ts";
import {useMutation} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";

export const useLogin = ({remember, setError}: UseLoginType) => {
  const navigate = useNavigate();

  const {mutate, isPending} = useMutation({
    mutationFn: loginApi.login, onSuccess: (response) => {
      const token = response.data.accessToken;

      if (remember) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }

      navigate('/items');
    },
    onError: (error: ErrorResponseType) => {
      if (error.status === 400 || error.status === 401) {
        setError('password', {type: 'custom', message: 'Invalid email or password'});
      }
    }
  });
  return {mutate, isPending} as const;
};