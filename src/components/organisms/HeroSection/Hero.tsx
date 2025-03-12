import React from 'react'

export interface HeroProps {
  children?: React.ReactNode
}

const Hero = ({children}:HeroProps) => {
  return (
    <div className='w-full hero-section flex justify-center items-center' >
      <div className='max-w-screen-xl' >
      {children}
      </div>
    </div>
  )
}

export default Hero