'use client'
import ImageField from '@/components/atoms/ImageField/ImageField'
import { Navlink } from '@/components/atoms/NavLink'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import Intro from '@/components/molecules/IntroCard/Intro'
import { NavLinks } from '@/components/molecules/NavLinks'
import { Tabs } from '@/components/molecules/Tabs'
import Hero from '@/components/organisms/HeroSection/Hero'
import { InfoDisplay } from '@/components/organisms/InfoDisplay'
import { SectionContainer } from '@/components/organisms/SectionContainer'
import { tabsData } from '@/constants/dummyData'
import tabs from 'antd/es/tabs'
import { useTranslations } from 'next-intl'


const LandingPageTemplate = () => {

  const gymDisplay = useTranslations('Exercise Display');
  console.log(gymDisplay)
  return (
    <div className='mt-[96px]'>

      <Hero>
        <Intro textAddress={'LandingHero'} />
      </Hero>

      <SectionContainer className='bg-blue-1 h-screen'>
        <InfoDisplay titleText={gymDisplay('title')} titleClassName='mt-[27px] mb-[25px]' className='bg-white rounded-[5px] flex-col items-center justify-center'>
          <Tabs tabs={tabsData} translate={gymDisplay}  centered={true} />
        </InfoDisplay>

      </SectionContainer>
    </div>
  )
}

export default LandingPageTemplate