import { TitleField } from '@/components/atoms/TitleField'
import { SectionContainer } from '@/components/organisms/SectionContainer';
import { useTranslations } from 'next-intl'
import React from 'react'




const LegalTermsTemplate = () => {
    const t = useTranslations('legalTermsConditions');
    return (
        <SectionContainer innerWrapperClassName='flex justify-center pb-[200px]'  >
            <div className='max-w-[580px] mt-[135px] bg-white '>
                <div className='w-full border-y-2 first-letter:first-line:border-gray-2 pt-[25px]'>
                    <TitleField text={t('title')} className='text-5xl' />
                    <div className='w-full flex justify-end mb-[23px] text-gray-5'>
                        18 Jan 2019
                    </div>
                </div>
                {
                    [...new Array(5)].map((_, i) => <p className='mt-[35px]  text-lg'>{t(`pText.${i}`)}</p>)
                }

            </div>

        </SectionContainer>
    )
}

export default LegalTermsTemplate