import React from 'react'
import PrivacyPolicy from './PrivacyPolicy'

const Footer = () => {
    return (
        <div className="bg-main min-h-32 space-y-4 text-center py-4 sm:space-y-0 sm:text-left sm:flex items-center px-4 lg:px-20 justify-between">
            <div className="">
                <p className="text-lg md:text-xl lg:text-3xl font-bold text-primary" >ElevatedLearning</p>
                <p className="italic md:text-lg lg:text-xl text-background">Setting students up for success</p>
            </div>
            <div>
                <PrivacyPolicy />
            </div>
            <div>
                <p className="text-center text-background font-semibold">Est. 2019 © 2022 ELEVATED LEARNING Illinois Registered Nonprofit</p>
            </div>
        </div>
    )
}

export default Footer