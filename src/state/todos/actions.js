import * as todosTypes from './types'

export function addTodo(title) {
    return {
        type: todosTypes.ADD_TODO,
        payload: {
            title: title
        }
    }
}

export function toggleTodoStatus(id, completed) {
    return {
        type: todosTypes.TOGGLE_TODO_STATUS,
        payload: {
            id: id,
            completed: completed
        }
    }
}

export function toggleTodoTitle(id, title) {
    return {
        type: todosTypes.TOGGLE_TODO_TITLE,
        payload: {
            id: id,
            title: title
        }
    }
}

export function removeTodo(id) {
    return {
        type: todosTypes.REMOVE_TODO,
        payload: {
            id: id
        }
    }
}