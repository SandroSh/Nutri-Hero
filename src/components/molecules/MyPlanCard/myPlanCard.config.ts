import { Dispatch, SetStateAction } from "react";

export interface myPlanCardProps {
    imgUrl: string
    className?: string
    children?: React.ReactNode,
    pTitle:string;
    pTitleClassName?:string;
    pText?:string;
    title?:string;
    bText?:string;
    buttonClass?:string;
    bigTitle?:string;
    functionCall?: () => void;
}