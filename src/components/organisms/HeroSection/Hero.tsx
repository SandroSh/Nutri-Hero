import React from 'react'

export interface HeroProps {
  children?: React.ReactNode
  innerClassName?:string;
  outerClassName?:string;
}

const Hero = ({children, innerClassName, outerClassName }:HeroProps) => {
  return (
    <div className={`w-full hero-section flex justify-center items-start ${outerClassName}`} >
      <div className={`max-w-screen-xl ${innerClassName}`} >
      {children}
      </div>
    </div>
  )
}

export default Hero