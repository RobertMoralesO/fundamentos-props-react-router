import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Tribus = () => {

  const [tribus, setTribus] = React.useState([])

  const obtenerTribus = async () => {
    const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
    const {civilizations} = await data.json()
    setTribus(civilizations)
  }

  React.useEffect(()=> {
    obtenerTribus()
  }, [])


  return (
    <div>
      <h1>Tribus</h1>
      <ul>
        {
          tribus.map(item => (
            <li key= {item.id}>
              <Link to={`/tribus/${item.id}`}>
                {item.name} - {item.expansion}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Tribus