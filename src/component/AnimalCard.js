import React from 'react'

export default function AnimalList(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.species}</h2>
        </div>
    )
}