import React from 'react'

const MentorCard = ({ source, name, bio }) => {
    return (
        <div className='border border-main-shadow rounded-lg p-6 space-y-4'>
            <img src={source} className='w-full object-cover h-52 rounded' />
            <div className='space-y-2'>
                <p className='text-xl'>{name}</p>
                <p className='text-lg'>{bio}</p>
            </div>
        </div>
    )
}

export default MentorCard