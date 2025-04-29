import ButtonField from '@/components/atoms/ButtonField/button.component'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import { SignOption } from '@/components/atoms/SignOption'
import { TitleField } from '@/components/atoms/TitleField'
import { registrationData } from '@/constants/dummyData'
import { Link } from '@/i18n/navigation'
import { Input } from 'antd'
import { useTranslations } from 'next-intl'
import React from 'react'

const RegistrationCard = () => {
    const t = useTranslations('Registration')
    return (
        <div className='bg-white rounded-[5px]  flex justify-evenly items-start pt-[119px] pb-[44px] max-mdp:flex-col max-mdp:items-center max-mdp:pt-[40px]' >
            <div className='max-w-[400px]   max-mdp:max-w-[80%]'>
                <TitleField text={t('title')} className='text-5xl max-mdp:text-center max-sm:text-2xl max-[450px]:text-xl' />
                <ParagraphField title={t('pTitle')} paragraph={t('pText')} className='mt-[30px] max-mdp:mb-[30px]' pClassName='text-[19px] text-gray-5 max-mdp:text-center max-sm:text-sm' tClassName='max-mdp:text-center max-sm:text-base' />
            </div>
            <div className='max-w-[334px] w-full max-mdp:max-w-[80%]'>
                <Input size='large' prefix={<img src='/Email.svg' className='mr-[10px]' />} placeholder={t('email')} className='py-[19px] pl-[12px] !rounded-md mb-[10px]  hover:border-red-10' />
                {
                    registrationData.map((item, i) => <SignOption key={i} imgUrl={item.imgUrl} text={t(`${item.text}`)} />)
                }
                <div className='flex justify-between items-center'>
                    <Link href={'/legal_terms'}>
                        <p className='pt-[35px] pb-[40px] text-[12px] cursor-pointer'>
                            {t('terms')}
                            <span className='text-red-10'>{t('termsLink')}</span>
                        </p>
                    </Link>
                    <img src="/checked.svg" alt="check img" />
                </div>
                <Link href='/my_plan/sign-up'>
                    <ButtonField className='p-[9px] bg-red-10  text-white w-full text-center h-[40px]'>{t('button')}</ButtonField>
                </Link>
                <div className='flex items-center justify-center mt-[26px]'>
                    <p className='text-red-10 mr-[10px]'>{t('loginText')} </p>
                    <Link href={'/signin'} className='text-red-10 font-bold'>{t('login')}</Link>
                </div>
            </div>
        </div>
    )
}

export default RegistrationCard