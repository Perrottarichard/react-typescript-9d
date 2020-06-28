import React from 'react'
import { ContentProps } from './types'

const Content: React.FC<ContentProps> = (props) => {

    return (
        <div>
            <h3>{props.courseParts.map(p => <p key={p.name}>Unit: {p.name} <br /> Exercises: {p.exerciseCount}</p>)}</h3>
        </div>
    )
}

export default Content;