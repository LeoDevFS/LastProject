import Home from './pages/Home'
import CountHome from './pages/CountHome.jsx'
import Login from './pages/Login'
import UserHome from './pages/UserHome'
import VipHome from './pages/VipHome'
import ProductDetail from './pages/ProductDetail.jsx'
import InputCreate from './components/InputCreate.jsx'


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useContext } from 'react'

import {DataContextProvider} from './contexts/DataContext.jsx'
import { DataContext } from './contexts/DataContext.jsx'




import './App.css'



 function  App() {
  const data =  useContext(DataContext)


  return (
    <>
    <DataContextProvider>
      <Router>
        <div>
          <nav> 
            <Link to='/'> HOME </Link>
            <Link to='/create'>Create</Link>
            <Link to='/login'> Login </Link>
            <Link to='/CountHome'>Client  </Link>
            <Link to='/UserHome'>Comercial  </Link>
            <Link to='/VipHome'>Admin </Link>
          </nav>
          
              <Routes>
                <Route path='/' element={<Home  />} />
                <Route path='/login' element={<Login  />} />
                <Route path='/CountHome' element={<CountHome  />} />
                <Route path='/UserHome' element={<UserHome  />} />
                <Route path='/VipHome' element={<VipHome  />} />
                <Route path='/create' element={<InputCreate />} />
                <Route path={`/id/:_id`} element={<ProductDetail  />} />

              </Routes>
        </div>
      </Router>
      </DataContextProvider>
    </>
  )
}

export default App
