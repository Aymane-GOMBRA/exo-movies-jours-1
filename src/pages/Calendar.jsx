import React from 'react'
import Month from '../components/Calendar/Month'

const Calendar = () => {
    return (
        <div>
            <h1>Calendar</h1>
            <Month date={new Date()} />
        </div>
    )
}

export default Calendar