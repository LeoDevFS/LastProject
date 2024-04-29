import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {


  return (
    <div>
      <header>Barra de navegacion</header>
      <main>
        <Outlet />
      </main>
      <footer>Pie de Pagina</footer>
    </div>
  )
}

export default Header