'use client'
import { useEffect, useState } from 'react'
import { recepieCardDataType } from '@/components/molecules/Tabs/Tab.config'
import { ActivityDetails } from '@/components/organisms/ActivityDetails'
import { GoalHome } from '@/components/organisms/GoalHome'
import { GoalSummary } from '@/components/organisms/GoalSummary'
import { MyGoal } from '@/components/organisms/MyGoal'
import { MyPlan } from '@/components/organisms/MyPlan'
import { exerciesCarouselCardData, recepieCarouselCardData } from '@/constants/dummyData'
import { usePathname } from '@/i18n/navigation'

const MyPlanPageTemplate = () => {
  const pathname = usePathname();
  const [detailsData, setDetailsData] = useState<recepieCardDataType>();
  const key = pathname.split('/')[3];
 
  useEffect(() => {
    if (key) {
      const obj = key.includes('recepie')
        ? recepieCarouselCardData.find(item => item.key.includes(key))
        : exerciesCarouselCardData.find(item => item.key.includes(key));
      setDetailsData(obj);
    }
  }, [pathname, key]);

  const renderComponents = () => {
    switch (pathname) {
      case '/my_plan/sign-up':
        return <MyPlan />
      case '/my_plan/goal-survey':
        return <MyGoal />
      case '/my_plan/goal-summary':
        return <GoalSummary />
      case '/my_plan/goal-home':
        return <GoalHome />
        case `/my_plan/goal-home/${key}`:
        if (detailsData) {
          console.log('detailsData', detailsData)
          return <ActivityDetails data={detailsData} />
        }
        return null;
    }
  }

  return <>{renderComponents()}</>
}

export default MyPlanPageTemplate
