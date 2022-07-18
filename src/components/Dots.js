import React, { useEffect, useState } from 'react'

const Dots = ({ currIndex, setCurrIndex }) => {

    const [arr, setArr] = useState([])

    useEffect(() => {
        var temp = []

        for (var i = 1; i <= currIndex; i++) {
            temp.push(i)
        }

        setCurrIndex(temp)
    }, [])

    return (
        <div>
            {
                arr.map((blah, index) => {
                    if(index == currIndex){
                        return (
                            <div className='bg-gray-200 rounded-full w-2 h-2'>

                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Dots