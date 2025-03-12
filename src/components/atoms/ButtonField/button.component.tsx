"use client";
import { Button, ButtonProps } from "antd";


const ButtonField = ({
    id,
    name,
    type,
    size,
    onClick,
    children,
    className,
    ...rest
}: ButtonProps) => {
    return (
        <Button
            id={id}
            name={name}
            type={type}
            size={size}
            onClick={onClick}
            className={` transition-transform duration-300 hover:scale-110 ${className}  `}
            {...rest}
        >
            {children}
        </Button>
    );
}
export default ButtonField;