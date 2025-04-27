import React from 'react'
import ComplexBMICalculator from '../ComplexBMICalculator/ComplexBMICalculator'
import { useTranslations } from 'next-intl'
import { TitleField } from '@/components/atoms/TitleField';






const PersonalDetailsForm = () => {
  const t = useTranslations('account');
  return (
    <div className='w-full max-w-[800px] flex flex-col justify-end mt-[70px] pb-[270px] text- '>
      <TitleField text={t('bodyMeasurements.title')} className='mb-[19px] !text-[1.5rem]'/>
      <ComplexBMICalculator />
    </div>
  )
}

export default PersonalDetailsForm