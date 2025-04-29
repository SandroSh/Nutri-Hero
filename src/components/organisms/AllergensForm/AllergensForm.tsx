import { ButtonField } from '@/components/atoms/ButtonField'
import { CustomToggleSwitch } from '@/components/atoms/CustomToggleSwitch'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import { TitleField } from '@/components/atoms/TitleField'
import { AccountToggleCard } from '@/components/molecules/AccountFormCard'
import { Form } from 'antd'
import { useTranslations } from 'next-intl'
import React from 'react'





const AllergensForm = () => {
  const t = useTranslations('account.allergens')
  const [form] = Form.useForm()
  return (
    <div className='w-full max-w-[800px] flex flex-col justify-end mt-[110px] pb-[280px] max-xl:max-w-[55%] max-mdp:max-w-[90%]  max-mdp:!justify-center '>
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
            <AccountToggleCard
              label={t(`inputs.${i}.text`)}
              onText={t('inputs.toggleOnText')}
              offText={t('inputs.toggleOffText')}
              value={form.getFieldValue(`allergen_${i}`)}
              onChange={(checked) => form.setFieldValue(`allergen_${i}`, checked)}
              className='max-h-[50px]'
            />
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