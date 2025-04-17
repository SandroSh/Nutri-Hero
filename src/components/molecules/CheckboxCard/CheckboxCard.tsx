import { CheckboxField } from '@/components/atoms/Checkbox'
import React from 'react'
import { CheckBoxCardType } from './checkboxCard.config'





const CheckboxCard = ({pText,pClassName, className }:CheckBoxCardType) => {
    return (
        <div className={` max-w-[150px] flex justify-start items-center m-[7px] ml-[0] ${className}`} >
            <CheckboxField/>
            <p className={`${pClassName} ml-[10px] text-base`}>{pText}</p>
        </div>
    )
}

export default CheckboxCard