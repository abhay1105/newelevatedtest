import React from 'react'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"


const RoughUnderline = ({ text }) => {
    return (
        <RoughNotation type="highlight" show={true} color="#fd8b20">
            {text}
        </RoughNotation>
    )
}

export default RoughUnderline