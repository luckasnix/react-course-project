import React, { useState, useCallback, useEffect } from 'react'

function TodoItem({ id, title, completed, onStatusUpdate, onDelete }) {
    const [isChecked, setIsChecked] = useState(completed)
    const handleChange = useCallback((evt) => {
        setIsChecked(evt.target.checked)
    }, [])
    useEffect(() => {
        onStatusUpdate(id, isChecked)
    }, [onStatusUpdate, id, isChecked])
    return (
        <li>
            <span>{title}</span>
            <input type='checkbox' value={isChecked} onChange={handleChange}/>
            <button onClick={onDelete}>Deletar</button>
        </li>
    )
}

export default TodoItem