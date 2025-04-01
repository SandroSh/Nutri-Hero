'use client'
import { Navlink } from '@/components/atoms/NavLink'
import Title from '@/components/atoms/TitleField/title.component'
import { CarouselCard } from '@/components/molecules/CarouselCard'
import { ExerciseCard } from '@/components/molecules/ExerciseCard'
import Intro from '@/components/molecules/IntroCard/Intro'
import { JoinCard } from '@/components/molecules/JoinCard'

import { Tabs } from '@/components/molecules/Tabs'
import CustomCarousel from '@/components/organisms/Carousel/CustomCarousel'
import { DownloadAppSection } from '@/components/organisms/DowloadAppSection'
import Hero from '@/components/organisms/HeroSection/Hero'
import { InfoDisplay } from '@/components/organisms/InfoDisplay'
import { SectionContainer } from '@/components/organisms/SectionContainer'
import { carouselData, carouselData2, tabsData } from '@/constants/dummyData'
import { useTranslations } from 'next-intl'


const LandingPageTemplate = () => {

  const gymDisplay = useTranslations('Exercise Display');
  return (
    <div className='mt-[96px]'>

      <Hero outerClassName='items-center hero-section'>
        <Intro textAddress={'LandingHero'} />
      </Hero>

      <SectionContainer className='bg-blue-1' innerWrapperClassName='mt-[-70px] '>
        <InfoDisplay className='bg-white rounded-[5px] flex-col items-center justify-center  '>
          <Title text={gymDisplay('title')} className={`mt-[27px] mb-[25px]`} />
          <Tabs
            tabs={tabsData}
            translate={gymDisplay}
            centered={true}
            className={'pb-[40px]'}
          />

        </InfoDisplay>
        <InfoDisplay className='flex-col mt-[90px] '>
          <Title text={gymDisplay('title2')} className={`mt-[27px] mb-[25px] text-white`} />
          <Tabs
            tabs={tabsData}
            translate={gymDisplay}
            className={'second-tabs pb-[40px] '}
            CardClassName='!flex-row-reverse justify-between mt-[-100px] mb-[50px]' />
        </InfoDisplay>
      </SectionContainer>

      <SectionContainer innerWrapperClassName='max-w-[1700px] w-full'>
        <CustomCarousel>
          {
            carouselData.map((item, i) => <CarouselCard data={item} key={i} />)
          }
        </CustomCarousel>
        <CustomCarousel>
          {
            carouselData.map((item, i) => <CarouselCard data={item} key={i} outerClassName='flex-row-reverse' />)
          }
        </CustomCarousel>
      </SectionContainer>

      <SectionContainer  >
        <DownloadAppSection />
      </SectionContainer>

      <SectionContainer className='bg-blue-1' >
        <JoinCard />
      </SectionContainer>


    </div>
  )
}

export default LandingPageTemplate