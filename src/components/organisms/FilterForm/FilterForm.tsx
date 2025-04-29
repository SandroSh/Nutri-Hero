import { ButtonField } from '@/components/atoms/ButtonField';
import { CheckboxField } from '@/components/atoms/Checkbox';
import { CheckboxCard } from '@/components/molecules/CheckboxCard';
import { FilterFormCard } from '@/components/molecules/FilterFormCard';
import { Form, FormInstance } from 'antd';
import { useTranslations } from 'next-intl';
import React from 'react'





const FilterForm = ({ form }: { form: FormInstance<any> }) => {
    const t = useTranslations('library.libraryExplorer.recepies.filtering');
    const t2 = useTranslations('library.libraryExplorer');
    return (
        <div className='flex flex-col'>
            <div className='flex justify-start items-start gap-[100px] max-xl:justify-evenly max-xl:gap-[35px] max-xl:px-[15px]'>
                <div className='flex justify-between gap-[100px] max-mdp:flex-col  max-xl:gap-[55px]'>
                    <FilterFormCard label={t('recepieType.title')}>
                        <Form.Item name="recipeType">
                            {
                                [...new Array(3)].map((_, i) => (
                                    <Form.Item key={i} name={`recipeType_${i}`} valuePropName="checked" noStyle>
                                        <CheckboxCard pText={t(`recepieType.options.${i}`)} pClassName={''} className='' />
                                    </Form.Item>
                                ))
                            }
                        </Form.Item>
                    </FilterFormCard>
                    <FilterFormCard label={t('diet.title')}>
                        <Form.Item name="diet">
                            {
                                [...new Array(2)].map((_, i) => (
                                    <Form.Item key={i} name={`diet_${i}`} valuePropName="checked" noStyle>
                                        <CheckboxCard pText={t(`diet.options.${i}`)} pClassName={''} className='' />
                                    </Form.Item>
                                ))
                            }
                        </Form.Item>
                    </FilterFormCard>
                </div>
                <FilterFormCard label={t('excludeAllergens.title')}>
                    <div style={{
                        display: 'grid',
                        gridAutoFlow: 'column',
                        gridTemplateRows: 'repeat(4, auto)',
                        columnGap: '100px'
                    }}
                        className='
                        gap-x-[100px]
                        grid-cols-[repeat(4,auto)]
                        max-xl:grid-flow-row 
                        max-mdp:grid-cols-[repeat(3,auto)] 
                        max-sm:grid-cols-[repeat(2,auto)] 
                        max-xl:gap-x-[10%]
                        max-mdp:gap-x-[50px]
                        max-sm:gap-x-[25px]
                
                        '>
                        {[...new Array(14)].map((_, i) => (
                            <Form.Item key={i} name={`excludeAllergens_${i}`} valuePropName="checked" noStyle>
                                <CheckboxCard pText={t(`excludeAllergens.options.${i}`)} />
                            </Form.Item>
                        ))}
                    </div>
                </FilterFormCard>
            </div>
            <ButtonField className='justify-self-end self-end max-xl:justify-self-center  max-xl:self-center  max-xl:mt-[19px] max-xl:w-[30%]' cType='gray_blue' onClick={() => form.submit()} >{t2('button')}</ButtonField>
        </div>
    )
}

export default FilterForm