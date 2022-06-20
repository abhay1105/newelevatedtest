import React from 'react'

//fcefdc

const Home = () => {
    return (
        <div>
            <div className='bg-main shadow-main-shadow shadow-2xl mx-20 mt-14'>
                <div className='flex px-20 py-16 items-center'>
                    <div className='space-y-14 w-1/2'>
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
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            </div>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className='flex items-center space-x-3 border border-main-shadow'>
                                <div></div>
                                <div className=''>
                                    <p>Register</p>
                                </div>
                                <div className='bg-main-shadow p-4'>
                                    <svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 7.42359H17.5L11 1.68918" stroke="white" stroke-width="2" />
                                    </svg>
                                </div>
                            </div>
                            <div className='text-lg'>
                                <p>*Classes start on 05/06/2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <img src="/logo.png" />
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
                        <p>waelifyg waek faweluyf gewqilufyg waefg aweiudhwaoieulfh gawkifyg awleic awelifh awleiugf waeilufg saeli wilf waelifyg waek faweluyf gewqilufyg waefg aweiudhwaoieulfh gawkifyg awleic awelifh awleiugf waeilufg saeli wilf waelifyg waek faweluyf gewqilufyg waefg aweiudhwaoieulfh gawkifyg awleic awelifh awleiugf waeilufg saeli wilf waelifyg waek faweluyf gewqilufyg waefg aweiudhwaoieulfh gawkifyg awleic awelifh awleiugf waeilufg saeli wilf waelifyg waek faweluyf gewqilufyg waefg aweiudhwaoieulfh gawkifyg awleic awelifh awleiugf waeilufg saeli wilf waelifyg waek faweluyf gewqilufyg waefg aweiudhwaoieulfh gawkifyg awleic awelifh awleiugf waeilufg saeli wilf waelifyg waek faweluyf gewqilufyg waefg aweiudhwaoieulfh gawkifyg awleic awelifh awleiugf waeilufg saeli wilf waelifyg waek faweluyf gewqilufyg waefg aweiudhwaoieulfh gawkifyg awleic awelifh awleiugf waeilufg saeli wilf </p>
                    </div>
                </div>
            </div>
            <div className='mx-20 mt-20'>
                <div className='bg-main flex justify-between p-10 text-center'>
                    <div className='space-y-4'>
                        <div className='flex'>
                            <div className='bg-main-shadow rounded-full py-4 px-5'>
                            <p>12</p>

                            </div>

                        </div>
                        <p>Projects Created</p>
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