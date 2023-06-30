import React from 'react'
import { useState } from 'react'
import '../App.css'
import Swal from 'sweetalert2'
function Formulario({addTodo}) {
    /*Validaciones en el momento*/
    const [verify, setverify] = useState()
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        state: '',
        priority: false
    })

    const {title, description, state, priority} = todo
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title.trim() || !description.trim())
        {
            return Swal.fire({
             icon: "error",
             title: "Fields are empty", 
             timer: 3000})
        }else{
            addTodo({
                id: Date.now(),
                ...todo,
                state: state === "completado"

            })
            Swal.fire({
                icon: "success",
                title: "Task added", 
                timer: 3000})
        }
    }
    const handleChange = (e) => {
        setverify("")
        setTodo({ ...todo, 
            [e.target.name]: e.target.value 
            })
       
        if (todo.title.trim() === "" || todo.description.trim() === "") {
            setverify("Some fields are empty")
        }
    }
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Add a title' className='form-control mb-2' name="title" value={todo.title} onChange={handleChange} />
                <textarea className='form-control mb-2' placeholder='Add a description' name="description" value={todo.description} onChange={handleChange} />
                <div className='separate'>
                    <div>
                        <input type="checkbox" id="check" checked={todo.priority} onChange={(e) => setTodo({...todo, priority: e.target.checked})} />
                    </div>
                    <div>
                        <label htmlFor="check" className='label'>Mark as important</label>
                    </div>
                </div>
                <select className="form-select mb-2" value={todo.state} name="state" onChange={(handleChange)}>
                    <option value="pendiente">Pending</option>
                    <option value="completado">Completed</option>
                </select>
                {
                    verify !== '' && verify
                }
                <p>
                    <button className='btn btn-primary btnMobile' type="submit" onClick={handleSubmit}>Add</button>
                </p>
            </form>
        </>
    )
}

export default Formulario