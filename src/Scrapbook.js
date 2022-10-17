import React from 'react'
import { RoughNotationGroup } from 'react-rough-notation'
import RoughUnderline from './components/RoughUnderline'

const Scrapbook = () => {
    return (
        // <div className='grid h-screen place-items-center'>
        //     <div className='text-center'>
        //         <p className='text-9xl font-bold text-main-shadow'>Coming Soon!</p>
        //     </div>
        // </div>
        <div>
            <div className='mx-4 lg:mx-20 my-10 lg:my-20'>
                <div className='lg:flex justify-between items-center border border-main-shadow rounded-lg'>
                    <div className='lg:w-1/2 w-full h-full'>
                        <img className='rounded-l-lg w-full lg:h-full h-[33rem] object-cover' src='/crierArticleImg.jpeg' />
                    </div>
                    <div className='lg:w-1/2 p-6 lg:p-14 h-max space-y-4'>
                        <p className='text-3xl font-bold'>NEW ARTICLE!</p>
                        <div className='space-y-4 text-2xl'>
                            <p>Check out the <a style={{ color: 'blue', fontWeight: 'semi-bold' }} href="https://conantcrier.com/features/conant-seniors-non-profit-organization-provides-free-education/" target="_blank"><u>Conant Crier's</u></a> article on the origins of Elevated Learning. Listen to our Founder talk about how our organization came to be and the expansion of our nonprofit over the past few years.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scrapbook