import React from 'react'

export interface HeroProps {
  children?: React.ReactNode
  innerClassName?: string;
  outerClassName?: string;
  backgroundImg?: string;
  imgFilter?:string;
}

const Hero = ({ children, innerClassName, outerClassName, backgroundImg, imgFilter }: HeroProps) => {
  return (
    <div className={`w-full flex justify-center items-start ${outerClassName} ${backgroundImg ? 'hero-section-general' : ''}`} style={backgroundImg ? { backgroundImage: `url('${backgroundImg}')`} : undefined} >

      {imgFilter && <div className={`w-full h-full absolute  ${imgFilter}`}></div>}

      <div className={`max-w-screen-xl z-10 ${innerClassName}`} >
        {children}
      </div>
    </div>
  )
}

export default Hero