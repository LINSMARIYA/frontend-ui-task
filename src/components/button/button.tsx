import { FC } from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  customStyle?: string;
};

const Button: FC<ButtonProps> = ({ label, onClick, customStyle }) => {
  return (
    <button
      className={`bg-softBlue hover:bg-darkBlue text-white text-base leading-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center w-full justify-center font-medium ${customStyle}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
