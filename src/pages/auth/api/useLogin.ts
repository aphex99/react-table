import {loaderDelay} from "@/shared/model/loaderDelay.ts";
import {loginApi} from "./login.api.ts";
import type {AuthRequestType, ErrorResponseType, UseLoginType} from "../authTypes.ts";
import {useMutation} from "@tanstack/react-query";

export const useLogin = ({remember, setError, setShowLoader}: UseLoginType) => {
  const {mutate, isPending} = useMutation({
    mutationFn: async (data: AuthRequestType) => {
      const start = Date.now();
      setShowLoader(true);

      try {
        const response = await loginApi.login(data);
        await loaderDelay(start);
        return response;
      } finally {
        setShowLoader(false);
      }

    },
    onMutate: () => {
      setShowLoader(true);
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
      }
    }
  });
  return {mutate, isPending} as const;
};