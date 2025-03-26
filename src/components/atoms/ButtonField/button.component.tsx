"use client";
import { Button, ButtonProps } from "antd";
import { buttonStyle } from "./button.style";
import { Button_Size, ButtonFieldType, Color_Type, Margin_Top } from "./button.config";



const ButtonField = ({
    id,
    name,
    type,
    size,
    onClick,
    children,
    bSize = 'auto',
    cType = 'z',
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
            className={`${buttonStyle}  ${Button_Size[bSize]} ${Margin_Top[mt]}  ${className} ${Color_Type[cType]} `}
            {...rest}
        >
            {children}
        </Button>
    );
}
export default ButtonField;