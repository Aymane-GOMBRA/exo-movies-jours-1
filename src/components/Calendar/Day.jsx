import React, { useState } from 'react'

const Day = ({ date, event }) => {
    return (
        <div
            style={{
                width: '30px',
                height: '30px',
                display: 'flex',
                opacity: date.getMonth() === new Date().getMonth() ? 1 : 0.5,
                color: date.toDateString() === new Date().toDateString() && event ? 'red' : 'black'
            }}
        >
            {date.getDate()}
        </div>
    )
}

const isToday = (prevProps, nextProps) => {
    console.log(prevProps, nextProps);
    if (prevProps.event !== nextProps.event) return false
    return true
}
export default React.memo(Day, isToday)