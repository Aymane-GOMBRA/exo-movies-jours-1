import React from 'react'

const Day = ({ date, event }) => {
    return (
        <div style={{ width: '30px', height: '30px', display: 'flex' }}>
            {date.getDate()}
        </div>
    )
}

export default Day