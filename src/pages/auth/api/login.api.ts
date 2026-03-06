import {axiosInstance} from "@/shared/config/axios/axios.ts";

import type {AuthRequestType} from "./types.ts";

export const loginApi = {
  login(request: AuthRequestType) {
    return axiosInstance.post("/auth/login", request);
  }
};