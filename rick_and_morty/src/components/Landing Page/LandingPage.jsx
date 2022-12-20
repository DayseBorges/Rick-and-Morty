import styles from './LandingPage.module.css'
import { Link } from 'react-router-dom';

const LandingPage = () => {

    return(
        <>
            <div className={styles.back}>
                <Link to="/home" >
                <button className={styles.boton}>LET'S GO!</button>
                </Link>
            </div>
        </> 
    )
}

export default LandingPage;