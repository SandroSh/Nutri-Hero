'use client'
import { TimeTitle } from '@/components/atoms/TimeTitle'
import { TitleField } from '@/components/atoms/TitleField'
import { accountSidebarLinks } from '@/constants/dummyData'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
const AccountSidebar = () => {
    const t = useTranslations('account')
    const pathname = usePathname();

    return (
        <div className='w-[400px] bg-gray-0 h-[100%] fixed top-0 left-0 pt-[130px] flex justify-center'>
            <div className='flex flex-col items-start absolute left-[120px]  '>
                <div className='flex flex-col'>
                    <Image src={'/Avatar.png'} alt={'image'} width={130} height={130} />
                    <TitleField text={t('sidebar.name')} className='text-black mt-[35px] font-bold text-[28px] leading-[22px]' />
                </div>
                {
                    <div className='flex  justify-center  mt-[35px]'>
                        {[... new Array(3)].map((_, i) => <TimeTitle numText={t(`sidebar.date.${i}.time`)} text={t(`sidebar.date.${i}.text`)} key={i} tClassName='font-normal !text-[1.4em] !text-black leading-[14px]' pClassName='font-normal text-[15px] leading-[8px] mt-[15px] !text-black' className={i == 1 ? 'mx-[40px]' : ''} />)}
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
    )
}

export default AccountSidebar