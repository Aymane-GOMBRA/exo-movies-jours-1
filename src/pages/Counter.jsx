import React, { useState } from 'react'
import Display from '../counter/Display'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h1>Counter</h1>
            <Display value={counter} />
            <button onClick={() => setCounter(counter + 1)}>+1</button>
        </div>
    )
}

export default Counter