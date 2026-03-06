import {useMutation} from "@tanstack/react-query";
import type {FieldError} from "react-hook-form";

import {loaderDelay} from "@/shared/libs/loaderDelay.ts";

import {loginApi} from "./login.api.ts";
import type {AuthRequestType, ErrorResponseType} from "./types.ts";

export interface UseLoginType {
  remember?: boolean;
  setError: (name: 'username' | 'password', error: FieldError) => void;
  handleLoader: (showLoader: boolean) => void;
}

export const useLogin = ({remember, setError, handleLoader}: UseLoginType) => {
  const {mutate, isPending} = useMutation({

    mutationFn: async (data: AuthRequestType) => {
      const start = Date.now();
      handleLoader(true);

      try {
        const response = await loginApi.login(data);
        await loaderDelay(start);
        return response;
      } finally {
        handleLoader(false);
      }

    },
    onMutate: () => {
      handleLoader(true);
    },

    onSuccess: (response) => {
      const token = response.data.accessToken;

      if (remember) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }
    },
    onError: (error: ErrorResponseType) => {
      if (error.status === 400 || error.status === 401) {
        setError('password', {type: 'custom', message: 'Invalid email or password'});
        setError('username', {type: 'custom', message: 'Invalid email or password'});
      }
    }
  });
  return {mutate, isPending} as const;
};