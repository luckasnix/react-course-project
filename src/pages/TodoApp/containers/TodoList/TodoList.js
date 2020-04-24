import React, { useContext, useState, useCallback } from 'react'
import TodoItem from './components/TodoItem/TodoItem'
import TodoModal from './components/TodoModal/TodoModal'
import TodosContext from '../../../../state/todos/Context'
import * as todosActions from '../../../../state/todos/actions'
import FilterContext from '../../../../state/filter/Context'
import styles from './TodoList.module.css'

function filteredList(list, curFilter) {
    switch (curFilter) {
        case 'all':
            return list
        case 'active':
            return list.filter((item) => {
                return item.completed === false
            })
        case 'completed':
            return list.filter((item) => {
                return item.completed === true
            })
        default:
            throw new Error()
    }
}

function TodoList() {
    const { todos, dispatchToTodos } = useContext(TodosContext)
    const handleTitleUpdate = useCallback((id, title) => {
        dispatchToTodos(todosActions.toggleTodoTitle(id, title))
    }, [dispatchToTodos])
    const handleStatusUpdate = useCallback((id, completed) => {
        dispatchToTodos(todosActions.toggleTodoStatus(id, completed))
    }, [dispatchToTodos])
    const handleDelete = useCallback((id) => {
        dispatchToTodos(todosActions.removeTodo(id))
    }, [dispatchToTodos])
    const [curId, setCurId] = useState(null)
    const handleModalOpen = useCallback((id) => {
        setCurId(id)
    }, [])
    const handleModalClose = useCallback(() => {
        setCurId(null)
    }, [])
    const getTitle = useCallback((id) => {
        const curTodo = todos.find((todo) => {
            return todo.id === id
        })
        return curTodo.title
    }, [todos])
    const { filter } = useContext(FilterContext)
    return (
        <div className={styles.container}>
            <ul>
                {filteredList(todos, filter).map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onModalOpen={handleModalOpen}
                            onStatusUpdate={handleStatusUpdate}
                            onDelete={handleDelete}
                        />
                    )
                })}
            </ul>
            {curId && (
                <TodoModal
                    id={curId}
                    onModalClose={handleModalClose}
                    onTitleUpdate={handleTitleUpdate}
                    findTitle={getTitle}
                />
            )}
        </div>
    )
}

export default TodoList