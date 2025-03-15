import { ImageField } from '@/components/atoms/ImageField'
import React from 'react'





const DownloadCard = ({className}:{className?:string}) => {
  return (
    <div className={`flex justify-center items-center gap-[16px] ${className}`} >
        <ImageField src='/download-on-the-app-store-apple.svg'
            alt='Download App Store' />
        <ImageField src='/google-play-badge.svg'
            alt='Download Google Play' />
    </div>
  )
}

export default DownloadCard