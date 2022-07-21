import React from 'react'

const Register = () => {

    var topRight = {
        zIndex: '-1',
        position: 'absolute',
        top: '0',
        right: '0',
        fontSize: '18px',
        width: '50px',
        transform: 'translate(50%, -50%)',
    };

    var newTag = "./../public/new.png"

    return (
        <div className='mx-20'>
            <div className='mt-10 space-y-4'>
                <div>
                    <p className='text-3xl font-bold'>Register</p>
                </div>
                <div className=''>
                    <div className='bg-main py-4 px-8'>
                        <p className='text-xl font-semibold'>Classes Begin Sunday September 4th, 2022</p>
                        <p className='text-l italic'>Scroll down to learn more about the programs we offer</p>
                    </div>
                </div>
            </div>

            <div className='mt-4'>
                <div className='grid grid-cols-2 mt-4 gap-6'>
                    <div className='flex p-8 justify-between space-x-4'>
                        <div className='flex items-center w-1/2 py-4'>
                            <div className=''>
                                <div className='flex space-x-4 items-center'>
                                <p className='text-xl font-semibold text-center'>SAT/AP Prep</p>
                            <div className='bg-orange-200 rounded-full px-2 py-1'>
                                <p>In-Person</p>
                            </div>
                                </div>
                                <p className='text-lg'>These high school test preparation sessions are run by high school seniors with recent experience in taking several SAT & AP tests. They will provide younger students with the tips and skills that have allowed them to get exceptional scores.</p>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <img style={topRight} src={newTag} alt="324" />
                            <div className='bg-main py-4 px-4 space-y-6 h-full flex items-center flex-col justify-center'>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Sundays</p>
                                    <p>1:00 -- 2:30 PM Central Time</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Mentors</p>
                                    <p>Prisha Mohan & Ezra Goodwin</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Location</p>
                                    <p>Schaumburg Township District Library<br></br>130 S Roselle Rd<br></br>Schaumburg, IL 60193</p>
                                </div>
                                <div className='bg-main-shadow flex justify-center py-2 text-white px-4 cursor-pointer'>
                                    <p className='font-semibold'>Register Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex p-8 justify-between space-x-4'>
                        <div className='flex items-center w-1/2 py-4'>
                            <div className=''>
                                <div className='flex space-x-4 items-center'>
                                <p className='text-xl font-semibold text-center'>Competition Math</p>
                            <div className='bg-orange-200 rounded-full px-2 py-1'>
                                <p>Virtual</p>
                            </div>
                                </div>
                                <p className='text-lg'>Using our mentors' experience in several math competitions such as Math Olympiad, AMC, NSML, MathCON, and several others, our competition math program is tailored to train young students by introducing them to new techniques that will allow them to tackle difficult problems in a quick and efficient manner.</p>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div className='bg-main py-4 px-4 space-y-6 h-full flex items-center flex-col justify-center'>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Sundays</p>
                                    <p>9:00 -- 10:00 AM Central Time</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Mentors</p>
                                    <p>Abhay Paidipalli & Anmay Gupta</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Location</p>
                                    <p>Zoom</p>
                                </div>
                                <div className='bg-main-shadow flex justify-center py-2 text-white px-4 cursor-pointer'>
                                    <p className='font-semibold'>Register Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex p-8 justify-between space-x-4'>
                        <div className='flex items-center w-1/2 py-4'>
                            <div className=''>
                                <div className='flex space-x-4 items-center'>
                                <p className='text-xl font-semibold text-center'>Mobile App Development</p>
                            <div className='bg-orange-200 rounded-full px-2 py-1'>
                                <p>Virtual</p>
                            </div>
                                </div>
                                <p className='text-lg'>This class focuses on teaching students the fundamentals of mobile app development through an intuitive and powerful development platform known as MIT App Inventor. The mentors of this class will also review basic coding concepts taught in some of our previous classes, making it a great opportunity for both new and returning students.</p>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div className='bg-main py-4 px-4 space-y-6 h-full flex items-center flex-col justify-center'>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Saturdays</p>
                                    <p>9:00 -- 10:00 AM Central Time</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Mentors</p>
                                    <p>Soham Gupta & Saksham Gupta</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Location</p>
                                    <p>Zoom</p>
                                </div>
                                <div className='bg-main-shadow flex justify-center py-2 text-white px-4 cursor-pointer'>
                                    <p className='font-semibold'>Register Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex p-8 justify-between space-x-4'>
                        <div className='flex items-center w-1/2 py-4'>
                            <div className=''>
                                <div className='flex space-x-4 items-center'>
                                <p className='text-xl font-semibold text-center'>Business Fundamentals</p>
                            <div className='bg-orange-200 rounded-full px-2 py-1'>
                                <p>Virtual</p>
                            </div>
                                </div>
                                <p className='text-lg'>Our business class will focus on teaching students basic concepts that pertain to the business world, from investing to business management. This will be done through a hands-on approach replicating parts of the popular TV show: Shark Tank.</p>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div className='bg-main py-4 px-4 space-y-6 h-full flex items-center flex-col justify-center'>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Mondays</p>
                                    <p>7:00 -- 8:00 PM Central Time</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Mentors</p>
                                    <p>Rady Kolev & Tyler Marrazzo</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Location</p>
                                    <p>Zoom</p>
                                </div>
                                <div className='bg-main-shadow flex justify-center py-2 text-white px-4 cursor-pointer'>
                                    <p className='font-semibold'>Register Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex p-8 justify-between space-x-4'>
                        <div className='flex items-center w-1/2 py-4'>
                            <div className=''>
                                <div className='flex space-x-4 items-center'>
                                <p className='text-xl font-semibold text-center'>Public Speaking</p>
                            <div className='bg-orange-200 rounded-full px-2 py-1'>
                                <p>Virtual</p>
                            </div>
                                </div>
                                <p className='text-lg'>If you are interested in strengthening your communication skills, then this is the class for you. By simulating the structure of a high school congressional debate chamber, students will get an opportunity to learn how to research and present on a variety of different topics. In doing so, this will prepare a student for high school debate while also improving their speaking ability and confidence.</p>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div className='bg-main py-4 px-4 space-y-6 h-full flex items-center flex-col justify-center'>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Saturdays</p>
                                    <p>10:30 -- 11:30 AM Central Time</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Mentors</p>
                                    <p>Varshini Medempudi & Eesha Desai</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Location</p>
                                    <p>Zoom</p>
                                </div>
                                <div className='bg-main-shadow flex justify-center py-2 text-white px-4 cursor-pointer'>
                                    <p className='font-semibold'>Register Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex p-8 justify-between space-x-4'>
                        <div className='flex items-center w-1/2 py-4'>
                            <div className=''>
                                <div className='flex space-x-4 items-center'>
                                <p className='text-xl font-semibold text-center'>Multimedia Camp</p>
                            <div className='bg-orange-200 rounded-full px-2 py-1'>
                                <p>Virtual</p>
                            </div>
                                </div>
                                <p className='text-lg'>This camp is designed for students who are interested in exploring the world of digital content creation. Covering a large spectrum of topics, from journalism to graphic design, this class will teach students to use different digital tools such as film and photo editors. They will then be able to utilize these skills along with their own creativity to create a project of their own.</p>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div className='bg-main py-4 px-4 space-y-6 h-full flex items-center flex-col justify-center'>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Wednesdays</p>
                                    <p>6:00 -- 7:00 PM Central Time</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Mentors</p>
                                    <p>Sukriti Varma & Anmay Gupta</p>
                                </div>
                                <div className='text-center'>
                                    <p className='text-2xl font-semibold'>Location</p>
                                    <p>Zoom</p>
                                </div>
                                <div className='bg-main-shadow flex justify-center py-2 text-white px-4 cursor-pointer'>
                                    <p className='font-semibold'>Register Now</p>
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