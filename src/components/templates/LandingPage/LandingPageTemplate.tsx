'use client'
import { ButtonField } from '@/components/atoms/ButtonField'
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
  const t = useTranslations('');
  const gymDisplay = useTranslations('Exercise Display');
  return (
    <div className='mt-[96px]'>

      <Hero outerClassName='items-center hero-section max-mdp:h-[60vh]'>
        <Intro textAddress={'LandingHero'} />
      </Hero>

      <SectionContainer className='bg-blue-1' innerWrapperClassName='mt-[-70px] max-xl:px-[15px] max-xl:px-[15px] max-xl:mt-[-50px]'>
        <InfoDisplay className='bg-white rounded-[5px] flex-col items-center justify-center  '>
          <Title text={gymDisplay('title')} className={`mt-[27px] mb-[25px]`} />
          <Tabs
            centered={true}
            className={'pb-[40px] max-xl:px-[10px]'}
            labels={tabsData.map((item, i) => <Navlink className="mx-[29px] pt-[8px] pb-[8px] " hoverAnimate={false} key={i} >{gymDisplay(item.label)}</Navlink>)}
            children={tabsData.map((item, i) => <ExerciseCard pTitle={gymDisplay(item.pTitle)} pText={gymDisplay(item.pText)} imageUrl={item.imageUrl} key={i} className='max-mdp:flex-col-reverse' />)}
          />

        </InfoDisplay>
        <InfoDisplay className='flex-col mt-[90px]'>
          <Title text={gymDisplay('title2')} className={`mt-[27px] mb-[25px] text-white max-mdp:text-center`} />

          <Tabs
            labels={tabsData.map((item, i) =>
              <Navlink
                className="mx-[29px] pt-[8px] pb-[8px]"
                hoverAnimate={false}
                key={i}
              >
                {gymDisplay(item.label)}
              </Navlink>)}
            children={tabsData.map((item, i) => <ExerciseCard pTitle={gymDisplay(item.pTitle)} pText={gymDisplay(item.pText)} imageUrl={item.imageUrl} key={i} className='!flex-row-reverse justify-between mt-[-100px] mb-[50px] max-mdp:flex-col-reverse max-mdp:mt-[10px]' />)}
            className='second-tabs pb-[40px]'
          />
        </InfoDisplay>
      </SectionContainer>
      <SectionContainer innerWrapperClassName='max-w-[1700px] w-full'>
        <CustomCarousel slidesToShow={1} className=''>
          {
            carouselData.map((item, i) => <CarouselCard data={item} key={i} outerClassName='max-mdp:flex-col-reverse' />)
          }
        </CustomCarousel>
        <CustomCarousel slidesToShow={1}>
          {
            carouselData.map((item, i) => <CarouselCard data={item} key={i} outerClassName='flex-row-reverse max-mdp:flex-col-reverse' />)
          }
        </CustomCarousel>
      </SectionContainer>

      <SectionContainer  >
        <DownloadAppSection />
      </SectionContainer>

      <SectionContainer className='bg-blue-1 px-[50px]' >
        <JoinCard>
          <Title text={t('joinCard.title')} className='text-[30px] max-mdp:text-[19px]  max-mdp:text-center' />
          <ButtonField className='bg-red-10 py-[25px] px-[37px] text-white'>{t('joinCard.buttonText')}</ButtonField>
        </JoinCard>
      </SectionContainer>


    </div>
  )
}

export default LandingPageTemplate