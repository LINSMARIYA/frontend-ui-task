import { ChangeEvent, FC, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type TextInputProps = {
  label: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  labelStyle?: string;
  inputStyle?: string;
  tailText?: string;
  inputType?: string;
};

const TextInput: FC<TextInputProps> = ({
  label,
  value,
  onChange,
  labelStyle,
  inputStyle,
  placeholder,
  tailText,
  inputType = "text",
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="mb-4">
      <div className="flex flex-1 justify-between">
        <div
          className={`text-left text-silver text-sm font-medium leading-4 mb-2.5 ${labelStyle}`}
        >
          {label}
        </div>
        <div className="text-xs cursor-pointer text-silver">{tailText}</div>
      </div>
      <div className="relative">
        <input
          className={`bg-transparent text-white placeholder-granite border rounded-md border-darkGrey w-full py-2 px-3 leading-tight  focus:outline-none focus:shadow-outline ${inputStyle}`}
          id={label}
          type={
            inputType === "password" && isPasswordVisible ? "text" : inputType
          }
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {inputType === "password" && (
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
};

export default TextInput;
