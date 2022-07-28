import React, { useState } from 'react'
import { RoughNotationGroup } from 'react-rough-notation'
import HeaderSide from './components/HeaderSide'
import Info from './components/Info'
import RoughUnderline from './components/RoughUnderline'

const Home = () => {

    const [show, setShow] = useState(true)

    return (
        <div>
            <div className='mx-4 lg:mx-20 mt-6'>
                <div className='flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between overflow-clip bg-main shadow-main-shadow shadow-2xl'>
                    <div className='space-y-14 lg:w-1/2 lg:pl-24 p-16'>
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
                            <div className='text-2xl'>
                                Advanced Programs for Learning and Exploration
                            </div>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <a className='flex items-center space-x-3 border border-main-shadow cursor-pointer' href='/programs' >
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
                    <div className='lg:w-2/5 w-full h-[33rem]'>
                        <HeaderSide />
                    </div>
                </div>
            </div>
            <div className='mx-4 lg:mx-20 mt-10 lg:mt-20'>
                <div className='lg:flex justify-between items-center border border-main-shadow rounded-lg'>
                    <div className='lg:w-1/3 w-full h-full'>
                        <img className='rounded-l-lg w-full lg:h-full h-[33rem] object-cover' src='/personstudying.png' />
                    </div>
                    <div className='lg:w-2/3 p-6 lg:p-14 h-max space-y-4'>
                        <p className='text-3xl font-bold'>ABOUT US</p>
                        <div className='space-y-4 text-2xl'>
                            <RoughNotationGroup>
                                <p>The <RoughUnderline text='inspiration' /> for this program was created when a few high school students came together and realized that a lot of younger students never get to truly <RoughUnderline text='explore' /> different fields and career paths. Most students are either forced onto one career path from the start of their academic journey or they simply don't know where to begin when it comes to exploring new topics.</p>
                                <p>At <RoughUnderline text='Elevated Learning' />, our goal is to <RoughUnderline text="solve" /> this problem by introducing students to topics that they may not see before the high school experience. We believe that knowledge should be equally accessible to students of all backgrounds, which is why all Elevated Learning programs are <RoughUnderline text='free of charge' /> for every student. Any money that our program does raise will be redirected to improve education in communities that need it most.</p>
                            </RoughNotationGroup>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-4 lg:mx-20 mt-8 lg:mt-20 mb-6'>
                {/* <div className='bg-main flex justify-between p-10 text-center'>
                    <div className='w-full flex justify-between items-center px-24'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='border-main-shadow border-2 rounded-full py-4 px-5 w-min'>
                                <p>60+</p>
                            </div>
                            <p>Students Served</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='border-main-shadow border-2 rounded-full py-4 px-5 w-min'>
                                <p>150+</p>
                            </div>
                            <p>Free Hours Provided</p>
                        </div>
                    </div>
                </div> */}
                <div className='flex flex-col-reverse lg:flex-row lg:my-20 justify-between lg:space-x-8'>
                    <div className='w-full lg:w-1/2 grid grid-cols-2 gap-6'>
                        <div className='border border-main-shadow py-8 flex justify-center rounded-lg items-center'>
                            <div className='text-center'>
                                <p className='text-4xl font-bold'>60+</p>
                                <p className='text-xl'>Students Served</p>
                            </div>
                        </div>
                        <div className='border border-main-shadow py-8 flex justify-center rounded-lg items-center'>
                            <div className='text-center'>
                                <p className='text-4xl font-bold'>200+</p>
                                <p className='text-xl'>Free Hours Provided</p>
                            </div>
                        </div>
                        <div className='border border-main-shadow py-8 flex justify-center rounded-lg items-center '>
                            <div className='text-center'>
                                <p className='text-4xl font-bold'>1:5</p>
                                <p className='text-xl'>Mentor-Student Ratio</p>
                            </div>
                        </div>
                        <div className='border border-main-shadow py-8 flex justify-center rounded-lg items-center '>
                            <div className='text-center'>
                                <p className='text-4xl font-bold'>4</p>
                                <p className='text-xl'>Countries Reached</p>
                            </div>
                        </div>
                        {/* <div className='border border-main-shadow'>
                            <p>60+</p>
                            <p>Students Served</p>
                        </div>
                        <div className='border border-main-shadow'>
                            <p>60+</p>
                            <p>Students Served</p>
                        </div> */}
                    </div>
                    <div className='lg:w-1/2 mb-4 lg:mb-0'>
                        <img className='rounded-lg lg:rounded-l-lg w-full lg:h-full h-[33rem] object-cover' src='https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' />
                    </div>
                </div>
            </div>
            {/* <div className='mx-20 py-10'>
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
            </div> */}
            <Info />
        </div>

    )
}

export default Home