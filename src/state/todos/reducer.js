import * as todosTypes from './types'
import uuidv4 from 'uuid/v4'

function reducer(state, action) {
    switch (action.type) {
        case todosTypes.ADD_TODO:
            return state.concat({
                id: uuidv4(),
                title: action.payload.title,
                completed: false
            })
        case todosTypes.TOGGLE_TODO_STATUS:
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: action.payload.completed }
                } else {
                    return todo
                }
            })
        case todosTypes.TOGGLE_TODO_TITLE:
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, title: action.payload.title }
                } else {
                    return todo
                }
            })
        case todosTypes.REMOVE_TODO:
            return state.filter((todo) => {
                return todo.id !== action.payload.id
            })
        default:
            throw new Error()
    }
}

export default reducer