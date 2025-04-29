import { CustomToggleSwitch } from '@/components/atoms/CustomToggleSwitch';
import React from 'react'
interface ToggleItemProps {
  label: string;
  onText: string;
  offText: string;
  value?: boolean;
  onChange?: (checked: boolean) => void;
  className?:string;
  toggleSm?:boolean;
}




const AccountToggleCard = ({ label, onText, offText, value, className, onChange, toggleSm }:ToggleItemProps) => {
  return (
    <div className={`w-full flex justify-between items-center px-[19px] py-[15px] border-gray-2 border-[1px] rounded-[5px] mb-[11px] ${className}   max-[1224px]:self-end  `}>
    <p className='text-black font-bold text-base'>{label}</p>
    <CustomToggleSwitch onText={onText}
        offText={offText} sm={toggleSm} />
  </div>
  )
}

export default AccountToggleCard