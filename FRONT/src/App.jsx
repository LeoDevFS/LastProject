

import { useEffect, useState } from 'react'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import Home from './pages/Home';

import './App.css'

function App() {
  
 const [data,setData]= useState(null)
 const urlApi = 'http://localhost:3000'

 const fetchData = async () =>{
  try {
    const response = await fetch(urlApi)
    const resData = await response.json()
    setData(resData)
    
  } catch (error) {
    console.log(error)
  }
 }

 useEffect(()=>{
  fetchData()
 },[])

  return (
    <>
      <Router>
        <div>
          <nav>
            <Link to='/'>HOME</Link>
            <Link to='/create'>Create</Link>
          </nav>
          {
            data===null ? (<div>loading...</div>) :
            <Routes>
              <Route path='/' element={  <Home data={data}/> }     />
            </Routes>
          }
        </div>
      </Router>
    </>
  )
}

export default App
