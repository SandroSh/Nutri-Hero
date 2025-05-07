'use client'
import { AccountSettings } from '@/components/organisms/Settings'
import { AccountSidebar } from '@/components/organisms/AccountSidebar'
import { AllergensForm } from '@/components/organisms/AllergensForm'
import { PersonalDetailsForm } from '@/components/organisms/PersonalDetailsForm'
import { SectionContainer } from '@/components/organisms/SectionContainer'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { NavLinks } from '@/components/molecules/NavLinks'
import Image from 'next/image'
import { TitleField } from '@/components/atoms/TitleField'
import { TimeTitle } from '@/components/atoms/TimeTitle'
import { accountSidebarLinks } from '@/constants/dummyData'



const AccountTemplate = () => {
  const t = useTranslations('account');
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false);
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
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };
  return (
    <div className='mt-[110px] flex justify-around '>
      <AccountSidebar />
      <SectionContainer innerWrapperClassName='w-full flex justify-end max-xl:px-xl max-mdp:justify-center'>
        {renderForms()}
        <div className={`fixed flex  h-[50px] top-[calc(80%+45px)] ${menuOpen ? 'left-[calc(40%-25px)] rounded-br-[10px] rounded-tl-[10px] ' : 'left-0 rounded-tr-[10px] rounded-br-[10px]  '} z-50  mdp:hidden bg-blue-1`}>
          <button onClick={toggleMenu}>
            <Image
              src={`/${menuOpen ? 'left-arrow-svgrepo-com': 'right-arrow-svgrepo-com'}.svg`}
              alt="Menu"
              width={25}
              height={25}
            />
          </button>
        </div>
      </SectionContainer>


      {menuOpen && (
        <div className={` fixed top-[95px] h-[80%] left-0 w-[40%] bg-white shadow-md flex items-start py-4 px-[19px]  mdp:hidden z-10 rounded-br-[10px]`}>
           <div className='flex flex-col items-start absolute  '>
                <div className='flex flex-col mt-[50px]'>
                    <Image src={'/Avatar.png'} alt={'image'} width={45} height={45} />
                    <TitleField text={t('sidebar.name')} className='text-black mt-[15px] font-bold text-[28px] leading-[22px] max-mdp:text-[19px]' />
                </div>
                {
                    <div className='flex  justify-center  mt-[35px]'>
                        {[... new Array(3)].map((_, i) => <TimeTitle numText={t(`sidebar.date.${i}.time`)} text={t(`sidebar.date.${i}.text`)} key={i} tClassName='font-normal !text-[1.2em] !text-black leading-[14px] max-mdp:text-[19px] max-esm:text-[14px]' pClassName='font-normal text-[12px] leading-[8px] mt-[15px] !text-black max-mdp:text-[12px] max-esm:text-[12px] max-mdp:mt-[10px] max-esm:mt-[5px] ' className={i == 1 ? 'mx-[40px] max-mdp:mx-[15px] max-esm:mx-[8px]' : ''} />)}
                    </div>
                }

                <div className='flex flex-col mt-[45px]'>
                    {
                        accountSidebarLinks.map((item, i) => <Link href={item.link} key={i}><p className={`font-semibold text-[16px] leading-[40px] ${item.link == pathname ? 'text-red-10' : 'text-black'}`}>{t(item.text)}</p></Link>)
                    }
                </div>
                <p className='font-semibold text-[16px] leading-[40px] mt-[60px]'>{t('buttons.logout')}</p>
            </div>
        </div>
      )}
    </div>
  )
}

export default AccountTemplate