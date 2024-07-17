import React from 'react'
import Head from './Head'
import Navbar from './Navbar'
import './header.css'
import Search from './Search'
const Header = () => {
  return (
    <>
    <Head />
    <Search />
    <Navbar />
    </>
  )
}

export default Header