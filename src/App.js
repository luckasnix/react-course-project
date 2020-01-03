import React from 'react'
import FilterProvider from './state/filter/Provider'

function App() {
  return (
    <FilterProvider>
      <h1>Hello World!</h1>
    </FilterProvider>
  )
}

export default App
