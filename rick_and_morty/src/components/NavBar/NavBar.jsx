import React from "react";
import SearchBar from '../Search/SearchBar'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'
 

function NavBar () {
  return (
    <div className={styles.navBar}>
      <div className={styles.itens}>
        <Link className={styles.links} to={'/home'}><p>Home</p></Link>
        <Link className={styles.links} to={'/form'}><p>Create Character</p></Link>
        <SearchBar />
      </div>
    </div>
  )
}

 
    

export default NavBar;