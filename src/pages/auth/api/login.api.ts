import type {LoginRequestType} from "@/pages/auth/authTypes.ts";
import {axiosInstance} from "@/shared/config/axios/axios.ts";

export const loginApi = {
  login(request: LoginRequestType) {
    return axiosInstance.post("/auth/login", request);
  }
};