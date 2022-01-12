import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/App.module.css'

function Navbar() {
  return (
    <div className={styles.nav}>
      <h1>Github Project</h1>
      <nav className={styles.navbar}>
        <Link to="/">User</Link> | <Link to="/repo">Repo</Link>
      </nav>
    </div>
  )
}

export default Navbar
