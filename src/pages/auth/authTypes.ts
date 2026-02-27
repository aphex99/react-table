import type {FieldError} from "react-hook-form";

export interface AuthFormType {
  username: string;
  password: string;
  remember?: boolean;
}

export interface AuthRequestType {
  username: string;
  password: string;
  expiresInMins?: number;
}

export interface ErrorResponseType {
  message: string;
  status: number;
}

export interface UseLoginType {
  remember?: boolean;
  setError: (name: 'username' | 'password', error: FieldError) => void;
  setShowLoader: (showLoader: boolean) => void;
}