import { CheckboxField } from '@/components/atoms/Checkbox'
import React from 'react'
import { CheckBoxCardType } from './checkboxCard.config'





const CheckboxCard = ({pText,pClassName, className }:CheckBoxCardType) => {
    return (
        <div className={` max-w-[100px] flex justify-start items-center ${className}`} >
            <CheckboxField/>
            <p className={`${pClassName} ml-[10px]`}>{pText}</p>
        </div>
    )
}

export default CheckboxCard