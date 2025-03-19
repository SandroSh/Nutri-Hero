import RegistrationCard from '@/components/molecules/RegistrationCard/RegistrationCard'
import Hero from '@/components/organisms/HeroSection/Hero'
import { SectionContainer } from '@/components/organisms/SectionContainer'
import React from 'react'


const RegistrationTemplate = () => {
  return (
    <div className='mt-[96px]'>
      <Hero innerClassName='!w-full mt-[90px] '>
        <RegistrationCard/>
      </Hero>
    </div>
  )
}

export default RegistrationTemplate