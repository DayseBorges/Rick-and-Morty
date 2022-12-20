import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar.jsx";
import styles from "./Home.module.css"

const Home = () => {
    return(
        <div className={styles.fondo}>
            <NavBar /> 
            <Cards />
        </div>
    )
}

export default Home;