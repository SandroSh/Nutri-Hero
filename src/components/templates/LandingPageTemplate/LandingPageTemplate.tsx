import ImageField from '@/components/atoms/ImageField/ImageField'
import { Navlink } from '@/components/atoms/NavLink'
import { ParagraphField } from '@/components/atoms/ParagraphFIeld'
import Intro from '@/components/molecules/IntroCard/Intro'
import { NavLinks } from '@/components/molecules/NavLinks'
import Hero from '@/components/organisms/HeroSection/Hero'
import { InfoDisplay } from '@/components/organisms/InfoDisplay'
import { SectionContainer } from '@/components/organisms/SectionContainer'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const LandingPageTemplate = () => {
  const gymDisplay = useTranslations('Exercise Display')
  return (
    <div className='mt-[96px]'>

      <Hero>
        <Intro textAddress={'LandingHero'} />
      </Hero>

      <SectionContainer className='bg-blue-1 h-screen'>
        <InfoDisplay titleText={gymDisplay('title')} titleClassName='mt-[27px] mb-[25px]' className='bg-white rounded-[5px] flex-col items-center justify-center'>
          <NavLinks className="gap-[40px]">
            <Navlink isActive={true} className='px-[25px]'>{gymDisplay('link1')}</Navlink>
            <Navlink isActive={false} className='px-[25px]'>{gymDisplay('link2')}</Navlink>
            <Navlink isActive={false} className='px-[25px]'>{gymDisplay('link3')}</Navlink>
          </NavLinks>
          <div className='flex justify-center gap-[100px] items-center mt-[30px] pb-[40px] w-full' >
            <ImageField src='/Mail_Image.png'
              alt='Exercise Image'
              className='w-[410px] h-[270px] rounded-[5px]' />
            <ParagraphField title={gymDisplay('pTitle')} paragraph={gymDisplay('paragraph')}
              className='max-w-[340px]' />
          </div>
        </InfoDisplay>

      </SectionContainer>
    </div>
  )
}

export default LandingPageTemplate