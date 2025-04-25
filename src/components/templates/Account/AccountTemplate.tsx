import { TitleField } from '@/components/atoms/TitleField'
import Hero from '@/components/organisms/HeroSection/Hero'
import React from 'react'



const AccountTemplate = () => {
  
  return (
    <div>
      <Hero backgroundImg='/Hero Girl_2.png' outerClassName='max-h-[360px] !bg-top items-center ' imgFilter='bg-black/30 max-h-[360px]' >
        <TitleField text={''} className='text-white text-7xl' />
      </Hero>
    </div>
  )
}

export default AccountTemplate