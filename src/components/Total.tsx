import React from 'react'
import { TotalProps } from './types'

const Content: React.FC<TotalProps> = (props) => {

    return (
        <div>
            <h3>Total Exercises: {props.courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}</h3>
        </div>
    )
}

export default Content;