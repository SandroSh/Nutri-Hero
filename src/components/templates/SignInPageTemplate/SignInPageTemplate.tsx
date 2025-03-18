import { Signin } from '@/components/molecules/SignInCard'
import Hero from '@/components/organisms/HeroSection/Hero'
import React from 'react'




const SignInPageTemplate = () => {
  return (
    <div className='mt-[96px]' >
      <Hero outerClassName='!items-start'>
        <Signin/>
      </Hero>
    </div>

  )
}

export default SignInPageTemplate