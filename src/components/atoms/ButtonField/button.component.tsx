"use client";
import { Button, ButtonProps } from "antd";
import { buttonStyle } from "./button.style";
import { Button_Size, ButtonFieldType, Margin_Top } from "./button.config";



const ButtonField = ({
    id,
    name,
    type,
    size,
    onClick,
    children,
    bSize = 'z',
    mt = 'z',
    className,
    ...rest
}: ButtonFieldType) => {
    return (
        <Button
            id={id}
            name={name}
            type={type}
            size={size}
            onClick={onClick}
            className={`${buttonStyle} ${className} ${Button_Size[bSize]} ${Margin_Top[mt]} `}
            {...rest}
        >
            {children}
        </Button>
    );
}
export default ButtonField;