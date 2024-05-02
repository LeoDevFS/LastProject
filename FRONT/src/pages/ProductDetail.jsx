import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { DataContext } from '../contexts/DataContext'


function ProductDetail() {
  const data = useContext(DataContext)
    const {_id} = useParams()

    const datafiltered = data.filter(item=>item._id == _id)


  return (
    <>
   
        {  data === null ? (<div>loading...</div>) :
        datafiltered.map(item=>(
            <h2 key={item._id}>{item.title}</h2>
        ))}
        
    
    </>
  )
}

export default ProductDetail