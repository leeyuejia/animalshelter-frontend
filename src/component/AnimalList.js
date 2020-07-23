import React from 'react'
import AnimalCard from './AnimalCard'

export default function AnimalList(props) {
    return (
        <div>
            {this.props.animals.map((animal,index) => 
                <AnimalCard 
                name = {animal.name}
                key = {animal._id} 
                species={animal.species} 
                image = {animal.image}/>)}
        </div>
    )
}