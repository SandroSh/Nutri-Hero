import { TitleField } from '@/components/atoms/TitleField';
import { CustomCollapse } from '@/components/molecules/CustomCollapse';
import { ContactForm } from '@/components/organisms/ContactForm';
import Hero from '@/components/organisms/HeroSection/Hero';
import { SectionContainer } from '@/components/organisms/SectionContainer';
import { useTranslations } from 'next-intl';
import React from 'react'





const ContactTemplate = () => {
  const t = useTranslations('contact');
  return (
    <div className='mt-[95px]'>
      <Hero backgroundImg='/Hero Girl_2.png' outerClassName='max-h-[360px] !bg-top items-center ' imgFilter='bg-black/30 max-h-[360px]' >
        <TitleField text={t('title').toUpperCase()} className='text-white text-6xl max-sm:text-2xl' />
      </Hero>

      <SectionContainer className='mt-[40px]' innerWrapperClassName='flex justify-center px-xl'>
        <div className='w-full max-w-[700px]'>
          <TitleField text={t('faq.title').toUpperCase()} className='text-4xl font-bold mb-[19px] max-[500px]:text-2xl' />
          <CustomCollapse />
          <TitleField text={t('form.title')} className='text-4xl font-bold mt-[40px] max-[500px]:text-2xl' />
          <p className='text-gray-5 mb-[30px] max-[500px]:text-[10px] '>{t('form.paragraph')}</p>
          <ContactForm/>
        </div>
      </SectionContainer>
    </div >

  )
}

export default ContactTemplate