'use client'
import { GoalHome } from '@/components/organisms/GoalHome'
import { GoalSummary } from '@/components/organisms/GoalSummary'
import { MyGoal } from '@/components/organisms/MyGoal'
import { MyPlan } from '@/components/organisms/MyPlan'
import { usePathname, useRouter } from '@/i18n/navigation'
const MyPlanPageTemplate = () => {
  const pathname = usePathname();
  const id = pathname.split('#')[1]
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
      case `/my_plan/goal-home/activity#${id}`:
        return <MyPlan />
    }
  }
  return (
    <>
      {renderComponents()}
    </>
  )
}

export default MyPlanPageTemplate