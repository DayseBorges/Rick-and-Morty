import React from "react";
import SearchBar from "./SearchBar";
import styles from './Nav.module.css'
// import characters from "../data";
import { Link } from 'react-router-dom'
 

class NavBar extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className={styles.navBar}>
        <div className={styles.itens}>
          <Link className={styles.links} to={'/'}><p>Home</p></Link>
          <Link className={styles.links} to={'/form'}><p>Form</p></Link>
          <SearchBar />
      </div>
      </div>
    )
  }
}

export default NavBar;