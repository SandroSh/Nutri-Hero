import { useTranslations } from 'next-intl';
import React, { use } from 'react'





const Tags = ({ type }: { type: string }) => {
    const t = useTranslations(`myPlanPage.ActivityDetailsPage.${type}.tags`);
    return (
        <div className='flex justify-center items-center gap-[10px]'>
            <p>{t('tagTitle')}</p>
            <div className='flex justify-center items-center gap-[10px]'>
                {
                    [... new Array(4)].map((_, index) => (
                        <p className='text-red-10' key={index}>{t(`${index}.title`)}</p>
                    ))}
            </div>
        </div>
    )
}

export default Tags