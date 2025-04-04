import Image from 'next/image'
import React from 'react'
import { ImageFieldProps } from './ImageField.config'

const ImageField = (
    { src, layout='responsive', width=1200, height=800, alt, className, style }: ImageFieldProps ) => {
    return (
        <Image src={src} layout={layout} width={width} height={height} alt={alt} className={className}  style={style} />
    )
}

export default ImageField