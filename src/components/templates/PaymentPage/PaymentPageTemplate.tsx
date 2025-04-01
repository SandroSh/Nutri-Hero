import Hero from '@/components/organisms/HeroSection/Hero'
import { Payment } from '@/components/organisms/Payment'
import React from 'react'


const PaymentPageTemplate = () => {
    return (
        <Hero outerClassName='mt-[95px] hero-section'>
            <Payment/>
        </Hero>
    )
}

export default PaymentPageTemplate