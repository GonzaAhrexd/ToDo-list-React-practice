function Todo({ todo, deleteTodo, completeTodo}) {
 
    const {id, title, description, state, priority } = todo
    return (
        <li className="list-group-item" >
            <div>
                <div>
                <div className="d-flex justify-content-between">
                    <h5 className={`${state && 'text-decoration-line-through'}`}>{title}</h5>
                  <div> 
                      {priority ? <span className="badge text-bg-warning text-light"> ⚠️Important </span> : <p></p>}
                    </div>
                </div>
                    <p>{description}</p>
                    <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(id)}>✖️Delete</button>
                        <button className={state? "btn btn-sm btn-warning" : "btn btn-sm btn-success"} onClick={() => completeTodo(id)}>{state ? "➖Mark as incompleted" : "✅Mark as completed"}</button>
                    </div>
                </div>
                
            </div>
        </li>
    )
}

export default Todo