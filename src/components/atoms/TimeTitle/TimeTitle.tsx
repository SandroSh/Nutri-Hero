import React from 'react'
import { TitleField } from '../TitleField'
import { timeTitleType } from './timeTitle.config'

const TimeTitle = ({numText, text}:timeTitleType) => {
  return (
    <div className='flex flex-col items-start justify-start mr-[77px]'>
        <TitleField text={numText} className='font-bold text-white text-8xl'/>
        <p className='text-2xl text-white font-normal'>{text}</p>
    </div>
  )
}

export default TimeTitle