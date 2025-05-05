import Hero from '@/components/organisms/HeroSection/Hero'
import { Payment } from '@/components/organisms/Payment'
import React from 'react'


const PaymentPageTemplate = () => {
    return (
        <Hero outerClassName='mt-[95px] hero-section max-xl:px-xl max-xl:items-center'>
            <Payment/>
        </Hero>
    )
}

export default PaymentPageTemplate