import React from 'react'

const Footer = () => {
    return (
        <div className="bg-main min-h-32 space-y-4 text-center p-2 sm:space-y-0 sm:text-left sm:p-4 sm:flex items-center sm:px-4 px-20 justify-between">
            <div className="">
                <p className="text-lg md:text-xl lg:text-3xl font-bold text-primary" >ElevatedLearning</p>
                <p className="italic md:text-lg lg:text-xl text-background">Setting students up for success</p>
            </div>
            <div>
                <p className="text-center text-background">© 2021 ELEVATED LEARNING Illinois Registered Non-Profit</p>
            </div>
        </div>
    )
}

export default Footer