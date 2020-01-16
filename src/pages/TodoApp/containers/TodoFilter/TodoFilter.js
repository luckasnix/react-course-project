import React, { useContext, useCallback } from 'react'
import FilterContext from '../../../../state/filter/Context'
import * as filterActions from '../../../../state/filter/actions'
import styles from './TodoFilter.module.css'

function TodoFilter() {
    const { filter, dispatchToFilter } = useContext(FilterContext)
    const handleFilterUpdate = useCallback((filter) => {
        dispatchToFilter(filterActions.toggleFilter(filter))
    }, [dispatchToFilter])
    return (
        <div className={styles.container}>
            <h1>{filter}</h1>
            <button onClick={() => { handleFilterUpdate('active')} }>Alterar filtro</button>
        </div>
    )
}

export default TodoFilter