import type {ButtonHTMLAttributes, ReactNode} from "react";

export type ButtonType = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>