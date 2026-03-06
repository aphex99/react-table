import type {ButtonHTMLAttributes, ReactNode} from "react";

export type ButtonIconType = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>

const ButtonIcon = ({children, ...rest}: ButtonIconType) => {
  return (
    <button {...rest}>
      {children}
    </button>
  );
};

export default ButtonIcon;