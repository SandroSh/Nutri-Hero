
import { AccountSidebar } from '@/components/organisms/AccountSidebar'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'


const AccountTemplate = () => {
  const t = useTranslations('account')
  return (
    <div className='mt-[95px]'>
      <AccountSidebar/>
      <div className='h-[700px]'>

      </div>
    </div>
  )
}

export default AccountTemplate