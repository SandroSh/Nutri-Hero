'use client'
import { BodyMassInput } from '@/components/atoms/BodyMassInput'
import React, { useState } from 'react'
import { useTranslations } from 'use-intl'

const BMICalculator = () => {
    const t = useTranslations('progress.parameters');
    const [weight, setWeight] = useState(54);
    const [height, setHeight] = useState(170);
    const calculateBMI = () => {
        const heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters)).toFixed(2);
    };
    const handleColorChange = () => {
        const bmi = parseFloat(calculateBMI());
        if (bmi < 18.5) {
            return {color:'bg-yellow-500', text:t('2.conditions.0')};
        } else if (bmi >= 18.5 && bmi < 25) {
            
            return {color:'bg-green-0', text:t('2.conditions.1')};
        } else {
            return {color:'bg-red-10', text:t('2.conditions.2')};
        }
    }
    return (

        <div className=' relative w-full flex justify-between items-center gap-[16px] mt-[-30px] '>

            <BodyMassInput
                label={t('0.title')}
                unit={t('0.unit')}
                button={t('button')}
                width='w-[105px]'
                value={weight}
                onChange={(e) => setWeight(parseInt(e.target.value))}
            />

            <BodyMassInput
                label={t('1.title')}
                unit={t('1.unit')}
                button={t('button')}
                width='w-[105px]'
                value={height}
                onChange={(e) => setHeight(parseInt(e.target.value))}
            />

            <div className={`w-full max-w-[410px] gap-[16px] h-[125px]  flex flex-col justify-between pb-[18px] pr-[10px] pl-[19px] rounded-[5px] shadow-md text-white ${handleColorChange().color}`}>
                <div className="mt-3 text-xl">{t('2.title')}</div>
                <div className="flex justify-start items-center gap-[10px]">
                    <span className="text-4xl">{calculateBMI()}</span>
                    <h1 className='mt-[10px]'>{handleColorChange().text}</h1>
                </div>
            </div>
        </div>

    );
}

export default BMICalculator