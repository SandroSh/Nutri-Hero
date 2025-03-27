'use client';
import React, { useState } from 'react';
import { InputField } from '@/components/atoms/InputField';
import { Dropdown, Space, Form } from 'antd';
import { CustomDatePicker } from '@/components/atoms/DatePicker';
import { useTranslations } from 'next-intl';
import { PersonalInfoInputCardProps } from './PersonalInfoInputCard.config';
import { grayInputStyle } from '@/components/atoms/InputField/inputField.style';


const PersonalInfroInputCard = () => {
  const t = useTranslations('myPlanPage');
  const form = Form.useFormInstance();

  const [selectedGender, setSelectedGender] = useState<string>(t('card4.gender.0')); 
  const [dob, setDob] = useState<string>('');

  // Gender options
  const genderValues: PersonalInfoInputCardProps[] = [
    { key: '1', label: t('card4.gender.1') }, 
    { key: '2', label: t('card4.gender.2') },
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
    <div className="max-w-[410px] flex flex-col justify-start">
      {/* Username Field */}
      <Form.Item
        name="username"
        rules={[{ required: true, message: t('card4.usernameRequired') }]}
      >
        <InputField
          placeholder={t('card4.username')}
          className={`w-full ${grayInputStyle}`}
        />
      </Form.Item>

      {/* First Name and Last Name Fields */}
      <div className="w-full flex justify-between gap-[10px] mt-[10px]">
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: t('card4.firstnameRequired') }]}
          className="w-[50%]"
        >
          <InputField
            placeholder={t('card4.firstname')}
            className={grayInputStyle}
          />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[{ required: true, message: t('card4.lastnameRequired') }]}
          className="w-[50%]"
        >
          <InputField
            placeholder={t('card4.lastname')}
            className={grayInputStyle}
          />
        </Form.Item>
      </div>

      {/* Gender Dropdown and Date Picker */}
      <div className="w-full flex justify-between gap-[10px] mt-[10px]">
        <Form.Item
          name="gender"
          rules={[{ required: true, message: t('card4.genderRequired') }]}
          className="w-[50%]"
        >
          <Dropdown
            menu={{
              items: genderValues,
              onClick: (info) => handleInputChange('gender', info.key), 
            }}
            trigger={['click']}
            className={`font-bold ${grayInputStyle}`}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>{selectedGender}</Space>
            </a>
          </Dropdown>
        </Form.Item>
        <Form.Item
          name="birthDate"
          rules={[{ required: false, message: t('card4.dobRequired') }]}
          className="w-[50%]"
        >
          <CustomDatePicker
            className="w-full pr-[15px] font-bold"
            onChange={(date) => handleInputChange('birthDate', date)} 
          />
        </Form.Item>
      </div>
    </div>
  );
};

export default PersonalInfroInputCard;