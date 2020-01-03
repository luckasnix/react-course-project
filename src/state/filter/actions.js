import * as filterTypes from './types'

export function toggleFilter(filter) {
    return {
        type: filterTypes.TOGGLE_FILTER,
        payload: {
            filter: filter
        }
    }
}