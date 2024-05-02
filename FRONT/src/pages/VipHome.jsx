import React from 'react'

import { Link } from 'react-router-dom'

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
          <p>{item.stock}</p>
          <p>{item.description}</p>
        
          <Link to={`/id/${item._id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
    </>
  )
}

export default VipHome 