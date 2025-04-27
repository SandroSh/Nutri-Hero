import { useTranslations } from 'next-intl';
import React from 'react'
interface BMIResultCardProps {
    bmi: number;
    title: string;

    className?:string;
}

const CalculatedBMICard = ({ bmi, title, className }: BMIResultCardProps) => {
    const t = useTranslations('progress.parameters');
    const handleColorChange = () => {
        const receivedBmi = bmi;
        if (receivedBmi < 18.5) {
            return { color: 'bg-yellow-500', text: t('2.conditions.0') };
        } else if (receivedBmi >= 18.5 && receivedBmi < 25) {

            return { color: 'bg-green-0', text: t('2.conditions.1') };
        } else {
            return { color: 'bg-red-10', text: t('2.conditions.2') };
        }
    }
    return (
        <div className={`w-full max-w-[410px] gap-[16px] h-[125px]  flex flex-col justify-between pb-[18px] pr-[10px] pl-[19px] rounded-[5px] shadow-md text-white ${handleColorChange().color} ${className}`}>
            <div className="mt-3 text-xl">{title}</div>
            <div className="flex justify-start items-center gap-[10px]">
                <span className="text-4xl">{bmi}</span>
                <h1 className='mt-[10px]'>{handleColorChange().text}</h1>
            </div>
        </div>
    )
}

export default CalculatedBMICard