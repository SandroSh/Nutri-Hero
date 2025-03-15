import Image from 'next/image';
import React from 'react'
import MainLogo from '../../../../public/Logo Black Full.svg'
import { LogoProps } from './Logo.config';

const Logo = ({
  onClick,
  width,
  height,
  className,
  ...rest
}: LogoProps) => {
  return (

    <Image src={MainLogo} alt="logo" width={width} height={height} className={`cursor-pointer ${className}`} {...rest} />

  )
}

export default Logo





