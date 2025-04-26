'use client'
import { ButtonField } from '@/components/atoms/ButtonField'
import { CustomInputField } from '@/components/atoms/CustomInputField'
import { CustomTextArea } from '@/components/atoms/CustomTextArea'
import { InputField } from '@/components/atoms/InputField'
import { grayInputStyle } from '@/components/atoms/InputField/inputField.style'
import { Form } from 'antd'
import { useTranslations } from 'next-intl'
import React from 'react'

const ContactForm = () => {
  const t = useTranslations('contact')
  return (
    <div className="w-full flex flex-col justify-start">
      <div className='w-full flex gap-[16px] max-sm:flex-col'>
        <Form.Item name="emai;" className='w-full'
          rules={[{ required: true, message: t('form.emailRequired') }]}>
          <CustomInputField placeholder={t('form.email')} type={'email'} />
        </Form.Item>

        <Form.Item name="name" className='w-full'
          rules={[{ required: true, message: t('form.nameRequired') }]}>
          <CustomInputField placeholder={t('form.name')} type={''} />
        </Form.Item>

      </div>

      <Form.Item name="subject" className='w-full my-[19px]'
        rules={[{ required: true, message: t('form.subjectRequierd') }]}>
        <CustomInputField placeholder={t('form.subject')} type={'text'} />
      </Form.Item>


      <Form.Item name="message" className='w-full mb-[30px]'
        rules={[{ required: true, message: t('form.messageRequierd') }]}>
        <CustomTextArea placeholder={t('form.message')}/>
      </Form.Item>


      <ButtonField className='justify-self-end self-end !py-[19px]' bSize='xl' cType='red_white'  >{t('form.button')}</ButtonField>
    </div>
  )
}

export default ContactForm