import Home from './pages/Home'
// import CountHome from './pages/CountHome.jsx'
// import Login from './pages/Login'
// import UserHome from './pages/UserHome'
// import VipHome from './pages/VipHome'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
//import Home from './pages/Home';
import useFetch from './hooks/useFetch';

import './App.css'

function App() {
  
const [urlApi,setUrlApi]=useState('http://localhost:3000')
const data = useFetch(urlApi)

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
