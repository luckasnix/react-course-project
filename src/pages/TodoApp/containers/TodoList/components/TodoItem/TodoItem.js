import React, { useState, useCallback, useEffect } from 'react'

function TodoItem({ id, title, completed, onModalOpen, onStatusUpdate, onDelete }) {
    const [isChecked, setIsChecked] = useState(completed)
    const handleChange = useCallback((evt) => {
        setIsChecked(evt.target.checked)
    }, [])
    useEffect(() => {
        onStatusUpdate(id, isChecked)
    }, [onStatusUpdate, id, isChecked])
    const handleTitleUpdate = useCallback(() => {
        onModalOpen(id)
    }, [onModalOpen, id])
    const handleDelete = useCallback(() => {
        onDelete(id)
    }, [onDelete, id])
    return (
        <li>
            <span>{title}</span>
            <button onClick={handleTitleUpdate}>Atualizar</button>
            <input type='checkbox' value={isChecked} onChange={handleChange}/>
            <button onClick={handleDelete}>Deletar</button>
        </li>
    )
}

export default TodoItem