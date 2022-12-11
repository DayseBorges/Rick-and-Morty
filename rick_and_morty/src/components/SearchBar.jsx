import styles from './SearchBar.module.css';
import { useState } from 'react';
import { connect } from "react-redux";
import { getCharacters } from '../redux/actions';

const SearchBar = (props) => {
   

   const [id, setId] = useState ('')

   const handleChange = ({target}) => {
      setId(target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault()
   }

   const getCharactersID = () => {
      return () => { 
             fetch(`https://rickandmortyapi.com/api/character/${id}`)
               .then((response) => response.json())
               .then((data) => {
              if (data.name) {
                 setId(...id, data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           });
         } 
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input 
               className={styles.imput} 
               type='search' 
               characterId=''   
               onChange={handleChange}/>
            <button 
            type="submit"
            className={styles.boton} 
            onClick={getCharactersID}>Agregar Personage</button>
         </form>
      </div>
   );
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getCharacters: (id) => {dispatch(getCharacters(id))}
//     }
// }

// export default connect(null, mapDispatchToProps) (SearchBar);
export default SearchBar;
