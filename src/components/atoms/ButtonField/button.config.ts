import { ButtonProps } from "antd";

export enum Button_Size {
    z = '',
    auto = "!w-auto !px-[12px]",
    sm = "!min-w-[70px] !px-[12px]",
    md = "!min-w-[154px] !px-[24px]",
    full = "!w-full !px-[12px]"
}

export enum Margin_Top {
    z= '',
    n = "mt-0",
    nm = "mt-[12px]",
    xl = "mt-[24px]"
}


export interface ButtonFieldType extends ButtonProps{
    bSize?: keyof typeof Button_Size
    mt?: keyof typeof Margin_Top
}