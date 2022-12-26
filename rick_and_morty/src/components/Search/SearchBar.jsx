import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { getCharacters, getDetails } from '../../redux/actions';
import { useNavigate } from "react-router-dom";
import styles from './SearchBar.module.css';

export default function SearchBar () {
    const dispatch = useDispatch();
    const [searchId, setSearchId] = useState('');
    const navigate  = useNavigate();

    const handleChange = (event) => {
        setSearchId(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (searchId && searchId <= 826) {
            dispatch(getDetails(searchId))
            setSearchId('') 
            navigate(`/details/${searchId}`) 
        }else{
            window.alert('CHARACTER NOT FOUND!') 
        }
    }


    return (
        <div className={styles.container}>

            <input 
                className={styles.input} 
                type='number' 
                onChange={event => handleChange(event)} 
                value={searchId} 
                placeholder='SEARCH BY ID'/>

            <button 
                className={styles.boton}
                type='submit'
                onClick={event => handleSubmit(event)}>
                    🔍︎
            </button>

        </div>
    )
}