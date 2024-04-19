import { useState } from 'react'

import './App.css'
import { Provider } from 'react-redux'
import store from './App/store'


import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'


function App() {


  return (
    <Provider store={store}>
      <h1>Vite + React</h1>
     <AddTodo></AddTodo>
      <TodoList></TodoList>
     
    </Provider>
  )
}

export default App
