import type {ReactNode} from "react";
import {Navigate} from "react-router-dom";


export const ProtectedRoute = ({children}: { children: ReactNode }
) => {

  const token =
    localStorage.getItem("token") ||
    sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace/>;
  }

  return children;
};