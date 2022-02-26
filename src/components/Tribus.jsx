import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Tribus = () => {

  const [tribu, setTribu] = React.useState([])

  React.useEffect(()=> {
    const obtenerTribus = async () => {
      const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
      const tribus = await data.json()
      setTribu(tribus.civilizations)
    }
    obtenerTribus()
  }, [])


  return (
    <div>
      <h1>Tribus</h1>
      <ul>
        {
          tribu.map(item => (
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