import React, { useContext, useCallback, useState, useEffect } from 'react'
import TodoSelect from './components/TodoSelect/TodoSelect'
import FilterContext from '../../../../state/filter/Context'
import * as filterActions from '../../../../state/filter/actions'
import styles from './TodoFilter.module.css'

function TodoFilter() {
    const { filter, dispatchToFilter } = useContext(FilterContext)
    const [selectValue, setSelectValue] = useState(filter)
    const handleOptionChange = useCallback((evt) => {
        setSelectValue(evt.target.value)
    }, [setSelectValue])
    const updateFilter = useCallback((filter) => {
        dispatchToFilter(filterActions.toggleFilter(filter))
    }, [dispatchToFilter])
    useEffect(() => {
        updateFilter(selectValue)
    }, [updateFilter, selectValue])
    return (
        <div className={styles.container}>
            <TodoSelect
                value={selectValue}
                onOptionChange={handleOptionChange}
                options={[
                    { value: 'all', title: 'Todas as tarefas' },
                    { value: 'active', title: 'Tarefas a se fazer' },
                    { value: 'completed', title: 'Tarefas realizadas' }
                ]}
            />
        </div>
    )
}

export default TodoFilter