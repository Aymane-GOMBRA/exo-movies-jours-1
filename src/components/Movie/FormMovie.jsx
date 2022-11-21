import React, { useState } from 'react'

const FormMovie = ({ films, setFilms }) => {
    const [inputName, setInputName] = useState('')
    const [inputYear, setInputYear] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        setFilms([...films, {
            name: inputName,
            year: inputYear
        }]);
        setInputName('');
        setInputYear('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='Title' onChange={(e) => setInputName(e.target.value)} value={inputName} type="text" />
            <input placeholder='Year' onChange={(e) => setInputYear(e.target.value)} value={inputYear} type="number" />
            <button type="submit">Valider</button>
        </form>
    )
}

export default FormMovie