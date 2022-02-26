import React from 'react'

const Saludo = (props) => {

  return (
    <div>
        <h2>Saludando a {props.nombre}</h2>
        <h3>Saludando a {props.edad}</h3>
    </div>
  )
}

export default Saludo