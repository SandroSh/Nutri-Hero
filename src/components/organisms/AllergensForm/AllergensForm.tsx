import { ButtonField } from '@/components/atoms/ButtonField'
import { CustomToggleSwitch } from '@/components/atoms/CustomToggleSwitch'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import { TitleField } from '@/components/atoms/TitleField'
import { Form } from 'antd'
import { useTranslations } from 'next-intl'
import React from 'react'





const AllergensForm = () => {
  const t = useTranslations('account.allergens')
  const [form] = Form.useForm()
  return (
    <div className='w-full max-w-[800px] flex flex-col justify-end mt-[110px] pb-[280px]'>
      <TitleField text={t('title')} />
      <p className='text-gray-5 mt-[12px] mb-[25px]'>
        {t('paragraph1')}
        <span className='text-red-10 font-bold'>{t('span')}</span>
        {t('paragraph2')}
      </p>
      {
        [... new Array(14)].map((_, i) =>
          <Form.Item
            key={t(`inputs.${i}.text`)}
            name={t(`inputs.${i}.text`)}
          >

            <div className='w-full flex justify-between items-center px-[19px] py-[15px] border-gray-2 border-[1px] rounded-[5px] mb-[11px]'>
              <p className='text-black font-bold text-base'>{t(`inputs.${i}.text`)}</p>
              <CustomToggleSwitch onText={t('inputs.toggleOnText')} offText={t('inputs.toggleOffText')} />
            </div>
          </Form.Item>
        )
      }
      <div className='flex justify-end mt-[15px]'>
        <ButtonField cType='gray_white' bSize='md' className='mr-[16px]'>{t('inputs.cancel')}</ButtonField>
        <ButtonField cType='red_white' bSize='md'>{t("inputs.save")}</ButtonField>
      </div>
    </div>
  )
}

export default AllergensForm