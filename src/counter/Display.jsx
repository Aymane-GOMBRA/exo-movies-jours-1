import React from 'react'

const Display = ({ value }) => {
    return (
        <div>
            <h2> {value} </h2>
        </div>
    )
}

const displayComparator = (prevProps, nextProps) => {
    if (prevProps.value < 9) return false
    return true
}
export default React.memo(Display, displayComparator)