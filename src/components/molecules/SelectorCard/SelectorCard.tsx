import React from 'react'
import { ISelectorCardTypes } from './selectorCard.config'
import { TitleField } from '@/components/atoms/TitleField'





const SelectorCard = ({title, className, children}:ISelectorCardTypes) => {
  return (
    <div className={`w-full flex flex-col items-start justify-center ${className}`}>
        <TitleField text={title} className='text-[18px] font-extrabold'/>
        {children}
    </div>
  )
}

export default SelectorCard