import { ButtonProps } from "antd";

export enum Button_Size {
    z = '',
    auto = "!w-auto !px-[12px]",
    sm = "!min-w-[70px] !px-[12px]",
    md = "!min-w-[154px] !px-[24px]",
    full = "!w-full !px-[12px]"
}
export enum Color_Type {
    z = '',
    red_white = "!bg-red-10 !text-white",
    red_blue = "!bg-red-10 !text-blue-1",
    gray_green = "!bg-gray-2 !text-green",
    gray_red = "!bg-gray-2 !text-red-1",
}
export enum Margin_Top {
    z= '',
    n = "!mt-0",
    nm = "!mt-[12px]",
    xl = "!mt-[24px]"
}


export interface ButtonFieldType extends ButtonProps{
    bSize?: keyof typeof Button_Size
    cType?:keyof typeof Color_Type
    mt?: keyof typeof Margin_Top
}