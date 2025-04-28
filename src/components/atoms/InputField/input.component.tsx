"use client";
import { Input } from "antd";
import { Border, Color_Type, Input_Size, InputFieldType, Margin_Top } from "./inputField.config";


const InputField = ({
    id,
    name,
    type,
    size,
    onClick,
    iSize = 'idle',
    cType = 'idle',
    mt = 'idle',
    border = 'idle',
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
            className={` ${Input_Size[iSize]} ${Margin_Top[mt]} ${className} ${Color_Type[cType]} ${Border[border]}`}
            {...rest}
        >
            {children}
        </Input>
    );
}
export default InputField;