import React, { useState } from 'react'
import ComplexBMICalculator from '../ComplexBMICalculator/ComplexBMICalculator'
import { useTranslations } from 'next-intl'
import { TitleField } from '@/components/atoms/TitleField';
import { AccountToggleCard } from '@/components/molecules/AccountFormCard';
import { Dropdown, Form } from 'antd';
import { CustomInputField } from '@/components/atoms/CustomInputField';
import { ButtonField } from '@/components/atoms/ButtonField';
import CustomDropDown from '@/components/atoms/CustomDropDown/CustomDropDown';
import { grayInputStyle } from '@/components/atoms/InputField/inputField.style';
import { PersonalInfoInputCardProps } from '@/components/molecules/PersonalInfoInputCard/PersonalInfoInputCard.config';
import { CustomDatePicker } from '@/components/atoms/DatePicker';
import { inputClass } from '@/components/atoms/CustomInputField/customInput.style';
import Image from 'next/image';






const PersonalDetailsForm = () => {
  const t = useTranslations('account');
  const t2 = useTranslations('myPlanPage');
  const [form] = Form.useForm()
  const [selectedGender, setSelectedGender] = useState<string>(t2('signup.card4.gender.0'));
  const [dob, setDob] = useState<string>('');
  const genderValues: PersonalInfoInputCardProps[] = [
    { key: '1', label: t2('signup.card4.gender.1') },
    { key: '2', label: t2('signup.card4.gender.2') },
  ];

  const handleInputChange = (fieldName: string, value: any) => {
    console.log(`Field: ${fieldName}, Value:`, value);

    switch (fieldName) {
      case 'gender':
        const selectedItem = genderValues.find((item) => item.key === value);
        if (selectedItem) {
          setSelectedGender(selectedItem.label);
        }
        break;
      case 'birthDate':
        console.log('Date:', value ? value.format('YYYY-MM-DD') : '');
        setDob(value ? value.format('YYYY-MM-DD') : '');
        break;
      default:
        break;
    }

    form.setFieldsValue({ [fieldName]: value });
  };

  return (
    <div className='w-full max-w-[800px] flex flex-col justify-end mt-[70px] pb-[270px] max-xl:!w-[60%]  max-lg:!w-[53%]  max-mdp:w-full'>

      <div className='flex flex-col'>
        <div className='flex flex-col justify-start '>
          <TitleField text={t('bodyMeasurements.title')} className='mb-[19px] !text-[1.4rem] ' />
          <ComplexBMICalculator />
        </div>
        <AccountToggleCard
          label={t('bodyMeasurements.unitOfMeasure')}
          onText={t('bodyMeasurements.metric')}
          offText={t('bodyMeasurements.imperial')}
          className='max-h-[50px] mt-[40px] '
          toggleSm={true}
        />
      </div>

      <div className='mt-[50px] '>
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

        <div className="w-full flex justify-between gap-[10px] mt-[10px]   mb-[19px]">
          <Form.Item
            name="gender"
            rules={[{ required: true, message: t2('signup.card4.genderRequired') }]}
            className="w-[100%]"
          >
            <Dropdown
              menu={{
                items: genderValues,
                onClick: (info) => handleInputChange('gender', info.key),

              }}
              trigger={['click']}
              className={` ${inputClass} pt-5 text-gray-5 text-xl font-normal`}
            >
              <div className='flex justify-between items-center'>
                {selectedGender}
                <Image src={'/Chevron_filter_down_2.svg'} alt={'dropdown icon'} width={25} height={25} />
              </div>
            </Dropdown>
          </Form.Item>

          <Form.Item
            name="birthDate"
            rules={[{ required: false, message: t2('signup.card4.dobRequired') }]}
            className="w-[100%] custom-picker"
          >
            <CustomDatePicker
              className={`${inputClass}  text-gray-7 custom-date-picker2  `}
              onChange={(date) => handleInputChange('birthDate', date)}
              suffixIcon={<Image src={'/Calander.svg'} alt={'dropdown icon'} width={25} height={25} />}
            />
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