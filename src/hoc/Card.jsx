import React from 'react'

const Card = ({ children }) => {
    return (
        <div style={{
            padding: "10px",
            border: '1px solid black'
        }} >
            {children}
            <div>
                <button>X</button>
                <button>edit</button>
                <button>UP</button>
                <button>DOWN</button>
            </div>
        </div>
    )
}

export default Card