import React from 'react'

export interface HeroProps {
  children?: React.ReactNode
  innerClassName?: string;
  outerClassName?: string;
  backgroundImg?: string;
}

const Hero = ({ children, innerClassName, outerClassName, backgroundImg }: HeroProps) => {
  return (
    <div className={`w-full  flex justify-center items-start ${outerClassName} ${backgroundImg ? 'hero-section-general' : ''}`} style={backgroundImg ? { backgroundImage: `url('${backgroundImg}')`} : undefined} >
      <div className={`max-w-screen-xl ${innerClassName}`} >
        {children}
      </div>
    </div>
  )
}

export default Hero