import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [clicked, setClicked] = useState(false)

    return (
        // <div className='flex items-center w-full mt-4 justify-between'>
        //     <div></div>
        //     <div className='flex items-center space-x-12'>
        //         <div className='flex space-x-16 text-lg w-72 items-center justify-end'>
        //             <p><a href='/'>Home</a></p>
        //             <p><a href='/mentors'>Mentors</a></p>
        //         </div>
        //         <div className='h-12 w-12'>
        //             <img src='/logo.png' />
        //         </div>
        //         <div className='flex space-x-16 text-lg w-72 items-centent justify-start'>
        //             <p><a href='/register'>Register</a></p>
        //             <p><a href='/scrapbook'>Scrapbook</a></p>
        //         </div>
        //     </div>
        //     <div></div>
        // </div>
        <div className="mt-6 w-full">
            <div className="">
                <div className="flex justify-between items-center mx-4 lg:mx-20">
                    <div className="lg:hidden flex space-x-4 items-center">
                        <img src="/logo.png" className="w-16 animate-fade-in-down transition-all" alt="logo" />
                        <div className="">
                            <p className="sm:text-3xl font-bold text-background" >ElevatedLearning</p>
                            <p className="md:text-xl italic text-background">Setting students up for success</p>
                        </div>
                    </div>

                    {/* <div className="md:space-x-2 lg:space-x-6 sm:text-xl text-background hidden lg:flex">
                        <p className="cursor-pointer">Why?</p>
                        <p className="cursor-pointer" >Programs</p>
                        <p className="cursor-pointer" >Mentors</p>
                        <p className="cursor-pointer" >Contact</p>
                    </div> */}
                    <div className='hidden lg:flex items-center w-full justify-between'>
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
                                <p><a href='/programs'>Programs</a></p>
                                <p><a href='/scrapbook'>Scrapbook</a></p>
                            </div>
                        </div>
                        <div></div>
                    </div>

                    <div className="flex lg:hidden mb-1 cursor-pointer">
                        <label onClick={() => {
                            console.log("ERIRE")
                            setClicked(!clicked)
                        }} for="menu-toggle" className="pointer-cursor block lg:hidden block"><svg className="fill-current text-gray-900 w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
                        <input className="hidden" type="checkbox" id="menu-toggle" />
                    </div>
                </div>
                <div className="">
                    {
                        clicked
                            ?
                            <div className="lg:hidden w-full justify-end text-black" id="menu">
                                <nav>
                                    <ul className="cursor-pointer text-base text-gray-700 pt-4 items-end">
                                        <a className="flex justify-end py-3 px-0 block border-b-2 hover:border-indigo-400 space-x-1" href="/">
                                            Home
                                        </a>
                                        <a className="flex justify-end py-3 px-0 block border-b-2 hover:border-indigo-400" href="/mentors">Mentors</a>
                                        <a className="flex justify-end py-3 px-0 block border-b-2 hover:border-indigo-400" href="/programs">
                                            Programs</a>
                                        <a className="flex justify-end py-3 px-0 block border-b-2 hover:border-indigo-400" href="/scrapbook">
                                            Scrapbook</a>
                                    </ul>
                                </nav>
                            </div>
                            :
                            <div className="hidden w-full" id="menu">

                            </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Navbar