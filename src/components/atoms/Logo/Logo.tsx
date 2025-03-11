import React from 'react'

export interface LogoProps {
  onClick?: () => void;
  className?: string;
}

const Logo = ({
    onClick,
    className,
    ...rest
}:LogoProps) => {
  return (
    <div className={className} {...rest}>Logo</div>
  )
}

export default Logo





