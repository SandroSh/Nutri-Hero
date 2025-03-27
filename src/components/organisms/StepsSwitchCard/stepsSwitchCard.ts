import { useTranslations } from "next-intl";

export interface StepType{
    title?:string;
    content:React.ReactNode
}
export const handleImgRender = (currentStep:number): string => {
    switch (currentStep) {
        case 0:
            return "/Rectangle 1473 vertical.png";
        case 1:
            return "/Rectangle 1475.png";
        case 2:
            return "/Rectangle 1476.png";
        case 3:
            return "/Rectangle 1477.png";
        default:
            return ''
    }
}

