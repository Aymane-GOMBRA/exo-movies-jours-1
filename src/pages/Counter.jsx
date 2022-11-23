import React, { useState } from 'react'
import Display from '../counter/Display'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div style={{
            margin: "0 50px 0 50px",
            textAlign: "center"
        }}>
            <h1>Counter</h1>
            <Display value={counter} />
            <button onClick={() => setCounter(counter + 1)}>+1</button>
        </div>
    )
}

export default Counter