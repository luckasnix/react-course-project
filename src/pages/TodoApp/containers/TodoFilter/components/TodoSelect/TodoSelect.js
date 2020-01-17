import React from 'react'

function TodoSelect({ value, onOptionChange, options }) {
    return (
        <select value={value} onChange={onOptionChange}>
            {options.map((option) => {
                return <option key={option.value} value={option.value}>{option.title}</option>
            })}
        </select>
    )
}
export default TodoSelect