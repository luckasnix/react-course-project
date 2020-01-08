import React, { useContext } from 'react'
import TodosContext from '../../../../state/todos/Context'
import styles from './TodoList.module.css'

function TodoList() {
    const { todos } = useContext(TodosContext)
    return (
        <div className={styles.container}>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li>{todo.title}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList