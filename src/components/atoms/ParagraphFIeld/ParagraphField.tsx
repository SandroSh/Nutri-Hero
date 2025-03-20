import React from 'react'
import { ParagraphFieldProps } from './Paragraph.config'

const ParagraphField = (
    {
        className,
        title,
        paragraph,
        tClassName,
        pClassName
    }:ParagraphFieldProps) => {
  return (
    <div className={`${className}`} >
        <h1 className={`font-bold text-2xl ${tClassName}`}>{title}</h1>
        <p className={`mt-[19px] text-[15px] ${pClassName}`}>{paragraph}</p>
    </div>
  )
}

export default ParagraphField