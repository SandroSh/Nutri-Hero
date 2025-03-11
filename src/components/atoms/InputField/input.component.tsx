"use client";
import { Input, InputProps } from "antd";


const InputField = ({
    id,
    name,
    type,
    size,
    onClick,
    children,
    className,
    ...rest
}: InputProps) => {
    return (
        <Input
            id={id}
            name={name}
            type={type}
            size={size}
            onClick={onClick}
            className={className}
            {...rest}
        >
            {children}
        </Input>
    );
}
export default InputField;