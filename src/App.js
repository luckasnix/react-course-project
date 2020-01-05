import React from 'react'
import TodosProvider from './state/todos/Provider'
import FilterProvider from './state/filter/Provider'
import TodoApp from './pages/TodoApp/TodoApp'

function App() {
  return (
    <TodosProvider>
      <FilterProvider>
        <TodoApp/>
      </FilterProvider>
    </TodosProvider>
  )
}

export default App