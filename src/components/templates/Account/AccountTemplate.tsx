'use client'
import { AccountSettings } from '@/components/organisms/AccountSettings'
import { AccountSidebar } from '@/components/organisms/AccountSidebar'
import { AllergensForm } from '@/components/organisms/AllergensForm'
import { PersonalDetailsForm } from '@/components/organisms/PersonalDetailsForm'
import { SectionContainer } from '@/components/organisms/SectionContainer'

import { usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'



const AccountTemplate = () => {
  const t = useTranslations('account');
  const pathname = usePathname()

  const renderForms = () => {
    switch (pathname) {
      case '/account/personal-details':
        return <PersonalDetailsForm />
      case '/account/allergens':
        return <AllergensForm />
      case '/account/settings':
        return <AccountSettings />
    }
  }
  return (
    <div className='mt-[110px] flex justify-around'>
      <AccountSidebar />
      <SectionContainer  innerWrapperClassName='w-full flex justify-end'>
        {renderForms()}
      </SectionContainer>

    </div>
  )
}

export default AccountTemplate