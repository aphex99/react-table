import type {ButtonType} from "@/shared/ui/button/buttonTypes.ts";

const Button = ({children, ...rest}: ButtonType) => {
  return (
    <button {...rest}>
      {children}
    </button>
  );
};

export default Button;