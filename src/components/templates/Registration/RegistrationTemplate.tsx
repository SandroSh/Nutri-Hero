import RegistrationCard from '@/components/molecules/RegistrationCard/RegistrationCard'
import Hero from '@/components/organisms/HeroSection/Hero'
import { SectionContainer } from '@/components/organisms/SectionContainer'
import React from 'react'


const RegistrationTemplate = () => {
  return (
    <div className='mt-[96px] max-  '>
      <Hero innerClassName='!w-full mt-[90px] max-xl:px-[19px] max-mdp:pb-[70px]' outerClassName='hero-section max-mdp:h-max max-mdp:mb-[50px]' >
        <RegistrationCard/>
      </Hero>
    </div>
  )
}

export default RegistrationTemplate