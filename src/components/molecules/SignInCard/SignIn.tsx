import { SignOption } from '@/components/atoms/SignOption'
import { TitleField } from '@/components/atoms/TitleField'
import { registrationData } from '@/constants/dummyData'
import { Divider, Input } from 'antd'
import { useTranslations } from 'next-intl'
import React, { Dispatch, SetStateAction } from 'react'

import ButtonField from '@/components/atoms/ButtonField/button.component'
import { Link } from '@/i18n/navigation'
import { inputInnerIconStyle, grayInputStyle } from '@/components/atoms/InputField/inputField.style'



const SignIn = ({resetFunction}:{resetFunction:Dispatch<SetStateAction<boolean>>}) => {
    const t = useTranslations('Signin')
    return (
        <div className='max-w-[500px] bg-white rounded-md w-full flex flex-col items-center justify-center py-[40px] px-[85px] mt-[60px]'>
            <TitleField text={t('title')} className='mb-[30px] text-center text-[1.5em]' />
            <Input size='large' suffix={<p onClick={() => resetFunction((state) => !state)} className={inputInnerIconStyle}>{t('forget')}</p>} placeholder={t('username')} className={grayInputStyle} />
            <Input size='large' type='password' suffix={<p onClick={() => resetFunction((state) => !state)} className={inputInnerIconStyle}>{t('forget')}</p>} placeholder={t('password')} className={grayInputStyle} />

            <Divider orientation='center' className='before:mx-[15px] after:mx-[15px] text-gray-3 mb-[19px]' >  {t('divider')}  </Divider>

            {
                registrationData.map((item, i) => <SignOption key={i} imgUrl={item.imgUrl} text={t(`${item.text}`)} className='!mb-[12px]' />)
            }
            <ButtonField className='p-[5px] bg-red-10  text-white w-full text-center h-[40px]  mt-[15px]'>{t('button')}</ButtonField>
            <div className='flex items-center justify-center mt-[26px]'>
                <p className='text-red-10 mr-[10px]'>{t('signUpText')} </p>
                <Link href={'/signup'} className='text-red-10 font-bold'>{t('register')}</Link>
            </div>
        </div>
    )
}

export default SignIn