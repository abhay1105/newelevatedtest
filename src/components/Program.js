import React from 'react'
import { urls } from '../urls';

const Program = ({ title, description, day, timeText, mentorsText, locationText, locationType, programType, newProgram }) => {

    var topRight = {
        zIndex: '10',
        position: 'absolute',
        top: '0',
        right: '0',
        transform: 'translate(25%, -25%)',
    };

    var newTag = "/new.png"

    return (
        <div className='md:flex p-8 justify-between md:space-x-4 border border-main-shadow rounded-lg space-y-4 md:space-y-0'>
            <div className='md:h-full md:w-1/2'>
                <div className='h-full space-y-4'>
                    <div className='lg:flex justify-between items-center'>
                        <p className='text-xl font-semibold'>{title}</p>
                        <div className='flex'>
                            <div className='bg-orange-200 rounded-full px-2 py-1'>
                                <p>{programType}</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <p className='text-lg'>{description}</p>
                    </div>

                </div>
            </div>
            <div className='md:w-1/2 bg-main relative py-4'>
                {
                    newProgram &&
                    <div className='w-full flex items-center justify-end'>
                        <img className='h-12 w-12' src={newTag} style={topRight} />
                    </div>
                }

                <div className='py-4 px-4 space-y-6 h-full flex items-center flex-col justify-center'>
                    <div className='text-center'>
                        <p className='text-2xl font-semibold'>{day}</p>
                        <p>{timeText}</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-2xl font-semibold'>Mentors</p>
                        <p>{mentorsText}</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-2xl font-semibold'>Location</p>
                        {
                            locationType == "link" ?
                                <p className='underline'><a target="_blank" href='https://www.google.com/maps/place/Schaumburg+Township+District+Library/@42.0255715,-88.0854818,17z/data=!3m1!4b1!4m5!3m4!1s0x880faf29a7da014b:0xd68dfda311bc1021!8m2!3d42.0255715!4d-88.0832931'>{locationText}</a></p>
                                :
                                <p className=''>{locationText}</p>
                        }
                    </div>
                    <a target="_blank" href={urls.REGISTRATION_FORM_URL}>
                        <div className='bg-main-shadow flex justify-center py-2 text-white px-4 cursor-pointer rounded-md'>
                            <p className='font-semibold'>Register Now</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Program