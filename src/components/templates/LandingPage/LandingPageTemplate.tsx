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
  const tabs = [
    { key: "0" },
    { key: "1" },
    { key: "2" }
  ];
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
            translate={gymDisplay}
            centered={true}
            className={'pb-[40px]'}
            labels={tabsData.map((item, i) => <Navlink className="mx-[29px] pt-[8px] pb-[8px]" hoverAnimate={false} key={i} >{gymDisplay(item.label)}</Navlink>)}
            children={tabsData.map((item, i) => <ExerciseCard pTitle={gymDisplay(item.pTitle)} pText={gymDisplay(item.pText)} imageUrl={item.imageUrl} key={i} />)}
          />

        </InfoDisplay>
        <InfoDisplay className='flex-col mt-[90px] '>
          <Title text={gymDisplay('title2')} className={`mt-[27px] mb-[25px] text-white`} />

          <Tabs 
          labels={tabsData.map((item, i) =>
            <Navlink
              className="mx-[29px] pt-[8px] pb-[8px]"
              hoverAnimate={false}
              key={i}
            >
              {gymDisplay(item.label)}
            </Navlink>)}
            children={tabsData.map((item, i) => <ExerciseCard pTitle={gymDisplay(item.pTitle)} pText={gymDisplay(item.pText)} imageUrl={item.imageUrl} key={i} className='!flex-row-reverse justify-between mt-[-100px] mb-[50px]' />)}
            className='second-tabs pb-[40px]'
            translate={gymDisplay}
          />
        </InfoDisplay>
      </SectionContainer>
      <SectionContainer innerWrapperClassName='max-w-[1700px] w-full'>
        <CustomCarousel slidesToShow={1}>
          {
            carouselData.map((item, i) => <CarouselCard data={item} key={i} />)
          }
        </CustomCarousel>
        <CustomCarousel slidesToShow={1}>
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