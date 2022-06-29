import React from 'react'

const NotFound = () => {
    return (
        <div className='grid h-screen place-items-center'>
            <div className='text-center'>
                <p className='text-9xl font-bold text-main-shadow'>404</p>
                <p>Page Not Found</p>
                <p>Please navigate to a different page using the navbar above!</p>
            </div>
        </div>
    )
}

export default NotFound