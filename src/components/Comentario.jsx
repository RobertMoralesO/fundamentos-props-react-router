import React from 'react'
import Imagen from './Imagen'
const Comentario = ({urlImagen, nombre, texto}) => {
  return (
    <div>
        
        <Imagen urlImagen= {urlImagen}/>
        <div>
            <h2>{nombre}</h2>
            <h3>{texto} </h3>
        </div>
    </div>
  )
}

export default Comentario