import { ActivityBadge } from '@/components/atoms/ActivityBadge'
import { ActivityBadgesProps } from '@/constants/dummyData'
import { useTranslations } from 'next-intl';
import React from 'react'



const ActivityBadges = ({ data }: { data: ActivityBadgesProps[] }) => {
    const t = useTranslations('myPlanPage');
    return (
        <div className='flex justify-center items-center gap-[45px] mb-[30px]'>
            <ActivityBadge url={data[0].url} title={t(data[0].title)} info={t(data[0].info)} />
            <ActivityBadge url={data[1].url} title={t(data[1].title)} info={t(data[1].info)} />
            <ActivityBadge url={data[2].url} title={t(data[2].title)} info={t(data[2].info)} />
            <ActivityBadge url={data[3].url} title={t(data[3].title)} info={t(data[3].info)} />
        </div>

    )
}

export default ActivityBadges