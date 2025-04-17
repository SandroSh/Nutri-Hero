import React from 'react'

export interface TitleProps {
  className?: string
  onClick?: () => void
  text: string
}
const Title = ({
    className,
    text,
    onClick,
    ...rest
}:TitleProps) => {
  return (
    <h1 className={`font-bold text-4xl ${className}`}  onClick={onClick} {...rest} >{text}</h1>
  )
}

export default Title