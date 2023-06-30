import React from 'react'
import Todo from './Todo'
import '../App.css'
function ListaTareas({ todos, deleteTodo, completeTodo }) {
  return (
    <div>
      <h1>Task</h1>
      <ul className='list-group'>
        {todos.length==0 ? <li className="list-group-item text-center">There's no todo</li> 
         : todos.map(todo => (
            <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo}  completeTodo={completeTodo}></Todo>
          ))
        }
      </ul>
    </div>
  )
}

export default ListaTareas