import React from 'react'
export interface ParagraphFieldProps { 
    className?: string
    title: string
    paragraph: string
}

const ParagraphField = (
    {
        className,
        title,
        paragraph
    }:ParagraphFieldProps) => {
  return (
    <div className={`${className}`} >
        <h1 className='font-bold text-2xl'>{title}</h1>
        <p className='mt-[19px] text-1xl '>{paragraph}</p>
    </div>
  )
}

export default ParagraphField