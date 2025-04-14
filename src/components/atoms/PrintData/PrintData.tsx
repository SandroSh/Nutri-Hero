import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'

const PrintData = ({print}:{print:string}) => {
    const t = useTranslations('myPlanPage.ActivityDetailsPage.buttons');
    return (
        <div className='flex justify-center items-center gap-[10px] self-start cursor-pointer'>
            <p className='font-bold'>{t(print)}</p>
            <Image src={'/ic_print_24px.svg'} alt={'icon'} width={25} height={25}/>
        </div>
    )
}

export default PrintData