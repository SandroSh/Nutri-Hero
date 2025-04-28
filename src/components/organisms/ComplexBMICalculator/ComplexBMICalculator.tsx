import { BodyMassInput } from '@/components/atoms/BodyMassInput';
import { CalculatedBMICard } from '@/components/molecules/CalculatedBMICard';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'

const ComplexBMICalculator = () => {
  const t = useTranslations('progress.parameters');
  const [weight, setWeight] = useState(105);
  const [waist, setWaist] = useState(100);
  const [height, setHeight] = useState(190);
  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const waistAdjustment = 0.5 * (waist / height);
    return (bmi + waistAdjustment).toFixed(2);
  };

  return (

    <div className=' relative w-full flex flex-wrap justify-between items-center gap-[16px]'>
      <CalculatedBMICard bmi={parseFloat(calculateBMI())} title={t('2.title')} className='!max-w-[390px]' />
      <BodyMassInput
        label={t('1.title')}
        unit={t('1.unit')}
        button={t('button')}
        width='w-[105px]'
        value={height}
        className='w-full max-w-[390px]'
        onChange={(e) => setHeight(parseInt(e.target.value))}
      />
      <BodyMassInput
        label={t('0.title')}
        unit={t('0.unit')}
        button={t('button')}
        width='w-[105px]'
        className='w-full max-w-[390px]'
        value={weight}
        onChange={(e) => setWeight(parseInt(e.target.value))}
      />

      <BodyMassInput
        label={t('3.title')}
        unit={t('3.unit')}
        button={t('button')}
        width='w-[105px]'
        value={waist}
        className='w-full max-w-[390px]'
        onChange={(e) => setWaist(parseInt(e.target.value))}
      />


    </div>
  )
}

export default ComplexBMICalculator