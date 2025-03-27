"use client";
import { Input } from "antd";
import { Input_Size, InputFieldType, Margin_Top } from "./inputField.config";


const InputField = ({
    id,
    name,
    type,
    size,
    onClick,
    iSize = 'idle',
    cType = 'idle',
    mt = 'idle',
    children,
    className,
    ...rest
}: InputFieldType) => {
    return (
        <Input
            id={id}
            name={name}
            type={type}
            size={size}
            onClick={onClick}
            className={` ${Input_Size[iSize]} ${Margin_Top[mt]} ${className}`}
            {...rest}
        >
            {children}
        </Input>
    );
}
export default InputField;