import type {ButtonHTMLAttributes, ReactNode} from "react";

export type ButtonType = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({children, ...rest}: ButtonType) => {
  return (
    <button {...rest}>
      {children}
    </button>
  );
};

export default Button;