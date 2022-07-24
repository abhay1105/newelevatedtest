import React, { useEffect, useState } from 'react'

const Dots = ({ currIndex, setCurrIndex }) => {

    const [arr, setArr] = useState([])

    useEffect(() => {
        var temp = []

        for (var i = 1; i <= 3; i++) {
            temp.push(i)
        }
        setArr(temp)

    }, [])

    return (
        <div className='space-y-2'>
            {
                arr.map((blah, i) => {
                    if(i == currIndex){
                        return (
                            <div className='bg-main-shadow rounded-full w-4 h-4 cursor-pointer' key={i} >
                            </div>
                        )
                    }else{
                        return (
                            <div className='bg-gray-100 rounded-full w-4 h-4 cursor-pointer' key={i} onClick={() => {setCurrIndex(i)}}>
                            </div>
                        ) 
                    }
                    
                })
            }
            {/* <div className='bg-gray-200 rounded-full w-2 h-2' /> */}
        </div>
    )
}

export default Dots