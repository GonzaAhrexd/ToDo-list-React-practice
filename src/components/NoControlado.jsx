import React, { useRef, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'
function NoControlado() {
    const [error, setError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        setError()
        const data = new FormData(form.current)
        const {title, description, state} = Object.fromEntries([...data.entries()])
        console.log(title)
   
        //Validaciones
        if(!title.trim() || !description.trim()){
            return setError("Llena todos los campos")
        }
    }

    const form = useRef(null)
    
    return (
            <> 
        <form onSubmit={handleSubmit} ref={form}>
            <input type="text" placeholder='Ingrese ToDo' className='form-control mb-2' name="title"/>
            <textarea className='form-control mb-2' placeholder='Ingrese descripción' name="description"/>
            <select className="form-select mb-2"> 
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button className='btn btn-primary' type="submit">Procesar</button>
            {
                error!=='' && error
            }
        </form>
        </>
    )
}

export default NoControlado