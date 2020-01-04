import React from 'react'
import TodosProvider from './state/todos/Provider'
import FilterProvider from './state/filter/Provider'

function App() {
  return (
    <TodosProvider>
      <FilterProvider>
        <h1>Hello World!</h1>
      </FilterProvider>
    </TodosProvider>
  )
}

export default App
