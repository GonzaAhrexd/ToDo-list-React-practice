import './App.css'
import Formulario from './components/Formulario'
import ListaTareas from './components/ListaTareas'
import { useEffect, useState } from 'react'

const storedTodos = localStorage.getItem('todos')
const initialState = storedTodos ? JSON.parse(storedTodos) : []

function App() {

const [todos, setTodos] = useState(initialState)
useEffect(()=> {
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])
const addTodo = (todo) => {
  setTodos([...todos,todo])
}

const deleteTodo = (id) => {
    const newArray = todos.filter(todo => todo.id !== id)
    setTodos(newArray)
}

const completeTodo = (id) => {
  const modifyArray = todos.map((todo)=>{
    if(todo.id === id){
        todo.state = !todo.state
    }
    return todo
  })
  setTodos(modifyArray)
}

const orderTodo = (todo) =>{
  return todo.sort((a,b)=>{
    if(a.priority === b.priority) return 0 
    if(a.priority) return -1
    if(!a.priority) return 1 
  }
  )
}
  return (
    <>
      <div className='container prueba'>
        <div className='formulario'>
          <h1>Add new task</h1>
          <Formulario addTodo={addTodo}></Formulario>
        </div>
        <div className='extend'>
        <ListaTareas todos={orderTodo(todos)} deleteTodo={deleteTodo} completeTodo={completeTodo}></ListaTareas>
        </div>
      </div>
    </>
  )
}

export default App
