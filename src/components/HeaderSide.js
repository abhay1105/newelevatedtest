import React, { useState, useRef, useEffect } from 'react'

const HeaderSide = () => {

    const [currImageIndex, setCurrImageIndex] = useState(0);
    const currentImageIndexRef = useRef();

    useEffect(() => {
        // cache the current state value
        currentImageIndexRef.current = currImageIndex;
    }, [currImageIndex]);

    const increment = () => {
        // access the current state value
        if (currentImageIndexRef.current + 1 < 2) {
            setCurrImageIndex((oldCount) => oldCount + 1)
        }
        else {
            setCurrImageIndex(0)
        }
    }

    useEffect(() => {
        const id = setInterval(increment, 5000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className='h-full w-full'>
            {
                currImageIndex == 0 &&
                <div className='relative h-full w-full'>
                    <div className='absolute w-full h-full'>
                        <div className='w-full h-full flex flex-col justify-between bg-gray-800 bg-opacity-30'>
                            <div className='p-10'>
                                <p className='text-white text-4xl font-semibold'>Classes start on 05/06/2022</p>
                            </div>
                            <div className='flex p-10'>
                                <div className='bg-white px-4 py-2'>
                                    <p className='text-black text-lg'>Register now!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src='https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80' className='h-full w-full object-cover' />
                </div>
            }
            {
                currImageIndex == 1 &&
                <div className='relative h-full w-full'>
                    <div className='absolute w-full h-full'>
                        <div className='w-full h-full flex flex-col justify-between bg-gray-800 bg-opacity-30'>
                            <div className='p-10'>
                                <p className='text-white text-4xl font-semibold'>We are looking for mentors!</p>
                            </div>
                            <div className='flex p-10'>
                                <div className='bg-white px-4 py-2'>
                                    <p className='text-black text-lg'>Contact us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src='https://images.unsplash.com/photo-1620829813947-ef4246827355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' className='h-full w-full object-cover' />
                </div>
            }
        </div>
    )
}

export default HeaderSide