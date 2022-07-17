import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center w-full mt-4 justify-between'>
            <div></div>
            <div className='flex items-center space-x-12'>
                <div className='flex space-x-16 text-lg w-72 items-center justify-end'>
                    <p><a href='/'>Home</a></p>
                    <p><a href='/mentors'>Mentors</a></p>
                </div>
                <div className='h-12 w-12'>
                    <img src='/logo.png' />
                </div>
                <div className='flex space-x-16 text-lg w-72 items-centent justify-start'>
                    <p><a href='/register'>Register</a></p>
                    <div/>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Navbar