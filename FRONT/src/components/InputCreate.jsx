import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'

function InputCreate() {
    const [title,setTitle] = useState('')
    const [price,setPrice] = useState('')
    const [stock,setStock] = useState('')
    const [description,setDescription] = useState('')
    
    const urlApiCreate = 'http://localhost:3000/create'
    const [res, setRes]= useState(null)
    const payload = {title,price,stock,description}

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setRes('')

        try {
          const response = await fetch(urlApiCreate,{
            method:'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)//luego probar mandar directamente el payload con el nombre del OBJETO payload = {title}
          })
          if(response.ok){
            const data = await response.json()
            setRes(data.title,data.price)
            setTitle('')
            setPrice('')
            setStock('')
            setDescription('')
            
          }
        } catch (error) {
          console.log(error)
        }
        
    }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" value={title}  onChange={(e)=>setTitle(e.target.value)} placeholder='title of product' required/>
      <input type="number" value={price}  onChange={(e)=>setPrice(e.target.value)} placeholder='price of product' required/>
      <input type="text" value={description}  onChange={(e)=>setDescription(e.target.value)} placeholder='description of product' required/>
      <label htmlFor="stock">In Stock</label><input type="checkbox" value={stock}  onChange={(e)=>setStock(e.target.value)}  required/>
      <button type='submit'>crear producto</button>
    </form>
    <h2>Se ha creado el producto: {res}</h2>
    </>
  )
}

export default InputCreate