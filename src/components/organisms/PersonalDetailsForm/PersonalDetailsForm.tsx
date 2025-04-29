import React from 'react'
import ComplexBMICalculator from '../ComplexBMICalculator/ComplexBMICalculator'
import { useTranslations } from 'next-intl'
import { TitleField } from '@/components/atoms/TitleField';
import { AccountToggleCard } from '@/components/molecules/AccountFormCard';
import { Form } from 'antd';
import { CustomInputField } from '@/components/atoms/CustomInputField';
import { ButtonField } from '@/components/atoms/ButtonField';






const PersonalDetailsForm = () => {
  const t = useTranslations('account');

  const [form] = Form.useForm()

  return (
    <div className='w-full max-w-[800px] flex flex-col justify-end mt-[70px] pb-[270px] max-[1224px]:items-end max-[1224px]:pr-[50px]'>
      <div className='flex flex-col justify-start'>
        <TitleField text={t('bodyMeasurements.title')} className='mb-[19px] !text-[1.4rem] ' />
        <ComplexBMICalculator />
      </div>
      <AccountToggleCard
        label={t('bodyMeasurements.unitOfMeasure')}
        onText={t('bodyMeasurements.metric')}
        offText={t('bodyMeasurements.imperial')}
        className='max-h-[50px] mt-[40px]'
        toggleSm={true}
      />

      <div className='mt-[50px]'>
        <TitleField text={t('personalDetails.title')} className='mb-[19px] !text-[1.4rem]' />
        <Form.Item
          key={t(`personalDetails.username`)}
          name={t(`personalDetails.username`)}
        >
          <CustomInputField placeholder={t('personalDetails.username')} type={'text'} />
        </Form.Item>

        <Form.Item
          key={t(`personalDetails.firstName`)}
          name={t(`personalDetails.firstName`)}
        >
          <CustomInputField placeholder={t('personalDetails.firstName')} type={'text'} className='my-[19px]' />
        </Form.Item>

        <Form.Item
          key={t(`personalDetails.lastName`)}
          name={t(`personalDetails.lastName`)}
        >
          <CustomInputField placeholder={t('personalDetails.lastName')} type={'text'} />
        </Form.Item>

        <div className='flex mt-[19px] mb-[50px] gap-[16px]'>
          <Form.Item
            key={t(`personalDetails.gender`)}
            name={t(`personalDetails.gender`)}
            className='w-full'
          >
            <CustomInputField placeholder={t('personalDetails.gender')} type={'text'} />
          </Form.Item>

          <Form.Item
            key={t(`personalDetails.dateOfBirth`)}
            name={t(`personalDetails.dateOfBirth`)}
            className='w-full'
          >
            <CustomInputField placeholder={t('personalDetails.dateOfBirth')} type={'text'} />
          </Form.Item>
        </div>
      </div>

      <div>
        <TitleField text={t('address.title')} className='mb-[19px] !text-[1.4rem]' />
        <Form.Item
          key={t(`address.address`)}
          name={t(`address.address`)}
        >
          <CustomInputField placeholder={t('address.address')} type={'text'} />
        </Form.Item>
        <div className='flex mt-[19px] mb-[50px] gap-[16px]'>
          <Form.Item
            key={t(`address.city`)}
            name={t(`address.city`)}
            className='w-full'
          >
            <CustomInputField placeholder={t('address.city')} type={'text'} />
          </Form.Item>

          <Form.Item
            key={t(`address.postCode`)}
            name={t(`address.postCode`)}
            className='w-full'
          >
            <CustomInputField placeholder={t('address.postCode')} type={'text'} />
          </Form.Item>
        </div>
      </div>

      <div>
        <TitleField text={t('contactDetails.title')} className='mb-[19px] !text-[1.4rem]' />
        <Form.Item
          key={t(`contactDetails.mobileNumber`)}
          name={t(`contactDetails.mobileNumber`)}
        >
          <CustomInputField placeholder={t('contactDetails.mobileNumber')} type={'text'} />
        </Form.Item>
        <Form.Item
          key={t(`contactDetails.emailAddress`)}
          name={t(`contactDetails.emailAddress`)}
          className='w-full my-[19px]'
        >
          <CustomInputField placeholder={t('contactDetails.emailAddress')} type={'text'} />
        </Form.Item>
      </div>
      <div className='flex justify-end mt-[15px]'>
        <ButtonField cType='gray_white' bSize='md' className='mr-[16px]'>{t('buttons.cancel')}</ButtonField>
        <ButtonField cType='red_white' bSize='md'>{t("buttons.save")}</ButtonField>
      </div>
    </div>
  )
}

export default PersonalDetailsForm