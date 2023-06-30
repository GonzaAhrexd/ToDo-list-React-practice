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
             title: "Campos incompletos",
             text: "Usted dejó campos sin llenar", 
             timer: 3000})
        }else{
            addTodo({
                id: Date.now(),
                ...todo,
                state: state === "completado"

            })
            Swal.fire({
                icon: "success",
                title: "Se ha agregado la tarea", 
                timer: 3000})
        }
    }
    const handleChange = (e) => {
        setverify("")
        setTodo({ ...todo, 
            [e.target.name]: e.target.value 
            })
       
        if (todo.title.trim() === "" || todo.description.trim() === "") {
            setverify("Hay campos sin llenar")
        }
    }
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Ingrese ToDo' className='form-control mb-2' name="title" value={todo.title} onChange={handleChange} />
                <textarea className='form-control mb-2' placeholder='Ingrese descripción' name="description" value={todo.description} onChange={handleChange} />
                <div className='separate'>
                    <div>
                        <input type="checkbox" id="check" checked={todo.priority} onChange={(e) => setTodo({...todo, priority: e.target.checked})} />
                    </div>
                    <div>
                        <label htmlFor="check" className='label'>Dar Prioridad</label>
                    </div>
                </div>
                <select className="form-select mb-2" value={todo.state} name="state" onChange={(handleChange)}>
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                {
                    verify !== '' && verify
                }
                <p>
                    <button className='btn btn-primary btnMobile' type="submit" onClick={handleSubmit}>Agregar</button>
                </p>
            </form>
        </>
    )
}

export default Formulario