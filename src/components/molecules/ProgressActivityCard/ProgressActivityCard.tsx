import { EditField } from '@/components/atoms/EditField'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import React from 'react'



export interface ProgressActivityCardProps {
  className?: string
  label:string;
  title:string;
  paragraph:string;
}

const ProgressActivityCard = ({ className, title, label, paragraph }:ProgressActivityCardProps) => {
  return (
    <div className={`w-full bg-gray-3 rounded-[5px] ${className}`} >
      <div className='w-full flex flex-col justify-start items-start  pt-[16px] px-[25px] pb-[30px]'>
        <div className='w-full flex justify-between items-center mb-[10px]' >
          <p className='text-gray-7'>{label}</p>
          <EditField />
        </div>
        <ParagraphField title={title.toUpperCase()} paragraph={paragraph} className='max-w-[615px]' tClassName='text-5xl' pClassName='text-gray-7' />
      </div>
    </div>
  )
}

export default ProgressActivityCard