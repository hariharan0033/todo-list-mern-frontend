import React from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import TodoItemsContainerComponent from './components/TodoItemsContainerComponent/TodoItemsContainerComponent'

const App = () => {
  return (
    <React.Fragment>
      <HeaderComponent/>
      <TodoItemsContainerComponent/>
    </React.Fragment> 
  )
}

export default App