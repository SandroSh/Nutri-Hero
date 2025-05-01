import { DatePicker, DatePickerProps } from 'antd'
import React from 'react'

const CustomDatePicker = ({className, suffixIcon }:DatePickerProps) => {
  return (
    <DatePicker className={`py-[15px] pl-[12px] border-transparent bg-gray-3 !rounded-md hover:border-red-10 mb-[10px] ${className} custom-date-picker `} suffixIcon={suffixIcon}  />
  )
}

export default CustomDatePicker