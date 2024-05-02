import Home from './pages/Home'
import CountHome from './pages/CountHome.jsx'
import Login from './pages/Login'
import UserHome from './pages/UserHome'
import VipHome from './pages/VipHome'
import ProductDetail from './pages/ProductDetail.jsx'


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
            {/* <Link to='/create'>Create</Link> */}
            <Link to='/login'> Login </Link>
            <Link to='/CountHome'>Client  </Link>
            <Link to='/UserHome'>Comercial  </Link>
            <Link to='/VipHome'>Admin </Link>
          </nav>
          
              <Routes>
                <Route path='/' element={<Home  />} />
                <Route path='/login' element={<Login data={data} />} />
                <Route path='/CountHome' element={<CountHome data={data} />} />
                <Route path='/UserHome' element={<UserHome data={data} />} />
                <Route path='/VipHome' element={<VipHome data={data} />} />
                <Route path={`/id/:_id`} element={<ProductDetail data={data} />} />
              </Routes>
        </div>
      </Router>
      </DataContextProvider>
    </>
  )
}

export default App
