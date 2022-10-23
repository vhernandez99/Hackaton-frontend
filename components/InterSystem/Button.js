import React from 'react'

export const Button = ({ text, primary }) => {
    const buttonStyle = primary
        ? 'bg-blue-400 rounded-lg px-3 py-1'
        : 'bg-white rounded-lg px-3 py-1 text-blue-400'

    return <button className={buttonStyle}>{text}</button>
}
