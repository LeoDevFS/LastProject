import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function ProductDetail({data}) {
    const {_id} = useParams()

    const datafiltered = data.filter(item=>item._id == _id)


  return (
    <>
    <h1> details </h1>
        {datafiltered.map(item=>(
            <h2 key={item._id}>{item.title}</h2>
        ))}
        <p>falta eso</p>
    
    </>
  )
}

export default ProductDetail