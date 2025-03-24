'use client'
import { MyGoal } from '@/components/organisms/MyGoal'
import { MyPlan } from '@/components/organisms/MyPlan'
import { usePathname, useRouter } from '@/i18n/navigation'


import React from 'react'




const MyPlanPageTemplate = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    
    <>
      {pathname === "/my_plan/sign-up" ? <MyPlan /> : <MyGoal/>}
    </>
  )
}

export default MyPlanPageTemplate