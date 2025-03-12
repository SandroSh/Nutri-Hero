import Image from 'next/image'
import React from 'react'
export interface ImageFieldProps {
    src: string
    layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive'
    width?: number
    className?: string
    height?: number
    alt: string
}
const ImageField = (
    { src, layout='responsive', width=1200, height=800, alt, className }: ImageFieldProps ) => {
    return (
        <Image src={src} layout={layout} width={width} height={height} alt={alt} className={className} />
    )
}

export default ImageField