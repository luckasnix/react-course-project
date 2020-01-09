import React, { useContext, useCallback } from 'react'
import TodoItem from './components/TodoItem/TodoItem'
import TodosContext from '../../../../state/todos/Context'
import * as todosActions from '../../../../state/todos/actions'
import styles from './TodoList.module.css'

function TodoList() {
    const { todos, dispatchToTodos } = useContext(TodosContext)
    const handleDelete = useCallback((id) => {
        dispatchToTodos(todosActions.removeTodo(id))
    }, [dispatchToTodos])
    const handleStatusUpdate = useCallback((id, completed) => {
        dispatchToTodos(todosActions.toggleTodoStatus(id, completed))
    }, [dispatchToTodos])
    return (
        <div className={styles.container}>
            <ul>
                {todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onStatusUpdate={handleStatusUpdate}
                            onDelete={() => { handleDelete(todo.id) }}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList