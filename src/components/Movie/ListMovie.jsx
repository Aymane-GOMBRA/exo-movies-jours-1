import React from 'react'
import Movie from './Movie'

const ListMovie = ({ films }) => {
    return (
        <div>
            {
                films.map((film, i) => (
                    <Movie key={i} film={film} index={i} />
                ))
            }
        </div>
    )
}

export default ListMovie