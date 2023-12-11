import React from 'react'
import styles from './Nav.module.css'
import { NavLink, Link } from 'react-router-dom'

function Nav({children}) {
  return (
    <div className={styles.nav}>
        {children}
    </div>
  )
}

export default Nav