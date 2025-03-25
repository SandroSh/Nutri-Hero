'use client'
import { ButtonField } from '@/components/atoms/ButtonField'
import { Link } from '@/i18n/navigation';


import { useTranslations } from 'next-intl';
import React from 'react'

export interface AuthButtonsProps {
  className?: string
}



const AuthButtons = ({className, ...rest}: AuthButtonsProps) => {
  const t = useTranslations('authButtons');
  return (
    <div className={`flex justify-center items-center ${className}`} {...rest}>
      <Link href='/signup'>
        <ButtonField className='px-[10px] py-[22px] bg-red-10  text-white' >{t('register')}</ButtonField>
      </Link>
      <Link href='/signin'>
        <ButtonField className='text-red-10'  >{t('login')}</ButtonField>
      </Link>
    </div>
  )
}

export default AuthButtons