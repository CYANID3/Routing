import React from 'react'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'

function Layout({children}) {
  return (
    <>
    <Nav>
        <Link  to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Main">Main</Link>
      </Nav>
    {children}
    </>
  )
}

export default Layout