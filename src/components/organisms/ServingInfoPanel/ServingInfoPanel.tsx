import { ButtonField } from '@/components/atoms/ButtonField'
import { InputField } from '@/components/atoms/InputField'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import { useTranslations } from 'next-intl'
import React from 'react'





const ServingInfoPanel = ({ address }: { address: string }) => {
    const t = useTranslations(address)
    const [serving, setServing] = React.useState<number>(1)
    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setServing(Number(e.target.value))
    }
    return (
        <div className='w-full flex flex-col items-start justify-start mt-[50px] px-[30px] py-[32px] rounded-[5px] border-gray-3 border-[1px] '>
            <div className='flex justify-center items-baseline mb-[25px]'>
                <p className='text-[19px] text-blue-1 font-bold'>{t('title')}</p>
                <InputField iSize='extra_sm' value={serving} onChange={(e) => handleNumberChange(e)} className='rounded-[0] font-bold mx-[10px]' />
                <p className='text-[19px] text-blue-1 mt-[10px] font-bold'>{t('servings')}</p>
            </div>

            <div className= ' w-full flex flex-col'>
                {
                    [...new Array(5)].map((_, i) =>
                        <div key={i} className='w-full flex justify-between mb-[20px]'>
                            <p>{t(`content.${i}.title`)}</p>
                            <div className='flex items-center'>
                                <p>{(parseInt(t(`content.${i}.value`)) * serving).toString()} </p>
                                {
                                    t(`content.${i}.unit`).length < 10 && <p className='ml-[5px]'>{t(`content.${i}.unit`)}</p>
                                }

                            </div>
                        </div>
                    )
                }
            </div>

            <div className='flex flex-col mt-[60px]'>
                <ParagraphField title={t('allergens')} paragraph={t('allergensContent')} />
            </div>
            <ButtonField bSize='md' cType='red_white' mt='two_xl' className='font-normal !px-[25px] !py-[25px]'>{t('buyButton')}</ButtonField>
        </div>
    )
}

export default ServingInfoPanel