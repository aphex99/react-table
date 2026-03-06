import axios from "axios";
import toast from "react-hot-toast";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 20000
});

axiosInstance.interceptors.request.use((config) => {
  const token =
    localStorage.getItem("token") ||
    sessionStorage.getItem("token");
  if (token && config.url?.startsWith("/auth")) { // dummyJSON токены нужны только для /auth
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error?.response?.data?.message;
    if (error.response) {
      switch (error.response.status) {
        case 400:
        case 401:
          toast(message ?? 'Authorisation is required');
          break;
        case 404:
          toast(message ?? 'Resource not found');
          break;
        case 500:
          toast(message ?? 'Server Error');
          break;
        default:
          toast(message ?? 'An error occurred');
      }
    } else if (error.request) {
      toast(message ?? 'Network error. Check your connection');
    }
    return Promise.reject(error.response ?? error);
  }
);

