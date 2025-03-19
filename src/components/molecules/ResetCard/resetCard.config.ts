import { Dispatch, SetStateAction } from "react";

export type resetCardType = {
    children:React.ReactNode;
    title:string;
    pText:string;
    bText:string;
    className?:string;
    functionCall: Dispatch<SetStateAction<boolean>>;
}