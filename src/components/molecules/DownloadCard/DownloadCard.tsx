import { ImageField } from '@/components/atoms/ImageField'
import React from 'react'





const DownloadCard = ({className}:{className?:string}) => {
  return (
    <div className={`flex flex-wrap justify-start items-center gap-[16px] ${className} max-mdp:justify-center  `} >
        <ImageField src='/download-on-the-app-store-apple.svg'
            alt='Download App Store' className='cursor-pointer hover:scale-105  duration-300 w-[150px] max-mdp:w-[50%]  ' />
        <ImageField src='/google-play-badge.svg'
            alt='Download Google Play' className='cursor-pointer hover:scale-105 duration-300 w-[150px] max-mdp:w-[50%] '  />
    </div>
  )
}

export default DownloadCard