import React, { useReducer } from 'react'
import FilterContext from './Context'
import filterReducer from './reducer'

function Provider({ children }) {
    const [filter, dispatchToFilter] = useReducer(filterReducer, 'all')
    return (
        <FilterContext.Provider value={{ filter, dispatchToFilter }}>
            {children}
        </FilterContext.Provider>
    )
}

export default Provider