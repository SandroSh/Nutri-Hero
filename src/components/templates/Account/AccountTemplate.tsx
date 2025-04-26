
import { CustomToggleSwitch } from '@/components/atoms/CustomToggleSwitch'
import { AccountSidebar } from '@/components/organisms/AccountSidebar'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'


const AccountTemplate = () => {
  const t = useTranslations('account');

  return (
    <div className='mt-[110px] flex justify-around'>
      <AccountSidebar />
      <div className='h-[700px]'>
        <h1 className='text-red-10'>rge</h1>
        <CustomToggleSwitch/>
      </div>
    </div>
  )
}

export default AccountTemplate