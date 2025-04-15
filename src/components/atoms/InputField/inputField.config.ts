import { InputProps } from "antd"

export enum Input_Size {
    idle = '',
    auto = "!w-auto !px-[12px]",
    extra_sm = "w-[35px] !px-[12px] py-[4px]",
    sm = "!min-w-[70px] !px-[12px]",
    md = "!min-w-[154px] !px-[24px]",
    full = "!w-full !px-[20px] py-[14px]"
}

export enum Color_Type {
    idle = '',
    red_white = "!bg-red-10 !text-white font-bold",
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


export interface InputFieldType extends InputProps{
    iSize?: keyof typeof Input_Size
    cType?:keyof typeof Color_Type
    mt?: keyof typeof Margin_Top
}