import React from 'react'
import { useParams } from 'react-router-dom'


const Tribu = () => {

  const parametros = useParams()
  const id = parametros.id

  const [tribu, setTribu] = React.useState([])

    React.useEffect(()=>{
        const obtenerDatos = async () =>{
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const tribu = await data.json()
            setTribu(tribu)
        }
        obtenerDatos()
    },[])
  return (
    <div>
        <h2>{tribu.name}</h2>
        <h3>{tribu.team_bonus}</h3>
    </div>
  )
}

export default Tribu