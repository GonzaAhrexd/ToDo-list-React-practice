import React from 'react'

function ListaTareas(props) {
  return (
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Tarea</th>
        <th scope="col">Descripción</th>
        <th scope="col">Estado</th>
      </tr>
    </thead>
    <tbody>
   
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table>
  )
}

export default ListaTareas