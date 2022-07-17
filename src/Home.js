import React from 'react'
import HeaderSide from './components/HeaderSide'

//fcefdc

const Home = () => {

    return (
        <div>
            <div className='mx-20 mt-8'>
                <div className='flex items-center justify-between overflow-clip bg-main shadow-main-shadow shadow-2xl'>
                    <div className='space-y-14 w-1/2 pl-24'>
                        <div className='space-y-6'>
                            <div className='text-5xl'>
                                <p>Elevated</p>
                                <p className='font-bold text-6xl'>Learning</p>
                            </div>
                            <div className=''>
                                <svg width="169" height="14" viewBox="0 0 169 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M167 11.6786C162 11.6786 148.606 2.29498 136 2.29498C123.394 2.29498 117.593 12.2678 105 11.6786C94.0815 11.1677 89.4269 2.5402 78.5 2.29498C66.831 2.0331 61.6593 12.2401 50 11.6786C39.8179 11.1881 35.692 2.14936 25.5 2.29498C15.6736 2.43538 2 11.6786 2 11.6786" stroke="#3F4042" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='text-lg'>
                                Advanced Programs for Learning and Exploration
                            </div>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <a className='flex items-center space-x-3 border border-main-shadow cursor-pointer' href='/register' >
                                <div></div>
                                <div className=''>
                                    <p>Register</p>
                                </div>
                                <div className='bg-main-shadow p-4'>
                                    <svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 7.42359H17.5L11 1.68918" stroke="white" stroke-width="2" />
                                    </svg>
                                </div>
                            </a>
                            {/* <div className='text-lg'>
                                <p>*Classes start on 05/06/2022</p>
                            </div> */}
                        </div>
                    </div>
                    <div className='w-1/3  h-[33rem]'>
                        <HeaderSide />
                    </div>
                </div>
            </div>
            <div className='mx-20 mt-20'>
                <div className='flex justify-between items-center border border-main-shadow rounded-lg'>
                    <div className='w-1/3'>
                        <img className='rounded-l-lg' src='/personstudying.png' />
                    </div>
                    <div className='w-2/3 p-14 h-max space-y-4 '>
                        <p className='text-xl'>ABOUT US</p>
                        <p>The inspiration for this program came when a few high-schoolers came together and realized that a lot of younger students never get to truly explore different fields and career paths when it comes to entering high school. Most students are either forced onto one career path from the start or they simply don't know where to start when it comes to exploring new topics. At Elevated Learning, we want to change this by introducing students to topics that they may not necessarily see before the high school experience. We also believe that knowledge should be equally accessible to students of all backgrounds, which is why all Elevated Learning programs will be free of charge for every student. Any money that we do raise through our program will be redirected to communities that need it most.</p>
                    </div>
                </div>
            </div>
            <div className='mx-20 mt-20'>
                <div className='bg-main flex justify-between p-10 text-center'>
                    <div className='w-full flex justify-between items-center px-24'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='border-main-shadow border-2 rounded-full py-4 px-5 w-min'>
                                <p>12</p>
                            </div>
                            <p>Projects Created</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='border-main-shadow border-2 rounded-full py-4 px-5 w-min'>
                                <p>12</p>
                            </div>
                            <p>Projects Created</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='border-main-shadow border-2 rounded-full py-4 px-5 w-min'>
                                <p>12</p>
                            </div>
                            <p>Projects Created</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='border-main-shadow border-2 rounded-full py-4 px-5 w-min'>
                                <p>12</p>
                            </div>
                            <p>Projects Created</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='border-main-shadow border-2 rounded-full py-4 px-5 w-min'>
                                <p>12</p>
                            </div>
                            <p>Projects Created</p>
                        </div>
                    </div>


                </div>
            </div>
            <div className='mx-20 py-10'>
                <p className='text-xl mb-4'>Student Statements</p>
                <div className='grid grid-cols-4 gap-4'>
                    <div className='border border-main-shadow p-4 rounded-lg'>
                        <p>"I love Elevated Learning!" - Mother of two</p>
                    </div>
                    <div className='border border-main-shadow p-4 rounded-lg'>
                        <p>"I love Elevated Learning!" - Mother of two</p>
                    </div>
                    <div className='border border-main-shadow p-4 rounded-lg'>
                        <p>"I love Elevated Learning!" - Mother of two</p>
                    </div>
                    <div className='border border-main-shadow p-4 rounded-lg'>
                        <p>"I love Elevated Learning!" - Mother of two</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home