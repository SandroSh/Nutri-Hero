import Image from 'next/image';
import React from 'react'
import MainLogo from '../../../../public/Logo Black Full.svg'
import { LogoProps } from './Logo.config';
import { Link } from '@/i18n/navigation';

const Logo = ({
  onClick,
  width,
  height,
  className,
  ...rest
}: LogoProps) => {
  return (
    <Link href={'/'} >
    <Image src={MainLogo} alt="logo" width={width} height={height} className={`cursor-pointer ${className}`} {...rest} />
    </Link>

  )
}

export default Logo





