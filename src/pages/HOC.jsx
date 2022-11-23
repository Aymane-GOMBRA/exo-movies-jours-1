import React, { useState } from 'react'
import Animal from '../hoc/Animal'

const HOC = () => {
    const [animals, setAnimals] = useState(['Chien', 'Chat', 'Lapin', 'Poule'])
    return (
        <div>
            <h1>HOC</h1>
            {
                animals.map((animal, i) => (
                    <Animal name={animal} key={i} />
                ))
            }
        </div>
    )
}

export default HOC