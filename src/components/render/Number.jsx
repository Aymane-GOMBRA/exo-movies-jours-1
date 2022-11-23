import React, { useState } from 'react'

const Number = ({ number, borderColor }) => {
    const [background, setBackground] = useState('white')
    console.log('rendu' + number);
    return (
        <div
            style={{
                border: "solid 1px " + borderColor, margin: "5px", padding: "5px", background
            }}>
            {number} - <button onClick={() => setBackground(background === 'white' ? 'grey' : 'white')}>Change background</button>
        </div>
    )
}
const numberComparator = (prevProps, nextProps) => {
    // console.log(prevProps, nextProps);
    if (prevProps.borderColor !== nextProps.borderColor) return false
    return true
}
export default React.memo(Number, numberComparator)