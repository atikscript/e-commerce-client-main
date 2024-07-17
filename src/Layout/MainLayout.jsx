import React from 'react'
import Footer from '../common/Footer/Footer'
import Header from '../common/Header/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout