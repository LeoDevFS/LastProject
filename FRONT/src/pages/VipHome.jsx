import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { DataContext } from '../contexts/DataContext'
import { useDataContext } from '../contexts/DataContext'

function VipHome() {

  const data = useDataContext()

  return (
    <>
    <h2>Lista de Productos</h2>
    <ul>
      {data === null ? (<div>loading...</div>) :
      data.map(item => (
        <li key={item._id}>
          <p>{item.price}</p>
          <Link to={`/id/${item._id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
    </>
  )
}

export default VipHome 