import React from 'react'

export interface HeroProps {
  children?: React.ReactNode
  innerClassName?:string;
}

const Hero = ({children, innerClassName }:HeroProps) => {
  return (
    <div className='w-full hero-section flex justify-center items-center' >
      <div className={`max-w-screen-xl ${innerClassName}`} >
      {children}
      </div>
    </div>
  )
}

export default Hero