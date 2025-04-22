import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const EditField = ({className, onClickEdit}:{className?:string, onClickEdit?:() => void}) => {
    const t = useTranslations('progress.goalCard');
    return (
        <div className={`flex justify-center items-center gap-[5px] ${className}`} onClick={onClickEdit}>
            <p className='text-gray-7'>{t('edit')}</p>
            <Image src={'/Edit_Blue.svg'} alt={'image'} width={16} height={16} />
        </div>
    )
}

export default EditField