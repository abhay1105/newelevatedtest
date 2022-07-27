import React from 'react'
import Program from './components/Program';

const Register = () => {

    // title = 
    // description = 
    //     day = 
    // timeText = 
    // mentorsText = 
    // locationText = 
    // locationType =
    // programType =

    return (
        <div className='mx-4 lg:mx-20'>
            <div className='mt-4 lg:mt-10 space-y-4'>
                <div>
                    <p className='text-3xl font-bold'>Register</p>
                </div>
                <div className=''>
                    <div className='bg-main py-4 px-8'>
                        <p className='text-xl py-2 font-semibold'>All Classes Begin September 11th, 2022</p>
                        <p className='text-l py-2 italic'>Scroll down to learn more about the programs we offer</p>
                    </div>
                </div>
            </div>

            <div className='mt-4 mb-12'>
                <div className='grid lg:grid-cols-2 mt-4 gap-6'>
                    <Program 
                        title={"SAT Prep"} 
                        description={"These high school test preparation sessions are run by high school seniors with recent experience in taking SAT tests. They will provide younger students with the tips and skills that have allowed them to get exceptional scores."} 
                        day={"Sundays"} 
                        timeText={"1:00 -- 2:30 PM Central Time"} 
                        mentorsText={"Prisha Mohan & Ezra Goodwin"} 
                        locationText={"Schaumburg Township Library"} 
                        locationType={"link"} 
                        programType={"In-Person"} 
                        newProgram={true} 
                    />
                    <Program 
                        title={"Competition Math"} 
                        description={"Using our mentors' experience in several math competitions such as Math Olympiad, AMC, NSML, MathCON, and several others, our competition math program is tailored to train young students by introducing them to new techniques that will allow them to tackle difficult problems in a quick and efficient manner."} 
                        day={"Sundays"} 
                        timeText={"9:00 -- 10:00 AM Central Time"} 
                        mentorsText={"Abhay Paidipalli & Anmay Gupta"} 
                        locationText={"Zoom"} 
                        locationType={"normal"} 
                        programType={"Virtual"} 
                        newProgram={false} 
                    />
                    <Program 
                        title={"Mobile App Development"} 
                        description={"This class focuses on teaching students the fundamentals of mobile app development through an intuitive and powerful development platform known as MIT App Inventor. The mentors of this class will also review basic coding concepts taught in some of our previous classes, making it a great opportunity for both new and returning students."} 
                        day={"Saturdays"} 
                        timeText={"9:00 -- 10:00 AM Central Time"} 
                        mentorsText={"Soham Gupta & Saksham Gupta"} 
                        locationText={"Zoom"} 
                        locationType={"normal"} 
                        programType={"Virtual"} 
                        newProgram={true} 
                    />
                    <Program 
                        title={"Business Fundamentals"} 
                        description={"Our business class will focus on teaching students basic concepts that pertain to the business world, from investing to business management. This will be done through a hands-on approach replicating parts of the popular TV show: Shark Tank."} 
                        day={"Mondays"} 
                        timeText={"7:00 -- 8:00 PM Central Time"} 
                        mentorsText={"Rady Kolev & Tyler Marrazzo"} 
                        locationText={"Zoom"} 
                        locationType={"normal"} 
                        programType={"Virtual"} 
                        newProgram={false} 
                    />
                    <Program 
                        title={"Public Speaking"} 
                        description={"If you are interested in strengthening your communication skills, then this is the class for you. By simulating the structure of a high school congressional debate chamber, students will get an opportunity to learn how to research and present on a variety of different topics. In doing so, this will prepare a student for high school debate while also improving their speaking ability and confidence."} 
                        day={"Saturdays"} 
                        timeText={"10:30 -- 11:30 AM Central Time"} 
                        mentorsText={"Varshini Medempudi & Eesha Desai"} 
                        locationText={"Zoom"} 
                        locationType={"normal"} 
                        programType={"Virtual"} 
                        newProgram={false} 
                    />
                    {/* <Program 
                        title={"Multimedia Camp"} 
                        description={"This camp is designed for students who are interested in exploring the world of digital content creation. Covering a large spectrum of topics, from journalism to graphic design, this class will teach students to use different digital tools such as film and photo editors. They will then be able to utilize these skills along with their own creativity to create a project of their own."} 
                        day={"To Be Determined"} 
                        timeText={"--"} 
                        mentorsText={"Sukriti Varma & Anmay Gupta"} 
                        locationText={"Zoom"} 
                        locationType={"normal"} 
                        programType={"Virtual"} 
                        newProgram={true} 
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default Register