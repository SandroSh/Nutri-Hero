'use client'
import { Signin } from '@/components/molecules/SignInCard'
import Hero from '@/components/organisms/HeroSection/Hero'
import { ResetCard } from '@/components/organisms/Reset'
import React, { useState } from 'react'




const SignInPageTemplate = () => {
  const [isReseting, setIsReseting] = useState<boolean>(false)
  return (
    <div className='mt-[96px]' >
      <Hero outerClassName='!items-start hero-section'>
        {
          isReseting ?
            <ResetCard resetFunction={setIsReseting} />
            :
            <Signin resetFunction={setIsReseting} />
        }

      </Hero>
    </div>

  )
}

export default SignInPageTemplate