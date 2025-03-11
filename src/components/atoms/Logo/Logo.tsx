import Image from 'next/image';
import React from 'react'
import MainLogo from '../../../../public/Logo Black Full.svg'
export interface LogoProps {
  onClick?: () => void;
  width?: number;
  height?: number;
  className?: string;
}

const Logo = ({
  onClick,
  width,
  height,
  className,
  ...rest
}: LogoProps) => {
  return (

    <Image src={MainLogo} alt="logo" width={width} height={height} className={className} {...rest} />

  )
}

export default Logo





