import React, { useState } from 'react'
import FormMovie from '../components/Movie/FormMovie'
import ListMovie from '../components/Movie/ListMovie'
import { FilmsContext } from '../context/FilmContext'

const Movies = () => {
    const [films, setFilms] = useState([
        { name: 'Film1', year: 2001 },
        { name: 'Film2', year: 2002 },
        { name: 'Film3', year: 2003 },
        { name: 'Film4', year: 2004 },
        { name: 'Film5', year: 2005 }
    ])

    return (
        <FilmsContext.Provider
            value={{
                films,
                setFilms
            }}>
            <div>
                <h1>Movies</h1>
                <FormMovie films={films} setFilms={setFilms} />
                <ListMovie films={films} />
            </div>
        </FilmsContext.Provider>
    )
}

export default Movies
