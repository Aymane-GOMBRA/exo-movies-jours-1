import React from 'react'
import { useContext } from 'react'
import { FilmsContext } from '../../context/FilmContext'

const Movie = ({ film, index }) => {
    const { films, setFilms } = useContext(FilmsContext)
    const handleClickDelete = () => {
        const newArray = [...films]
        newArray.splice(index, 1)
        setFilms(newArray)
    }
    const handleClickUp = () => {
        const newArray = [...films]
        const movingFilm = newArray[index]
        newArray.splice(index, 1)
        newArray.splice(index + 1, 0, movingFilm);
        setFilms(newArray)
    }

    const handleClickDown = () => {
        const newArray = [...films]
        const movingFilm = newArray[index]
        newArray.splice(index, 1)
        newArray.splice(index - 1, 0, movingFilm);
        setFilms(newArray)
    }

    return (
        <div>
            <h2>{film.name} {film.year}</h2>
            <button onClick={handleClickDelete}>X</button>
            {
                index !== films.length - 1 &&
                <button onClick={handleClickUp}>UP</button>
            }
            {
                index !== 0 &&
                <button onClick={handleClickDown}>DOWN</button>
            }

        </div>
    )
}

export default Movie