import { Button } from '@/components/atoms/ButtonField'
import { useTranslations } from 'next-intl';
import React from 'react'

export interface AuthButtonsProps {
  className?: string
}



const AuthButtons = ({className, ...rest}: AuthButtonsProps) => {
  const t = useTranslations('authButtons');
  return (
    <div className={`flex justify-center items-center ${className}`} {...rest}>
        <Button className='p-[9px] bg-red-10 rounded-[5px] text-white' >{t('register')}</Button>
        <Button className='text-red-10' >{t('login')}</Button>
    </div>
  )
}

export default AuthButtons