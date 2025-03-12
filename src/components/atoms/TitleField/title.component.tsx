import React from 'react'

export interface TitleProps {
  className?: string
  text: string
}
const Title = ({
    className,
    text,
    ...rest
}:TitleProps) => {
  return (
    <h1 className={`font-bold text-4xl ${className}`} {...rest} >{text}</h1>
  )
}

export default Title