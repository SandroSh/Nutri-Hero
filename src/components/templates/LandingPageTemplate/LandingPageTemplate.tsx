'use client'
import ImageField from '@/components/atoms/ImageField/ImageField'
import { Navlink } from '@/components/atoms/NavLink'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import Title from '@/components/atoms/TitleField/title.component'
import Intro from '@/components/molecules/IntroCard/Intro'
import { JoinCard } from '@/components/molecules/JoinCard'
import { NavLinks } from '@/components/molecules/NavLinks'
import { Tabs } from '@/components/molecules/Tabs'
import { DownloadAppSection } from '@/components/organisms/DowloadAppSection'
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

      <SectionContainer className='bg-blue-1 ' innerWrapperClassName='mt-[-70px]'>
        <InfoDisplay className='bg-white rounded-[5px] flex-col items-center justify-center '>
          <Title text={gymDisplay('title')} className={`mt-[27px] mb-[25px]`} />
          <Tabs tabs={tabsData} translate={gymDisplay} centered={true} className={''} />
        </InfoDisplay>

        <InfoDisplay className='flex-col mt-[90px] '>
          <Title text={gymDisplay('title2')} className={`mt-[27px] mb-[25px] text-white`} />
          <Tabs tabs={tabsData} translate={gymDisplay} centered={true} className={'second-tabs'} CardClassName='flex-row-reverse' />
        </InfoDisplay>
      </SectionContainer>

      <SectionContainer >
        <DownloadAppSection />
      </SectionContainer>

      <SectionContainer className='bg-blue-1' >
        <JoinCard/>
      </SectionContainer>

    </div>
  )
}

export default LandingPageTemplate