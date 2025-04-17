import { CheckboxField } from '@/components/atoms/Checkbox';
import { CheckboxCard } from '@/components/molecules/CheckboxCard';
import { Form, FormInstance } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react'





const FilterForm = ({ form }: { form: FormInstance<any> }) => {
    const t = useTranslations('library.libraryExplorer.recepies.filtering');
    return (
        <div className='flex flex-col'>
            <Form.Item name="recipeType" label={t('recepieType.title')} className='!flex !flex-col'>
            {
                [...new Array(3)].map((_, i) => <CheckboxCard key={i} pText={t(`recepieType.options.${i}`)} pClassName={''} className='' />)
            }
            </Form.Item>

        </div>
    )
}

export default FilterForm