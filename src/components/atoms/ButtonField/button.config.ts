import { ButtonProps } from "antd";

export enum Button_Size {
    idle = '',
    auto = "!w-auto !px-[12px]",
    sm = "!min-w-[70px] !px-[12px]",
    md = "!min-w-[154px] !px-[24px]",
    xl = "!min-w-[154px] !px-[55px] !py-[12px]",
    full = "!w-full !px-[12px]"
}

export enum Color_Type {
    idle = '',
    red_white = "!bg-red-10 !text-white font-bold",
    white_red = "!bg-white !text-red-10 font-bold",
    red_blue = "!bg-red-10 !text-blue-1 font-bold",
    gray_green = "!bg-gray-2 !text-green font-bold",
    gray_red = "!bg-gray-2 !text-red-1 font-bold",
}
export enum Margin_Top {
    idle = '',
    n = "!mt-0",
    nm = "!mt-[12px]",
    xl = "!mt-[24px]"
}


export interface ButtonFieldType extends ButtonProps{
    bSize?: keyof typeof Button_Size
    cType?:keyof typeof Color_Type
    mt?: keyof typeof Margin_Top
}