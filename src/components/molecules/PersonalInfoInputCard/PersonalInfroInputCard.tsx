'use client';
import React, { useState } from 'react';
import { InputField } from '@/components/atoms/InputField';
import { Dropdown, Space, Form } from 'antd';
import { CustomDatePicker } from '@/components/atoms/DatePicker';
import { useTranslations } from 'next-intl';
import { PersonalInfoInputCardProps } from './PersonalInfoInputCard.config';
import { grayInputStyle } from '@/components/atoms/InputField/inputField.style';
import Image from 'next/image';


const PersonalInfroInputCard = () => {
  const t = useTranslations('myPlanPage');
  const form = Form.useFormInstance();

  const [selectedGender, setSelectedGender] = useState<string>(t('signup.card4.gender.0'));
  const [dob, setDob] = useState<string>('');

  // Gender options
  const genderValues: PersonalInfoInputCardProps[] = [
    { key: '0', label: t('signup.card4.gender.0') },
    { key: '1', label: t('signup.card4.gender.1') },
    { key: '2', label: t('signup.card4.gender.2') },
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
    <div className="max-w-[410px] flex flex-col justify-start max-mdp:max-w-none">
      {/* Username Field */}
      <Form.Item
        name="username"
        rules={[{ required: true, message: t('signup.card4.usernameRequired') }]}
      >
        <InputField
          placeholder={t('signup.card4.username')}
          className={`w-full ${grayInputStyle}`}
        />
      </Form.Item>

      {/* First Name and Last Name Fields */}
      <div className="w-full flex justify-between gap-[10px] mt-[10px]">
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: t('signup.card4.firstnameRequired') }]}
          className="w-[50%]"
        >
          <InputField
            placeholder={t('signup.card4.firstname')}
            className={grayInputStyle}
          />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[{ required: true, message: t('signup.card4.lastnameRequired') }]}
          className="w-[50%]"
        >
          <InputField
            placeholder={t('signup.card4.lastname')}
            className={grayInputStyle}
          />
        </Form.Item>
      </div>

      {/* Gender Dropdown and Date Picker */}
      <div className="w-full flex justify-between gap-[10px] mt-[10px]">
        <Form.Item
          name="gender"
          rules={[{ required: true, message: t('signup.card4.genderRequired') }]}
          className="w-[100%]"
        >
          <Dropdown
            menu={{
              items: genderValues,
              onClick: (info) => handleInputChange('gender', info.key),
            }}
            trigger={['click']}
            className={` ${grayInputStyle} !w-full`}
          >
            <div>
              {selectedGender}
            </div>
          </Dropdown>
        </Form.Item>
        <Form.Item
          name="birthDate"
          rules={[{ required: false, message: t('signup.card4.dobRequired') }]}
          className="w-[100%]"
        >
          <CustomDatePicker
            className="w-full pr-[15px] font-bold"
            onChange={(date) => handleInputChange('birthDate', date)}
            suffixIcon = {<Image src={'/Calander.svg'} alt={'dropdown icon'} width={25} height={25} />}
          />
        </Form.Item>
      </div>
    </div>
  );
};

export default PersonalInfroInputCard;