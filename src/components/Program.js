import React from 'react'

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
        <div className='flex p-8 justify-between space-x-4 border border-main-shadow rounded-lg'>
            <div className='h-full w-1/2'>
                <div className='h-full space-y-4'>
                    <div className='lg:flex lg:space-x-4 items-center'>
                        <p className='text-xl font-semibold lg:text-center'>{title}</p>
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
            <div className='w-1/2 bg-main relative py-4'>
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
                                <a target="_blank" href='https://www.google.com/maps/place/Schaumburg+Township+District+Library/'><p className='underline'>{locationText}</p></a>
                                :
                                <p className=''>{locationText}</p>
                        }
                    </div>
                    <div className='bg-main-shadow flex justify-center py-2 text-white px-4 cursor-pointer'>
                        <p className='font-semibold'>Register Now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Program