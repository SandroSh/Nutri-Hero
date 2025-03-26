import Image from "next/image";
import React, { useState } from "react";

interface RadioFieldProps {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
  selectedBgColor?: string;
}

const RadioField: React.FC<RadioFieldProps> = ({
  name,
  value,
  label,
  checked,
  onChange,
  selectedBgColor = "bg-blue-600",
}) => {
  const [_, setRender] = useState(false);
  const handleClick = () => {
    onChange(value);
    setRender((prev) => !prev)
  };

  return (
    <label className="flex w-full max-w-[410px] justify-between items-center gap-3 my-[10px]">
      <span className="text-gray-800 text-base">{label}</span>
      <div
        className={`w-5 h-5 flex items-center cursor-pointer justify-center rounded-full border-2 transition-all ${checked
            ? `${selectedBgColor} border-transparent text-white`
            : "border-gray-400 bg-white"
          }`}
        onClick={handleClick}
      >
        {checked && (
          <Image
            src={"/select-svgrepo-com.svg"}
            width={12}
            height={12}
            alt="checkmark"
          />
        )}
      </div>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleClick}
        className="hidden "
      />
    </label>
  );
};

export default RadioField;