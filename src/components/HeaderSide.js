import React, { useState, useRef, useEffect } from 'react'
import { urls } from '../urls';
import Dots from './Dots';

const HeaderSide = () => {

    const [currImageIndex, setCurrImageIndex] = useState(0);
    const currentImageIndexRef = useRef();

    useEffect(() => {
        // cache the current state value
        currentImageIndexRef.current = currImageIndex;
    }, [currImageIndex]);

    const increment = () => {
        // access the current state value
        if (currentImageIndexRef.current + 1 < 3) {
            setCurrImageIndex((oldCount) => oldCount + 1)
        }
        else {
            setCurrImageIndex(0)
        }
    }

    useEffect(() => {
        const id = setInterval(increment, 5000);
        return () => clearInterval(id);
    }, [currImageIndex]);

    return (
        <div className='h-full w-full'>
            {
                currImageIndex == 0 &&
                <div className='relative h-full w-full'>
                    <div className='absolute w-full h-full'>
                        <div className='flex h-full bg-gray-800 bg-opacity-30'>
                            <div className='w-full h-full flex flex-col justify-between '>
                                <div className='p-10'>
                                    <p className='text-white text-4xl font-semibold'>Check Out Our Scrapbook!</p>
                                </div>
                                <div className='flex p-10'>
                                    <a target="_blank" href={urls.SCRAPBOOK_URL}>
                                        <div className='bg-white px-4 py-2 cursor-pointer'>
                                            <p className='text-black text-lg'>Click Here</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center p-2'>
                                <Dots currIndex={currImageIndex} setCurrIndex={setCurrImageIndex} />
                            </div>
                        </div>

                    </div>
                    <img src='/crierArticleImg.jpeg' className='h-full w-full object-cover' />
                </div>
            }
            {
                currImageIndex == 1 &&
                <div className='relative h-full w-full'>
                    <div className='absolute w-full h-full'>
                        <div className='flex h-full bg-gray-800 bg-opacity-30'>
                            <div className='w-full h-full flex flex-col justify-between '>
                                <div className='p-10'>
                                    <p className='text-white text-4xl font-semibold'>Fall Classes Begin September 11th, 2022</p>
                                </div>
                                <div className='flex p-10'>
                                    <a target="_blank" href={urls.REGISTRATION_FORM_URL}>
                                        <div className='bg-white px-4 py-2 cursor-pointer'>
                                            <p className='text-black text-lg'>Register Now</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center p-2'>
                                <Dots currIndex={currImageIndex} setCurrIndex={setCurrImageIndex} />
                            </div>
                        </div>

                    </div>
                    <img src='https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80' className='h-full w-full object-cover' />
                </div>
            }
            {
                currImageIndex == 2 &&
                <div className='relative h-full w-full'>
                    <div className='absolute w-full h-full'>
                        <div className='flex h-full bg-gray-800 bg-opacity-30'>
                            <div className='w-full h-full flex flex-col justify-between '>
                                <div className='p-10'>
                                    <p className='text-white text-4xl font-semibold'>Want to Provide Feedback & Testimonials?</p>
                                </div>
                                <div className='flex p-10'>
                                    <a target="_blank" href={urls.FEEDBACK_FORM_URL}>
                                        <div className='bg-white px-4 py-2 cursor-pointer'>
                                            <p className='text-black text-lg'>Complete Our Survey</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center p-2'>
                                <Dots currIndex={currImageIndex} setCurrIndex={setCurrImageIndex} />
                            </div>
                        </div>

                    </div>
                    <img src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' className='h-full w-full object-cover' />
                </div>
            }
        </div>
    )
}

export default HeaderSide