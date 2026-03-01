import type {ButtonType} from "@/shared/ui/button/buttonTypes.ts";

const ButtonIcon = ({children, ...rest}: ButtonType) => {
  return (
    <button {...rest}>
      {children}
    </button>
  );
};

export default ButtonIcon;