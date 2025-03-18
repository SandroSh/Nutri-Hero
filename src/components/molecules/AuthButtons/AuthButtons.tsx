'use client'
import { Button } from '@/components/atoms/ButtonField'
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
      <Link href='/registration'>
        <Button className='p-[9px] bg-red-10 rounded-[5px] text-white' >{t('register')}</Button>
      </Link>
        <Button className='text-red-10' >{t('login')}</Button>
    </div>
  )
}

export default AuthButtons