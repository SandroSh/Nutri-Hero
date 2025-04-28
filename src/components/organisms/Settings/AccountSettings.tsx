import { ButtonField } from '@/components/atoms/ButtonField'
import { CustomInputField } from '@/components/atoms/CustomInputField'
import { InputField } from '@/components/atoms/InputField'
import { TitleField } from '@/components/atoms/TitleField'
import { Form } from 'antd'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const AccountSettings = () => {
  const t = useTranslations('account')
  return (
    <div className='w-full max-w-[800px] flex flex-col justify-end mt-[70px] pb-[110px]'>

      <div className='mt-[19px]'>
        <TitleField text={t('accountSettings.title')} className='mb-[19px] !text-[22px]' />
        <Form.Item key={'stripe-pay'} name={'stripe-pay'}>
          <InputField
            className='h-[50px] px-[19px] mb-[10px]'
            prefix={<Image src='/stripe.svg' alt='icon' width={70} height={30} className='mr-[5px]' />}
            suffix={<Image src='/Edit_Blue.svg' alt='icon' width={22} height={22} />}
            border='gray'
          />

        </Form.Item>
        <Form.Item key={'paypal-pay'} name={'paypal-pay'}>
          <InputField
            className='h-[50px] px-[19px]'
            prefix={<Image src='/paypal.svg' alt='icon' width={70} height={30} className='mr-[5px]' />}
            suffix={<Image src='/Edit_Blue.svg' alt='icon' width={22} height={22} />}
            border='gray'
          />
        </Form.Item>
        <TitleField text={t('accountSettings.pTitle')} className='mt-[30px] !text-[22px]' />
        <p className='text-gray-5 mt-[12px] mb-[40px]'>
          {t('accountSettings.paragraph')}
          <span className='text-red-10 font-bold'>{t('accountSettings.date')}</span>
        </p>
      </div>
      <div className='flex justify-end mt-[107px]'>
        <ButtonField cType='lightred_white' bSize='md' className='text-white font-normal !py-[10px] w-[155px] h-[40px]' >{t('accountSettings.cancelSubscription')}</ButtonField>
      </div>
    </div>
  )
}

export default AccountSettings