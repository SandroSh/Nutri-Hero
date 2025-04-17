import React from 'react'
import { TitleField } from '../TitleField'
import { timeTitleType } from './timeTitle.config'

const TimeTitle = ({numText, text, className, tClassName, pClassName}:timeTitleType) => {
  return (
    <div className={`flex flex-col items-start justify-start mr-[77px] ${className}`}>
        <TitleField text={numText} className={`font-bold text-white text-8xl ${tClassName}`}/>
        <p className={`text-2xl text-white font-normal ${pClassName}`}>{text}</p>
    </div>
  )
}

export default TimeTitle