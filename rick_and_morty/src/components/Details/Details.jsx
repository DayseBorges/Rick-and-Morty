import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions";
import styles from './Details.module.css'
import image from '../../imagenes/logo.png'


export default function Details() {
    const dispatch = useDispatch();
    const { id } = useParams()

    useEffect(() => {
        dispatch(getDetails(id));
    }, [dispatch, id]);

    const myDetails = useSelector(state => state.details);
    // const myCharac = useSelector(state => state.myCharacters);

    return (
        <Fragment>
                
            <div key={myDetails.id} className={styles.container}>
                
                <img src={myDetails.image} alt={myDetails.id} className={styles.img}/>
                

                <div className={styles.details}>
                <h2 className={styles.name} >{myDetails.name}</h2>

                    <div className={styles.containerBox}>

                        <div className={styles.data}>
                            <p> <p className={styles.a}>SPECIES</p> {myDetails.species} </p>
                        </div>

                        <div className={styles.data}>
                            <p> <p className={styles.a}> STATUS </p> {myDetails.status} </p>
                        </div>

                        <div className={styles.data}>
                            <p> <p className={styles.a}> GENDER </p>{myDetails.gender} </p>
                        </div>

                    </div>
                    
                </div>
                <img src={image} className={styles.logo} alt='logo'/> 

                <Link to={'/home'}><button className={styles.boton}>Back</button></Link>
            </div> 
        </Fragment>
    )
}