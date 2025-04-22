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
            return 'bg-yellow-500';
        } else if (bmi >= 18.5 && bmi < 25) {
            return 'bg-green-0';
        } else {
            return 'bg-red-10';
        } 
    }
    return (
        <div className='w-full flex justify-between items-center mt-[30px] z-10 '>
            <BodyMassInput
                label={t('0.title')}
                unit={t('0.unit')}
                button={t('0.title')}
                width='w-[80px]'
                value={weight}
                onChange={(e) => setWeight(parseInt(e.target.value))}
            />
            <BodyMassInput
                label={t('1.title')}
                unit={t('1.unit')}
                button={t('1.title')}
                width='w-[105px]'
                value={height}
                onChange={(e) => setHeight(parseInt(e.target.value))}
            />
            <div className={`w-full max-w-[410px] gap-[16px] h-[125px]  flex flex-col justify-between pb-[18px] pr-[10px] pl-[19px] rounded-xl shadow-md text-white ${handleColorChange()}`}>
                <div className="mt-3 text-xl">{t('2.title')}</div>
                <div className="flex justify-between items-center">
                    <span className="text-4xl">{calculateBMI()}</span>
                </div>
            </div>
        </div>
    );
}

export default BMICalculator