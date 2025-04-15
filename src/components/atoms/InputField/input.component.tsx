"use client";
import { Input } from "antd";
import { Color_Type, Input_Size, InputFieldType, Margin_Top } from "./inputField.config";


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
            className={` ${Input_Size[iSize]} ${Margin_Top[mt]} ${className} ${Color_Type[cType]}`}
            {...rest}
        >
            {children}
        </Input>
    );
}
export default InputField;