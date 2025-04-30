'use client'
import { BodyMassInput } from '@/components/atoms/BodyMassInput'
import { CalculatedBMICard } from '@/components/molecules/CalculatedBMICard'
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
    return (

        <div className=' relative w-full flex justify-between items-center gap-[16px] mt-[-30px] max-xl:px-[19px] max-md:flex-wrap '>

            <BodyMassInput
                label={t('0.title')}
                unit={t('0.unit')}
                button={t('button')}
                width='w-[105px]'
                value={weight}
                className='w-full'
                onChange={(e) => setWeight(parseInt(e.target.value))}
            />

            <BodyMassInput
                label={t('1.title')}
                unit={t('1.unit')}
                button={t('button')}
                width='w-[105px]'
                value={height}
                className='w-full'
                onChange={(e) => setHeight(parseInt(e.target.value))}
            />

            <CalculatedBMICard
                bmi={parseFloat(calculateBMI())}
                title={t('2.title')}
                className='max-w-[410px] max-md:max-w-none max-md:mb-[50px]'
            />
        </div>

    );
}

export default BMICalculator