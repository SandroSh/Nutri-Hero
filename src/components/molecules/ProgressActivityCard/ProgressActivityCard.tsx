import { EditField } from '@/components/atoms/EditField'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import React from 'react'



export interface ProgressActivityCardProps {
  className?: string
  label: string;
  title: string;
  paragraph: string;
  isEditVisible?: boolean;
}

const ProgressActivityCard = ({ className, title, label, paragraph, isEditVisible = true }: ProgressActivityCardProps) => {
  return (
    <div className={`w-full bg-gray-0 rounded-[5px] ${className}`} >
      <div className='w-full flex flex-col justify-start items-start  pt-[16px] px-[25px] pb-[30px]'>
        <div className='w-full flex justify-between items-center mb-[10px]' >
          <p className='text-gray-7'>{label}</p>
          {isEditVisible && <EditField />}
        </div>
        <ParagraphField title={title.toUpperCase()} paragraph={paragraph} className='max-w-[615px]' tClassName='text-5xl max-mdp:text-2xl max-sm:text-xl' pClassName='text-gray-7' />
      </div>
    </div>
  )
}

export default ProgressActivityCard