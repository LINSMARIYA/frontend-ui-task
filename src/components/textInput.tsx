import { ChangeEvent, FC } from "react";

type TextInputProps = {
  label: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  labelStyle?: string;
  inputStyle?: string;
  tailText?: string;
};

const TextInput: FC<TextInputProps> = ({
  label,
  value,
  onChange,
  labelStyle,
  inputStyle,
  placeholder,
  tailText,
}) => {
  return (
    <div className="mb-4">
      <div className="flex flex-1 justify-between">
        <div
          className={`text-left text-[#C5C7CA] text-sm font-medium leading-4 mb-2.5 ${labelStyle}`}
        >
          {label}
        </div>
        <div className="text-xs">{tailText}</div>
      </div>
      <input
        className={`bg-transparent text-white placeholder-[#7F8084] border rounded-md border-[#35373B] w-full py-2 px-3 leading-tight  focus:outline-none focus:shadow-outline ${inputStyle}`}
        id={label}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
