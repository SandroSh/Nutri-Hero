import { Dispatch, SetStateAction } from "react";

export interface myPlanCardProps {
    imgUrl: string
    className?: string
    children?: React.ReactNode,
    pTitle:string;
    pText?:string;
    bText?:string;
    buttonClass?:string;
    functionCall?: () => void;
}