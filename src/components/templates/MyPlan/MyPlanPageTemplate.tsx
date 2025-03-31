'use client'
import { GoalSummary } from '@/components/organisms/GoalSummary'
import { MyGoal } from '@/components/organisms/MyGoal'
import { MyPlan } from '@/components/organisms/MyPlan'
import { usePathname, useRouter } from '@/i18n/navigation'


import React from 'react'




const MyPlanPageTemplate = () => {
  const pathname = usePathname();
  console.log(pathname)
   const renderComponents = () => {

      switch(pathname){
        case '/my_plan/sign-up':
          return <MyPlan />
        case '/my_plan/goal':
          return <MyGoal/>
        case '/my_plan/goal-summary':
          return <GoalSummary/>
      }

   }
  return (
    
    <>
      { renderComponents() }
    </>
  )
}

export default MyPlanPageTemplate