import React, { useState } from 'react'

const MentorCard = ({ source, name, bio }) => {

    const [readMore, setReadMore] = useState(false)


    return (
        <div className=''>
            <div className='border border-main-shadow rounded-lg p-6 space-y-4'>
                <img src={source} className='w-full object-cover h-52 rounded' />
                <div className='space-y-2'>
                    <p className='text-xl font-semibold'>{name}</p>
                    <div>
                        {
                            readMore ?
                                <p className="text-lg">{bio}</p>
                                :
                                <p className="text-lg line-clamp-5">{bio}</p>
                        }
                        {
                            readMore ?
                                <div className='flex'>
                                    <p className='underline cursor-pointer text-main-shadow' onClick={() => {
                                        setReadMore(!readMore)
                                    }}>Read Less</p>
                                </div>
                                :
                                <div className='flex'>
                                    <p className='underline cursor-pointer text-main-shadow' onClick={() => {
                                        setReadMore(!readMore)
                                    }}>Read More</p>
                                </div>
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default MentorCard