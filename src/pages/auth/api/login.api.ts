import type {AuthRequestType} from "@/pages/auth/authTypes.ts";
import {axiosInstance} from "@/shared/config/axios/axios.ts";

export const loginApi = {
  login(request: AuthRequestType) {
    return axiosInstance.post("/auth/login", request);
  }
};