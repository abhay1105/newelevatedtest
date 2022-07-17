import React from 'react'

const Register = () => {
    return (
        <div className='mx-20'>
            <div className='mt-10 space-y-4'>
                <div>
                    <p className='text-3xl font-bold'>Programs</p>
                </div>
                <div className=''>
                    <div className='bg-main py-4 px-8'>
                        <p className='text-xl font-semibold'>Register for Classes</p>
                    </div>
                </div>
            </div>

            <div className='mt-4'>
                Math Compsci Business Debate Media
                <div className='grid grid-cols-2 mt-4 gap-6'>
                    {/* <div className='flex p-8 justify-between space-x-4 items-center'>
                        <div className='flex items-center w-1/2'>
                            <div className='space-y-2'>
                                <p className='text-xl'>Math</p>
                                <p className='text-lg'>Using our mentors' experience in several math competitions such as Math Olympiad, AMC, NSML, MathCON, and several others, our competition math programs are tailored to train young students by introducing them to new techniques that will allow them to tackle difficult problems in a quick and efficient manner.</p>
                            </div>
                        </div>
                        <div className='flex-col space-y-4 w-1/2'>
                            <div className='bg-main py-6 px-4 space-y-2'>
                                <p className='text-xl'>Math Concepts 1</p>
                                <p className='text-lg'>Very good class for blah blah blah blah blah blah blah blah</p>
                            </div>
                            <div className='bg-main py-6 px-4 space-y-2'>
                                <p className='text-xl'>Math Concepts 2</p>
                                <p className='text-lg'>Very good class for blah blah blah blah blah blah blah blah</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex p-8 justify-between space-x-4 items-center'>
                        <div className='flex items-center w-1/2'>
                            <div className='space-y-2'>
                                <p className='text-xl'>Computer Science</p>
                                <p className='text-lg'>With STEM-based careers being some of the most common career paths nowadays, it is vital for students to explore different areas of engineering. Through the establishment of both computer-science and computer-engineering courses, our mentors make sure to place an emphasis on creativity when it comes to teaching students about the vast world of engineering topics.</p>
                            </div>
                        </div>
                        <div className='flex-col space-y-4 w-1/2'>
                            <div className='bg-main py-6 px-4 space-y-2'>
                                <p className='text-xl'>Intro to Web Dev</p>
                                <p className='text-lg'>Very good class for blah blah blah blah blah blah blah blah</p>
                            </div>
                            <div className='bg-main py-6 px-4 space-y-2'>
                                <p className='text-xl'>Python Basics</p>
                                <p className='text-lg'>Very good class for blah blah blah blah blah blah blah blah</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex p-8 justify-between space-x-4 items-center'>
                        <div className='flex items-center w-1/2'>
                            <div className='space-y-2'>
                                <p className='text-xl'>Business</p>
                                <p className='text-lg'>Our business courses encapsulate a wide variety of topics and are helpful to all students regardless of their intended career paths. By developing universal life skills such as efficient money-management tactics and effective communication methods, students who take these courses will become more accustomed to social necessities that are not usually mentioned in public school curriculum.</p>
                            </div>
                        </div>
                        <div className='flex-col space-y-4 w-1/2'>
                            <div className='bg-main py-6 px-4 space-y-2'>
                                <p className='text-xl'>Intro to Business</p>
                                <p className='text-lg'>Very good class for blah blah blah blah blah blah blah blah</p>
                            </div>
                            <div className='bg-main py-6 px-4 space-y-2'>
                                <p className='text-xl'>Public Speaking</p>
                                <p className='text-lg'>Very good class for blah blah blah blah blah blah blah blah</p>
                            </div>
                        </div>
                    </div> */}
                    <div className='flex p-8 justify-between space-x-4'>
                        <div className='flex items-center w-1/2 py-4'>
                            <div className=''>
                                <p className='text-xl font-semibold text-center'>Math</p>
                                <p className='text-lg text-center'>Using our mentors' experience in several math competitions such as Math Olympiad, AMC, NSML, MathCON, and several others, our competition math programs are tailored to train young students by introducing them to new techniques that will allow them to tackle difficult problems in a quick and efficient manner.</p>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div className='bg-main py-4 px-4 space-y-6 h-full flex items-center flex-col justify-center'>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Wednesdays</p>
                                    <p>6:30-8:30 Central Time</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Mentors</p>
                                    <p>Abhay and Anmay</p>
                                </div>

                                <div className='bg-main-shadow flex justify-center py-2 text-white px-4 cursor-pointer'>
                                    <p className='font-semibold'>Click here to Register!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register