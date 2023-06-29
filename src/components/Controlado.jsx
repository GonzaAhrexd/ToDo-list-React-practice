import React from 'react'
import { useState } from 'react'
import '../App.css'
function Controlado() {
    const [verify, setverify] = useState()
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        state: '',
        priority: false
    })
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        console.log(e.target.type)
        setTodo({ ...todo, 
            [e.target.name]: e.target.value 
            })
        setverify("")
        if (!todo.title.trim() || !todo.description.trim()) {
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
                    <button className='btn btn-primary btnMobile' type="submit">Procesar</button>
                </p>
            </form>
        </>
    )
}

export default Controlado