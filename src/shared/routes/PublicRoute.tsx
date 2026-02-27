import type {ReactNode} from "react";
import {Navigate} from "react-router-dom";

export const PublicRoute = ({children}: { children: ReactNode }
) => {

  const token =
    localStorage.getItem("token") ||
    sessionStorage.getItem("token");

  if (token) {
    return <Navigate to="/items" replace/>;
  }

  return children;
};