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
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
        case 401:
          toast(error.message ?? 'Authorisation is required');
          break;
        case 404:
          toast(error.message ?? 'Resource not found');
          break;
        case 500:
          toast(error.message ?? 'Server Error');
          break;
        default:
          toast(error.message ?? 'An error occurred');
      }
    } else if (error.request) {
      toast(error.message ?? 'Network error. Check your connection');
    }
    return Promise.reject(error.response ?? error);
  }
);

